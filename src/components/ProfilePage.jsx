"use client"

import { useState, useEffect } from "react"
import { User, Mail, Phone, BookOpen, Edit3, Camera, Save, X, ExternalLink, Calendar, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import avathar from "../assets/avathar.png"

export function ProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    joinDate: "",
  });

  const [editForm, setEditForm] = useState({ ...userInfo })

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const auth = getAuth();
      const storage = getStorage();
      const user = auth.currentUser;

      if (!user) return;

      const storageRef = ref(storage, `userAvatars/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      const db = getFirestore();
      await updateProfile(user, { photoURL: downloadURL });

      await setDoc(
        doc(db, "users", user.uid),
        { avatar: downloadURL },
        { merge: true }
      );

      setUserInfo((prev) => ({ ...prev, avatar: downloadURL }));
      setEditForm((prev) => ({ ...prev, avatar: downloadURL }));
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();
    window.scrollTo(0, 0)

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          const firestoreData = userDocSnap.exists() ? userDocSnap.data() : {};

          // Extract creation time or fallback
          const createdAt = user.metadata.creationTime
            ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            : "Recently";

          setUserInfo({
            name: firestoreData.name || user.displayName || "Student",
            email: firestoreData.email || user.email || "No Email",
            phone: firestoreData.phone || user.phoneNumber || "",
            avatar:
              firestoreData.avatar ||
              user.photoURL ||
              `https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || "A"}`,
            joinDate: createdAt,
          });
          setEditForm({
            name: firestoreData.name || user.displayName || "Student",
            email: firestoreData.email || user.email || "No Email",
            phone: firestoreData.phone || user.phoneNumber || "",
            avatar:
              firestoreData.avatar ||
              user.photoURL ||
              `https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || "A"}`,
            joinDate: createdAt,
          })
        } catch (error) {
          console.error("Error loading user info:", error);
        }
      } else {
        // Redirect to home if unauthenticated
        navigate("/");
        return;
      }
      setIsVisible(true);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    setIsEditing(false);
    setUserInfo({ ...editForm });

    try {
      const db = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        await updateProfile(user, {
          displayName: editForm.name,
          photoURL: editForm.avatar || user.photoURL || "",
        });

        await setDoc(
          doc(db, "users", user.uid),
          {
            name: editForm.name,
            email: editForm.email,
            phone: editForm.phone,
            avatar: editForm.avatar || "",
            uid: user.uid,
          },
          { merge: true }
        );
      }
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  const handleCancel = () => {
    setEditForm({ ...userInfo })
    setIsEditing(false)
  }

  const handleOpenLMS = () => {
    window.open("https://learnhub.codeemy.in/", "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden flex flex-col items-center" style={{ background: "linear-gradient(135deg,#0f0c29 0%,#1a1040 40%,#0d1b2a 100%)" }}>

      {/* Subtle Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 animate-pulse"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10 animate-pulse"
          style={{ background: "radial-gradient(circle,#2563eb,transparent 70%)", animationDelay: "1.5s" }} />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-6">

        {/* Page Header (Compact) */}
        <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Account <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Settings</span>
            </h1>
            <p className="text-sm text-gray-400">Manage your identity and access your dashboard.</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* Left Column: User Identity Profile */}
          <div className="lg:col-span-5">
            <div className={`bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transition-all duration-1000 delay-100 flex flex-col h-full ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>

              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative inline-block mb-4 group">
                  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={userInfo.avatar || avathar}
                      alt={userInfo.name}
                      className="w-full h-full rounded-full border-2 border-[#150f36] object-cover bg-[#0f0c29]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = avathar;
                      }}
                    />
                  </div>
                  <label className="absolute bottom-1 right-0 bg-white/[0.1] backdrop-blur-md text-white p-2 rounded-full shadow-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer group-hover:scale-110">
                    <Camera className="w-[14px] h-[14px]" />
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                </div>

                <h2 className="text-xl font-bold text-white mb-1.5">{userInfo.name}</h2>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-3 py-1 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5" />
                  CodeEmy Student
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-5" />

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Full Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full text-white text-sm px-3.5 py-2.5 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full text-white text-sm px-3.5 py-2.5 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Phone</label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="w-full text-white text-sm px-3.5 py-2.5 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div className="flex gap-2 pt-2 mt-auto">
                    <button
                      onClick={handleCancel}
                      className="flex-1 bg-white/5 border border-white/10 text-white text-sm py-2.5 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
                    >
                      <X className="w-3.5 h-3.5" /> Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex-1 text-white text-sm py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1.5 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                      style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
                    >
                      <Save className="w-3.5 h-3.5" /> Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-purple-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Email</div>
                      <div className="font-medium text-gray-200 text-xs truncate">{userInfo.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-indigo-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Phone</div>
                      <div className="font-medium text-gray-200 text-xs truncate">{userInfo.phone || '—'}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-blue-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Joined</div>
                      <div className="font-medium text-gray-200 text-xs truncate">{userInfo.joinDate}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleEdit}
                    className="w-full mt-3 bg-white/[0.04] border border-white/10 text-white text-sm py-2.5 rounded-xl font-medium hover:border-purple-500/30 hover:bg-white/[0.06] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Edit3 className="w-[14px] h-[14px]" /> Edit Info
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Premium "My Learning" Gateway */}
          <div className="lg:col-span-7">
            <div className={`h-full bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 shadow-2xl transition-all duration-1000 delay-200 flex flex-col justify-center relative overflow-hidden ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-full flex flex-col items-center lg:items-start relative z-10">

                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/20 rounded-full px-3 py-1.5 text-purple-200 text-[11px] uppercase tracking-widest font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome Back
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 mb-6 w-full text-center lg:text-left">

                  {/* Smaller Visual Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 border border-white/10 rounded-2xl flex items-center justify-center relative z-10 rotate-3 transition-transform duration-500">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                      Continue Learning
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
                      Access your enrolled courses, track progress, and view certificates instantly.
                    </p>
                  </div>
                </div>

                <div className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 mb-8 flex items-start gap-3 text-left max-w-lg mx-auto lg:mx-0">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-1">Secure Sync</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Your progress is actively synced to the central LearnHub portal. All content resides there.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full flex-wrap justify-center lg:justify-start">
                  <button
                    onClick={handleOpenLMS}
                    className="group px-6 py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5,#3b82f6)", backgroundSize: "200% 200%", animation: "gradient 5s ease infinite" }}
                  >
                    Open Dashboard
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    learnhub.codeemy.in
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </div>
  )
}
