import AI_image from "../assets/AI_course.jpg"
import web from "../assets/web.jpg"
import android from "../assets/android.jpg"
import data_analytics from "../assets/data_analytics.jpg"
import digital from "../assets/digital_marketing.jpg"
import CAD from "../assets/autocad.jpg"
import HR from "../assets/HR.jpg"
import cyber from "../assets/cyber.jpg"
import AWS from "../assets/AWS.jpg"
import machine_intelligence from "../assets/ML.png"
import fashion_design from "../assets/FASHION.png"
import iot_robotics from "../assets/IOT.png"
import product_design from "../assets/ProductDesign.png"
import python_engineering from "../assets/PYTHON.png"
import uiux_design from "../assets/UIUX.png"
import { medicalCourses } from "./MedicalCourses";
const course_details = {
  ...Object.fromEntries(medicalCourses.map(course => [course.id, course])),
  "WEBDEV-001": {
    title: "Full Stack Web Development",
    tagline: "Become a Job-Ready Full Stack Developer in 90 Days",
    description: "Master full stack web development from beginner to advanced with real-world projects in just 4 months.",
    instructor: "CodeEmy Team",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face", // Replace if you have actual mentor image
    image: web,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "200+",
    duration: "3-4 Months",
    lessons: 60,
    level: "Beginner to Advanced",
    nextBatch: "May 2025",
    seatsLeft: 7,
    category: "Web Development",
    gradient: "from-purple-600 to-purple-800",

    whatYoullLearn: [
      "Build responsive websites using HTML5, CSS3, and JavaScript",
      "Create interactive UIs with React.js and manage states efficiently",
      "Develop backend services with Node.js, Express.js, and MongoDB",
      "Integrate APIs and handle full stack application logic",
      "Deploy websites and apps using GitHub, Netlify, and Vercel",
      "Secure applications with authentication and authorization",
      "Work on real-world industry projects and deploy them live",
      "Build a complete Full Stack portfolio and become job-ready"
    ],

    syllabus: [
      {
        id: 1,
        title: "HTML & CSS Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Web Development",
          "HTML5 Structure & Tags",
          "CSS3 Styling, Colors, Fonts",
          "CSS Box Model, Positioning",
          "Mini Project: Personal Portfolio Page"
        ]
      },
      {
        id: 2,
        title: "Advanced CSS & Responsive Design",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Flexbox & CSS Grid",
          "Media Queries for Responsive Design",
          "CSS Animations & Transitions",
          "Introduction to Tailwind CSS",
          "Mini Project: Responsive Landing Page"
        ]
      },
      {
        id: 3,
        title: "JavaScript Fundamentals",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "JavaScript Syntax & Variables",
          "Functions, Arrays, Objects",
          "DOM Manipulation & Event Handling",
          "Form Validation with JavaScript",
          "Mini Project: Interactive To-Do App"
        ]
      },
      {
        id: 4,
        title: "Advanced JavaScript & ES6+",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "ES6 Features (let, const, arrow functions)",
          "Template Literals, Spread & Rest Operators",
          "Fetch API & Promises",
          "Async/Await Concepts",
          "Mini Project: Weather App using API"
        ]
      },
      {
        id: 5,
        title: "React.js Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to React & JSX",
          "Components, Props, and State",
          "Handling Events in React",
          "React Forms & Controlled Components",
          "Mini Project: React-based Calculator"
        ]
      },
      {
        id: 6,
        title: "Advanced React & UI Libraries",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "React Hooks (useState, useEffect)",
          "Conditional Rendering & Lists",
          "React Router for Navigation",
          "UI Styling with Bootstrap & Tailwind",
          "Mini Project: React Blog App"
        ]
      },
      {
        id: 7,
        title: "Backend with Node.js",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Node.js & NPM",
          "Creating Servers with Express.js",
          "Middleware & Routing in Express",
          "Working with REST API",
          "Mini Project: REST API for To-Do App"
        ]
      },
      {
        id: 8,
        title: "MongoDB & Database Operations",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to MongoDB & Mongoose",
          "CRUD Operations (Create, Read, Update, Delete)",
          "Schema & Models in Mongoose",
          "Connecting Node.js with MongoDB",
          "Mini Project: Blog API with Database"
        ]
      },
      {
        id: 9,
        title: "Authentication & Security",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "User Authentication (JWT & Bcrypt)",
          "Authorization & Role-Based Access",
          "Session Management",
          "Securing API Endpoints",
          "Mini Project: Secure Login System"
        ]
      },
      {
        id: 10,
        title: "Full Stack Integration",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Connecting Frontend (React) with Backend (Node.js)",
          "Fetching & Displaying Data from API",
          "State Management with Redux or Context API",
          "Handling Errors & Loading States",
          "Mini Project: Full Stack Blog Application"
        ]
      },
      {
        id: 11,
        title: "Deployment & DevOps Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Deployment on Vercel, Netlify, or Render",
          "Environment Variables & Production Setup",
          "Introduction to AWS Basics for Hosting",
          "Version Control with Git & GitHub",
          "Mini Project: Deploy Full Stack App"
        ]
      },
      {
        id: 12,
        title: "Major Project & Career Prep",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Major Project: E-Commerce Website OR Social Media App",
          "Resume Building & GitHub Portfolio Setup",
          "Interview Preparation & Career Guidance",
          "Project Presentation & Code Review",
          "Final Deployment & Career Roadmap"
        ]
      }
    ],

    certification: {
      title: "Full Stack Web Developer Certificate",
      description:
        "Upon successful completion, you'll receive a verified certificate that you can share on LinkedIn and add to your resume.",
      features: [
        "Industry-recognized certificate",
        "Shareable on social media",
        "Add to LinkedIn profile",
        "Include in your resume",
        "Lifetime validity"
      ]
    }
  },

  "AI-004": {

    title: "Artificial Intelligence (AI)",
    tagline: "Go from Zero to AI Engineer with Real Projects in 90 Days",
    description: "Master AI, Machine Learning, Deep Learning, and Neural Networks with real-world projects and get job-ready in 4 months.",
    instructor: "Dr. Aisha Verma",
    instructorAvatar: "https://images.unsplash.com/photo-1590080876772-15d3f622d1c3?w=64&h=64&fit=crop&crop=face",
    image: AI_image,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "200+",
    duration: "3-4 Months",
    lessons: 60,
    level: "Beginner to Advanced",
    nextBatch: "May 2025",
    seatsLeft: 5,
    category: "Artificial Intelligence",
    gradient: "from-purple-700 to-purple-900",

    whatYoullLearn: [
      "Understand core AI concepts and their real-world applications",
      "Master Python programming for AI and data analysis",
      "Build machine learning and deep learning models",
      "Work with neural networks, NLP, and computer vision",
      "Create AI chatbots and implement prompt engineering",
      "Visualize data using Matplotlib and Seaborn",
      "Deploy AI applications using Flask, Django, and cloud platforms",
      "Participate in freelancing and offline project fests"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to AI & Python Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "What is AI? Applications & Future",
          "Python Basics (Variables, Data Types, Loops)",
          "Functions, Lists, Dictionaries",
          "Jupyter Notebook Setup",
          "Mini Project: Simple Calculator in Python"
        ]
      },
      {
        id: 2,
        title: "Python for Data Handling",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "NumPy Basics (Arrays, Operations)",
          "Pandas for Data Analysis",
          "Data Cleaning & Preprocessing",
          "Reading & Writing CSV Files",
          "Mini Project: Analyze a Sales Dataset"
        ]
      },
      {
        id: 3,
        title: "Data Visualization",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Matplotlib & Seaborn",
          "Plotting Graphs & Charts",
          "Understanding Data Patterns",
          "Visualization Best Practices",
          "Mini Project: Visualize COVID-19 Data"
        ]
      },
      {
        id: 4,
        title: "Statistics & Probability for AI",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Mean, Median, Mode",
          "Variance, Standard Deviation",
          "Probability Distributions",
          "Correlation & Regression Basics",
          "Mini Project: Analyze Student Performance Data"
        ]
      },
      {
        id: 5,
        title: "Introduction to Machine Learning",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "What is Machine Learning?",
          "Supervised vs Unsupervised Learning",
          "Linear Regression, Logistic Regression",
          "Model Evaluation (Accuracy, Precision)",
          "Mini Project: Predict House Prices"
        ]
      },
      {
        id: 6,
        title: "Machine Learning Algorithms",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Decision Trees & Random Forest",
          "K-Nearest Neighbors (KNN)",
          "Support Vector Machines (SVM)",
          "Overfitting & Underfitting Concepts",
          "Mini Project: Predict Loan Approval"
        ]
      },
      {
        id: 7,
        title: "Deep Learning Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Neural Networks",
          "Perceptron & Activation Functions",
          "Forward & Backpropagation",
          "Building a Simple Neural Network",
          "Mini Project: Handwritten Digit Recognition (MNIST)"
        ]
      },
      {
        id: 8,
        title: "Advanced Deep Learning",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to TensorFlow & Keras",
          "Convolutional Neural Networks (CNN)",
          "Image Classification Basics",
          "Training & Tuning Models",
          "Mini Project: Image Classifier for Fruits"
        ]
      },
      {
        id: 9,
        title: "Natural Language Processing (NLP)",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to NLP",
          "Tokenization, Stemming, Lemmatization",
          "Sentiment Analysis",
          "Working with NLTK & SpaCy",
          "Mini Project: Twitter Sentiment Analysis"
        ]
      },
      {
        id: 10,
        title: "AI with OpenAI & Chatbots",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Generative AI",
          "Using OpenAI API for Chatbots",
          "Building AI-based Chat Applications",
          "Prompt Engineering Basics",
          "Mini Project: Build an AI Chatbot"
        ]
      },
      {
        id: 11,
        title: "AI Deployment & Integration",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Deploying AI Models with Flask/Django",
          "Creating REST API for AI Models",
          "Deployment on Cloud (AWS, Render, Vercel)",
          "Model Optimization for Production",
          "Mini Project: Deploy Sentiment Analysis App"
        ]
      },
      {
        id: 12,
        title: "Major Project & Career Prep",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Major Projects: Recommendation System, Face Recognition, Chatbot",
          "Resume Building & GitHub Portfolio Setup",
          "Interview Preparation & Career Guidance",
          "Final Code Review & Mentorship",
          "Showcase & Deployment"
        ]
      }
    ],

    certification: {
      title: "AI Specialist Certificate",
      description: "After completing the course, you'll receive a verified certificate that showcases your expertise in AI, ML, and Deep Learning.",
      features: [
        "Globally recognized certificate",
        "Add to LinkedIn and resume",
        "Proves mastery in AI tools & frameworks",
        "Ideal for job applications and freelancing",
        "Lifetime validity and access"
      ]
    }
  },

  "CYBER-002": {

    title: "Cyber Security & Ethical Hacking",
    tagline: "Become a Certified Ethical Hacker & Protect the Digital World",
    description: "Become a certified cyber security professional and ethical hacker with hands-on experience in network security, penetration testing, and threat detection in just 4 months.",
    instructor: "Mr. Arjun Mehta",
    instructorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&h=64&fit=crop&crop=face",
    image: cyber,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.7,
    students: "200+",
    duration: "3-4 Months",
    lessons: 60,
    level: "Beginner to Advanced",
    nextBatch: "May 2025",
    seatsLeft: 6,
    category: "Cybersecurity",
    gradient: "from-rose-600 to-red-800",

    whatYoullLearn: [
      "Understand the fundamentals of cybersecurity and networking",
      "Perform ethical hacking and penetration testing techniques",
      "Analyze and secure web applications and networks",
      "Detect and analyze malware and cyber threats",
      "Use industry tools like Kali Linux, Nmap, and Wireshark",
      "Simulate real-world cyber attacks and security breaches",
      "Prepare for jobs and freelance opportunities in cybersecurity",
      "Work on real projects and gain mentor-reviewed feedback"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to Cybersecurity",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Basics of Cybersecurity & Ethical Hacking",
          "Types of Cyber Threats & Attacks",
          "Understanding CIA Triad (Confidentiality, Integrity, Availability)",
          "Mini Project: Research Report on Recent Cyber Attacks"
        ]
      },
      {
        id: 2,
        title: "Networking Fundamentals for Cybersecurity",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "OSI & TCP/IP Models",
          "IP Addressing & Subnetting",
          "Network Devices & Protocols (DNS, HTTP, FTP)",
          "Mini Project: Analyze Network Traffic using Wireshark"
        ]
      },
      {
        id: 3,
        title: "Linux & Windows Fundamentals",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Linux Commands for Security",
          "File Permissions & User Management",
          "Windows Security Basics",
          "Mini Project: Configure a Secure Linux Server"
        ]
      },
      {
        id: 4,
        title: "Footprinting & Reconnaissance",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Information Gathering Techniques",
          "WHOIS Lookup, DNS Enumeration",
          "Google Dorking, Social Engineering Basics",
          "Mini Project: Perform Recon on a Target Website (Legally)"
        ]
      },
      {
        id: 5,
        title: "Scanning & Enumeration",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Network Scanning with Nmap",
          "Port Scanning & Banner Grabbing",
          "Vulnerability Scanning using Nessus/OpenVAS",
          "Mini Project: Network Scanning Lab Exercise"
        ]
      },
      {
        id: 6,
        title: "System Hacking & Exploitation",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Password Cracking Techniques (Brute Force, Dictionary)",
          "Privilege Escalation Methods",
          "Keyloggers & Backdoors",
          "Mini Project: Crack Password Hashes in a Lab Environment"
        ]
      },
      {
        id: 7,
        title: "Malware & Trojans",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Types of Malware (Viruses, Worms, Ransomware)",
          "Trojan Horse & RAT (Remote Access Tools)",
          "Anti-Malware Techniques",
          "Mini Project: Analyze Malware Behavior in Sandbox"
        ]
      },
      {
        id: 8,
        title: "Web Application Hacking",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "OWASP Top 10 Vulnerabilities",
          "SQL Injection, XSS, CSRF Attacks",
          "Broken Authentication & Session Hijacking",
          "Mini Project: Perform SQL Injection on Test App"
        ]
      },
      {
        id: 9,
        title: "Wireless Network Security",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Wireless Encryption (WEP, WPA, WPA2)",
          "Cracking Wi-Fi Passwords",
          "Rogue Access Points & Evil Twin Attacks",
          "Mini Project: Secure a Wireless Network"
        ]
      },
      {
        id: 10,
        title: "Social Engineering & Phishing",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Phishing Attacks & Prevention",
          "Email Spoofing & Social Engineering Techniques",
          "Building Awareness Campaigns",
          "Mini Project: Create a Phishing Simulation (Legal Lab)"
        ]
      },
      {
        id: 11,
        title: "Incident Response & Digital Forensics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Steps in Incident Response (Preparation, Detection, Containment)",
          "Basics of Digital Forensics",
          "Evidence Collection & Chain of Custody",
          "Mini Project: Investigate a Security Breach Scenario"
        ]
      },
      {
        id: 12,
        title: "Major Project & Career Prep",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Major Project Ideas: Penetration Test Report, Network Vulnerability Assessment, Security Audit",
          "Resume Building & Certification Guidance",
          "Interview Preparation & Job Assistance",
          "Final Presentation & GitHub Portfolio Setup",
          "Mentorship & Career Roadmap"
        ]
      }
    ],

    certification: {
      title: "Certified Cybersecurity Professional",
      description: "On course completion, you'll receive a certificate recognized by industry experts to validate your cybersecurity and ethical hacking skills.",
      features: [
        "Recognized completion certificate",
        "Suitable for job and freelance profiles",
        "Add to LinkedIn and resume",
        "Proves practical and theoretical cybersecurity expertise",
        "Lifetime access and validation"
      ]
    }
  },
  "MKTG-005": {

    title: "Digital Marketing",
    tagline: "Master Digital Marketing & Land Your Dream Marketing Role",
    description: "Become a certified digital marketing expert in 3 months with hands-on training in SEO, PPC, social media, content strategy, and real-time campaign projects.",
    instructor: "Ms. Riya Kapoor",
    instructorAvatar: "https://images.unsplash.com/photo-1614285144644-9c8d9f8509f1?w=64&h=64&fit=crop&crop=face",
    image: digital,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.6,
    students: "200+",
    duration: "2-3 Months",
    lessons: 60,
    level: "Beginner to Advanced",
    nextBatch: "May 2025",
    seatsLeft: 8,
    category: "Marketing",
    gradient: "from-pink-500 to-yellow-500",

    whatYoullLearn: [
      "Search Engine Optimization (SEO) & Search Engine Marketing (SEM)",
      "Google Ads & Pay-Per-Click (PPC) Campaigns",
      "Social Media Marketing (SMM) – Facebook, Instagram, LinkedIn",
      "Content Marketing, Blogging & Email Campaigns",
      "Web Analytics, Conversion Optimization & Funnel Building",
      "E-commerce & Affiliate Marketing",
      "Influencer Marketing & Brand Strategy"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to Digital Marketing",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "What is Digital Marketing?",
          "Digital Marketing vs Traditional Marketing",
          "Digital Marketing Channels Overview",
          "Understanding Buyer Persona & Customer Journey",
          "Mini Project: Create a Digital Marketing Plan for a Brand"
        ]
      },
      {
        id: 2,
        title: "Search Engine Optimization (SEO)",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Basics of SEO & Search Engine Algorithms",
          "Keyword Research (Google Keyword Planner, Ubersuggest)",
          "On-Page SEO (Meta Tags, Headers, Alt Text)",
          "Off-Page SEO (Backlinking Strategies)",
          "Mini Project: Optimize a Blog Post for SEO"
        ]
      },
      {
        id: 3,
        title: "Search Engine Marketing (SEM) & Google Ads",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Google Ads & PPC",
          "Creating Google Search Ads Campaign",
          "Keyword Match Types & Bidding Strategies",
          "Ad Extensions & Quality Score",
          "Mini Project: Run a Google Ads Simulation Campaign"
        ]
      },
      {
        id: 4,
        title: "Social Media Marketing (SMM)",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Overview of Facebook, Instagram, LinkedIn, X",
          "Content Strategy for Social Media",
          "Paid Ads on Facebook & Instagram",
          "Creating Engaging Content (Graphics & Videos)",
          "Mini Project: Plan a Social Media Campaign for a Product Launch"
        ]
      },
      {
        id: 5,
        title: "Content Marketing & Blogging",
        duration: "1 Week",
        lessons: 4,
        topics: [
          "Importance of Content in Digital Marketing",
          "Content Creation Strategy (Blog, Video, Infographics)",
          "Copywriting Basics & SEO Writing Tips",
          "Mini Project: Write a 1000-word SEO Blog Post"
        ]
      },
      {
        id: 6,
        title: "Email Marketing & Automation",
        duration: "1 Week",
        lessons: 4,
        topics: [
          "Introduction to Email Marketing",
          "Building & Segmenting Email Lists",
          "Writing High-Conversion Emails",
          "Email Automation Tools (Mailchimp, Sendinblue)",
          "Mini Project: Create an Email Campaign for a Product"
        ]
      },
      {
        id: 7,
        title: "Web Analytics & Conversion Tracking",
        duration: "1 Week",
        lessons: 4,
        topics: [
          "Google Analytics & Google Tag Manager Basics",
          "Setting Up Goals & Conversion Tracking",
          "Analyzing Campaign Performance",
          "Mini Project: Create a Google Analytics Dashboard"
        ]
      },
      {
        id: 8,
        title: "Digital Marketing Strategy & Major Project",
        duration: "1 Week",
        lessons: 4,
        topics: [
          "Creating a Complete Digital Marketing Strategy",
          "Budget Allocation for SEO, Ads, and Social Media",
          "Freelancing & Career Opportunities",
          "Major Project Ideas: Digital Marketing Plan for E-Commerce, Paid Ads for Local Business, SEO Audit"
        ]
      }
    ],

    certification: {
      title: "Certified Digital Marketing Professional",
      description: "Upon completion, receive a certificate recognized by top digital agencies and recruiters validating your practical skills across major marketing tools.",
      features: [
        "Verified and shareable certificate",
        "Accepted for job and freelance profiles",
        "Demonstrates practical campaign and tool experience",
        "Downloadable and LinkedIn-ready",
        "Valid for lifetime portfolio usage"
      ]
    }
  },
  "DATA-006": {
    title: "Data Analytics",
    tagline: "Become a Data Analyst & Make Data-Driven Decisions",
    description: "Master data analytics in 3 months with live training in Excel, SQL, Python, Power BI, Tableau, and real-world business projects reviewed by industry mentors.",
    instructor: "Mr. Arjun Mehta",
    instructorAvatar: "https://images.unsplash.com/photo-1603415526960-f7e0328f630d?w=64&h=64&fit=crop&crop=face",
    image: data_analytics,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "200+",
    duration: "2-3 Months",
    lessons: 60,
    level: "Beginner to Advanced",
    nextBatch: "May 2025",
    seatsLeft: 9,
    category: "Data Analytics",
    gradient: "from-green-500 to-blue-500",

    whatYoullLearn: [
      "Data Cleaning, Wrangling & Exploration",
      "Descriptive & Inferential Statistics",
      "Excel for Data Analytics & Business Dashboards",
      "SQL for Data Querying & Reporting",
      "Python for Data Analysis (NumPy, Pandas, Matplotlib, Seaborn)",
      "Power BI & Tableau for Data Visualization",
      "Basic Machine Learning & Predictive Analytics"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to Data Analytics & Excel Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "What is Data Analytics? Scope & Applications",
          "Types of Analytics (Descriptive, Diagnostic, Predictive)",
          "Excel Basics: Formulas, Functions, Charts",
          "Mini Project: Create a Sales Dashboard in Excel"
        ]
      },
      {
        id: 2,
        title: "Advanced Excel for Analytics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Pivot Tables & Pivot Charts",
          "Data Cleaning & Preprocessing in Excel",
          "Conditional Formatting & Lookups (VLOOKUP, HLOOKUP)",
          "Mini Project: Analyze Customer Data using Excel"
        ]
      },
      {
        id: 3,
        title: "SQL for Data Analytics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Basics of SQL (SELECT, WHERE, ORDER BY)",
          "Joins, Group By, Aggregate Functions",
          "Writing Complex Queries for Data Extraction",
          "Mini Project: Query a Database to Generate Business Insights"
        ]
      },
      {
        id: 4,
        title: "Data Visualization using Power BI/Tableau",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Introduction to Power BI & Tableau",
          "Connecting Data Sources",
          "Creating Interactive Dashboards",
          "Data Storytelling Techniques",
          "Mini Project: Build a Power BI Dashboard for Sales Performance"
        ]
      },
      {
        id: 5,
        title: "Python for Data Analytics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Python Basics (Variables, Loops, Functions)",
          "Using Pandas & NumPy for Data Manipulation",
          "Data Cleaning & Transformation in Python",
          "Mini Project: Analyze E-commerce Data with Python"
        ]
      },
      {
        id: 6,
        title: "Data Visualization with Python",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Matplotlib & Seaborn for Charts",
          "Visualizing Trends & Patterns",
          "Correlation Heatmaps & Histograms",
          "Mini Project: Visualize Marketing Campaign Data"
        ]
      },
      {
        id: 7,
        title: "Statistics & Business Insights",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Descriptive Statistics (Mean, Median, Variance)",
          "Hypothesis Testing & Correlation Analysis",
          "Generating Actionable Insights for Business",
          "Mini Project: Analyze Customer Churn and Provide Recommendations"
        ]
      },
      {
        id: 8,
        title: "Major Project & Career Preparation",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Sales & Revenue Analysis for a Retail Brand",
          "Customer Churn Analysis for a Telecom Company",
          "Marketing Campaign Performance Analysis",
          "Resume Building, Portfolio Setup & Mock Interviews"
        ]
      }
    ],

    certification: {
      title: "Certified Data Analytics Professional",
      description: "Upon completion, receive a professional certificate validating your skills in data analytics tools and projects, recognized by employers and freelancing platforms.",
      features: [
        "Verified and shareable certificate",
        "Recognized for freelance and full-time roles",
        "Reviewed industry-level projects included",
        "Downloadable and LinkedIn-ready",
        "Valid for lifetime portfolio use"
      ]
    }
  },
  "CAD-007": {
    title: "AutoCAD & CATIA",
    description: "Master 2D drafting and 3D modeling using AutoCAD & CATIA in 3 months. Gain hands-on experience with real-world mechanical, civil, and aerospace design projects.",
    instructor: "Mr. Nikhil Verma",
    instructorAvatar: "https://images.unsplash.com/photo-1603415526960-f7e0328f630d?w=64&h=64&fit=crop&crop=face",
    image: CAD,
    price: "₹14999",
    originalPrice: "₹24999",
    rating: 4.7,
    students: "200+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Design & CAD",
    gradient: "from-yellow-500 to-orange-500",

    whatYoullLearn: [
      "2D Drafting & Annotation with AutoCAD",
      "3D Modeling, Assembly, and Surface Design in CATIA",
      "Geometrical Dimensioning & Tolerancing (GD&T)",
      "Sheet Metal & Surface Modeling",
      "Isometric Views, Rendering & Technical Drawings",
      "Industry-Level Mechanical and Structural Design Projects"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to CAD & AutoCAD Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "What is CAD? Role in Design & Manufacturing",
          "AutoCAD Interface, Commands, and Workspaces",
          "Drawing Basics: Lines, Arcs, Circles, Polygons",
          "Mini Project: Simple 2D Mechanical Part Drawing"
        ]
      },
      {
        id: 2,
        title: "Advanced 2D Drafting in AutoCAD",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Layers, Blocks, and Attributes",
          "Dimensions & Annotations",
          "Hatching & Gradient",
          "Plotting & Printing Drawings",
          "Mini Project: Floor Plan for a Residential Building"
        ]
      },
      {
        id: 3,
        title: "3D Modeling in AutoCAD",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "3D Tools: Extrude, Revolve, Sweep, Loft",
          "UCS (User Coordinate System) & Viewports",
          "Creating 3D Solids & Surfaces",
          "Rendering & Visualization in AutoCAD",
          "Mini Project: 3D Model of a Machine Component"
        ]
      },
      {
        id: 4,
        title: "Introduction to CATIA & Interface",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "CATIA Workbenches Overview",
          "Sketcher Workbench: 2D Sketching & Constraints",
          "Part Design: Creating Basic 3D Features",
          "Mini Project: Model a Simple Mechanical Part in CATIA"
        ]
      },
      {
        id: 5,
        title: "Advanced Part Design in CATIA",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Pad, Pocket, Shaft, Groove, Fillets, Chamfers",
          "Boolean Operations (Union, Subtract, Intersect)",
          "Patterns & Draft Angles",
          "Mini Project: Design an Engine Piston"
        ]
      },
      {
        id: 6,
        title: "Assembly Design in CATIA",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Creating Assemblies",
          "Applying Constraints (Mate, Coincidence, Offset)",
          "Exploded Views & Interference Check",
          "Mini Project: Assemble a Gearbox Model"
        ]
      },
      {
        id: 7,
        title: "Surface Design & Drafting",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Advanced Surface Modeling",
          "Generative Shape Design Workbench",
          "Drafting & Drawing Sheet Generation",
          "Mini Project: Surface Design of a Car Body"
        ]
      },
      {
        id: 8,
        title: "Final Project & Career Preparation",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Complete 3D Engine Assembly in CATIA",
          "Civil Floor Plan + 3D Building Model in AutoCAD",
          "Product Design with Surface Modeling (Car/Aerospace Part)",
          "Exporting Files for Manufacturing (2D & 3D)",
          "Resume Building & Freelance Opportunities"
        ]
      }
    ],

    certification: {
      title: "Certified CAD Designer – AutoCAD & CATIA",
      description: "Earn a certification showcasing your CAD design proficiency and project portfolio, helping you stand out for engineering design roles and freelancing opportunities.",
      features: [
        "Verified and shareable certificate",
        "Recognized by engineering recruiters and CAD agencies",
        "Includes reviewed design projects",
        "Downloadable and LinkedIn-ready",
        "Lifetime validity and portfolio enhancement"
      ]
    }
  },

  "CLOUD-008": {
    title: "AWS Cloud Computing",
    description: "Master AWS cloud infrastructure in 3 months with hands-on training in EC2, S3, Lambda, VPC, RDS, and deploy scalable, secure applications with real-world projects.",
    instructor: "Ms. Ananya Rao",
    instructorAvatar: "https://images.unsplash.com/photo-1614285144644-9c8d9f8509f1?w=64&h=64&fit=crop&crop=face",
    image: AWS,
    price: "₹14999",
    originalPrice: "₹24999",
    rating: 4.9,
    students: "200+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Cloud Computing",
    gradient: "from-blue-600 to-indigo-500",

    whatYoullLearn: [
      "AWS Fundamentals & Cloud Architecture",
      "Compute Services (EC2, Lambda)",
      "Storage (S3, Glacier) & Database Services (RDS, DynamoDB)",
      "Networking (VPC, Route53)",
      "IAM & Security Best Practices",
      "Monitoring & Cost Management",
      "Deploying Scalable Cloud Applications",
      "Introduction to DevOps on AWS (CI/CD, CodePipeline, CloudFormation)"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to Cloud & AWS",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "What is Cloud Computing?",
          "Cloud Service Models: IaaS, PaaS, SaaS",
          "AWS Global Infrastructure & Services Overview",
          "Setting Up AWS Free Tier Account",
          "Mini Project: Launch Your First EC2 Instance"
        ]
      },
      {
        id: 2,
        title: "Compute Services",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "EC2 (Elastic Compute Cloud) – Instances & AMIs",
          "EBS (Elastic Block Store) – Volumes & Snapshots",
          "Auto Scaling & Load Balancer Basics",
          "Mini Project: Create and Configure EC2 with Auto Scaling"
        ]
      },
      {
        id: 3,
        title: "Storage Services",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "S3 (Simple Storage Service) – Buckets & Policies",
          "Glacier for Archival Storage",
          "Storage Classes & Lifecycle Policies",
          "Mini Project: Host a Static Website on S3"
        ]
      },
      {
        id: 4,
        title: "Networking & Security",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "VPC (Virtual Private Cloud) – Subnets, Routing, NAT",
          "Security Groups & NACLs",
          "Elastic IP & Route 53 for DNS Management",
          "IAM (Identity & Access Management) Basics",
          "Mini Project: Configure a Secure VPC with Public & Private Subnets"
        ]
      },
      {
        id: 5,
        title: "Databases & Monitoring",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "RDS (Relational Database Service) – MySQL/PostgreSQL",
          "DynamoDB (NoSQL Database)",
          "CloudWatch for Monitoring",
          "Mini Project: Deploy RDS Database and Connect with EC2"
        ]
      },
      {
        id: 6,
        title: "Serverless & Application Services",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "AWS Lambda (Serverless Compute)",
          "API Gateway",
          "SQS (Simple Queue Service) & SNS (Simple Notification Service)",
          "Mini Project: Build a Serverless Application using Lambda + API Gateway"
        ]
      },
      {
        id: 7,
        title: "Automation & DevOps on AWS",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "CloudFormation (Infrastructure as Code)",
          "Elastic Beanstalk",
          "Introduction to CI/CD with CodePipeline",
          "Mini Project: Deploy an Application with Elastic Beanstalk"
        ]
      },
      {
        id: 8,
        title: "Final Project & Certification Prep",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Multi-Tier Web Application Deployment",
          "Secure VPC with EC2, RDS & Load Balancer",
          "Serverless Application using Lambda & DynamoDB",
          "AWS Certification (Cloud Practitioner & Solutions Architect) Tips",
          "Resume & Interview Preparation"
        ]
      }
    ],

    certification: {
      title: "Certified AWS Cloud Practitioner",
      description: "Upon completion, receive an industry-recognized certificate that validates your AWS cloud deployment and architectural skills for freelance and full-time opportunities.",
      features: [
        "Verified and shareable certificate",
        "Valued by top tech companies & cloud service providers",
        "Includes practical cloud project deployment",
        "Downloadable and LinkedIn-ready",
        "Lifetime validity with cloud portfolio access"
      ]
    }
  },
  "HR-009": {
    title: "HR Analytics & Recruitment",
    description: "Master modern HR practices and data-driven recruitment in 3 months with tools like Excel, Power BI, Tableau, and real-time HR analytics projects.",
    instructor: "Ms. Divya Iyer",
    instructorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&h=64&fit=crop&crop=face",
    image: HR,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "200+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Human Resources",
    gradient: "from-pink-500 to-red-500",

    whatYoullLearn: [
      "Fundamentals of HR Functions & Modern Recruitment Process",
      "HR Metrics & KPIs – Measure employee performance, turnover, and engagement",
      "Excel for HR Analytics – Pivot tables, dashboards, HR reports",
      "Google Sheets & Google Forms for recruitment automation",
      "Power BI & Tableau for HR data visualization",
      "Resume Screening, ATS Systems & Interview Strategies",
      "Predictive HR Analytics – Forecast hiring, retention, and workforce planning"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to HR Analytics",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Basics of HR Analytics & Importance in HR",
          "HR Metrics & KPIs: Recruitment, Retention, Performance",
          "Role of Analytics in HR Decision-Making",
          "Mini Project: Calculate Recruitment KPIs (Cost per Hire, Time to Hire)"
        ]
      },
      {
        id: 2,
        title: "HR Data Management & Excel Basics",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "HR Data Sources: HRMS, ATS, Surveys",
          "Excel Basics for HR: Functions, Filters, Pivot Tables",
          "Creating Dashboards in Excel for HR Metrics",
          "Mini Project: HR Dashboard for Employee Attrition Analysis"
        ]
      },
      {
        id: 3,
        title: "Advanced Excel for HR",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Conditional Formatting & Charts",
          "Forecasting Workforce Needs in Excel",
          "HR Budget Analysis Using Excel",
          "Mini Project: Employee Performance Trend Analysis"
        ]
      },
      {
        id: 4,
        title: "Recruitment Analytics",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Recruitment Funnel & Conversion Metrics",
          "AI & Automation in Recruitment",
          "Predicting Time to Fill & Quality of Hire",
          "Mini Project: Analyze Recruitment Data for Top Hiring Sources"
        ]
      },
      {
        id: 5,
        title: "Power BI for HR Visualization",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Introduction to Power BI",
          "Importing HR Data & Creating Interactive Dashboards",
          "Visualizing Attrition & Diversity Metrics",
          "Mini Project: Power BI Dashboard for Recruitment Insights"
        ]
      },
      {
        id: 6,
        title: "Predictive HR Analytics",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Basics of Statistics for HR Analytics",
          "Predictive Modeling for Attrition & Retention",
          "Intro to Python for HR Data Analysis (Pandas & Visualization)",
          "Mini Project: Build an Attrition Prediction Model using Python"
        ]
      },
      {
        id: 7,
        title: "Performance & Engagement Analytics",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Measuring Employee Performance & Engagement",
          "Sentiment Analysis using Survey Data",
          "Linking Analytics to HR Strategy & Business Goals",
          "Mini Project: Analyze Employee Engagement Survey Results"
        ]
      },
      {
        id: 8,
        title: "Final Project & Career Prep",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Workforce Planning & Attrition Prediction Dashboard",
          "Recruitment Funnel Analysis & Optimization",
          "Employee Performance & Engagement Insights",
          "Resume Building & Interview Questions for HR Analytics",
          "Freelancing & HR Analytics Career Tips"
        ]
      }
    ],

    certification: {
      title: "Certified HR Analyst & Recruiter",
      description: "Receive an industry-recognized certification that validates your skills in HR analytics, recruitment strategies, and predictive workforce planning.",
      features: [
        "Verified and shareable certificate",
        "Trusted by HR leaders & hiring managers",
        "Includes real-world HR dashboards and recruitment campaigns",
        "Downloadable and LinkedIn-ready",
        "Freelance & placement support included"
      ]
    }
  },
  "MOBILE-003": {
    title: "Android & iOS App Development",
    description: "Master Flutter and Dart to build beautiful, high-performance apps for Android & iOS with real-time projects, Firebase integration, and deployment.",
    instructor: "Mr. Rahul Vardhan",
    instructorAvatar: "https://images.unsplash.com/photo-1603415526960-f7e0328fddb5?w=64&h=64&fit=crop&crop=face",
    image: android,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.9,
    students: "200+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "App Development",
    gradient: "from-yellow-500 to-orange-600",

    whatYoullLearn: [
      "Flutter Framework for cross-platform development",
      "Dart Programming Language",
      "UI/UX Designing for mobile apps",
      "Firebase Integration, REST APIs, and Database Handling",
      "Publishing Apps to Play Store & App Store",
      "State Management & Performance Optimization"
    ],

    uniqueFeatures: [
      "Earn While You Learn – Get rewarded for project submissions during the course",
      "Exclusive Freelancing Program – Learn to get international freelancing app development projects",
      "Campus Leaderboard Across Colleges – Compete with developers and earn recognition",
      "Mentor-Reviewed Projects – Get expert feedback and guidance on your work",
      "Offline Project Fest Every 3 Months – Showcase your mobile apps and connect with recruiters"
    ],

    toolsCovered: [
      "Flutter", "Dart", "Firebase", "Android Studio", "Xcode", "Git", "GitHub"
    ],

    careerSupport: [
      "Resume Building", "Mock Interviews", "Job Assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction & Setup",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Basics of Mobile App Development",
          "Installing Flutter & Dart SDK",
          "Setting up Android Studio & VS Code",
          "Understanding Flutter Architecture"
        ],
        miniProject: "\"Hello World\" Flutter App"
      },
      {
        id: 2,
        title: "Dart Programming Fundamentals",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Dart Syntax, Variables, Data Types",
          "Control Statements & Functions",
          "Object-Oriented Programming in Dart",
          "Collections (List, Map, Set)"
        ],
        miniProject: "Calculator App in Dart"
      },
      {
        id: 3,
        title: "Flutter Basics",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Flutter Widgets (Stateless & Stateful)",
          "Layouts: Column, Row, Stack",
          "Text, Images, Buttons in Flutter",
          "Hot Reload & Debugging"
        ],
        miniProject: "Simple Profile App"
      },
      {
        id: 4,
        title: "UI Design & Navigation",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Material Design & Cupertino Widgets",
          "Navigation & Routes in Flutter",
          "AppBar, Drawer, Bottom Navigation Bar",
          "Styling & Theming in Flutter"
        ],
        miniProject: "Multi-Screen Travel App"
      },
      {
        id: 5,
        title: "State Management",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Understanding State in Flutter",
          "setState() and State Lifecycle",
          "Provider & Riverpod for State Management"
        ],
        miniProject: "To-Do App with State Management"
      },
      {
        id: 6,
        title: "Forms & User Input",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Form Widgets & Validation",
          "Handling User Input",
          "Keyboard Management & Focus Handling"
        ],
        miniProject: "Login & Registration App"
      },
      {
        id: 7,
        title: "Networking & API Integration",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "HTTP Requests with REST API",
          "JSON Parsing in Flutter",
          "Handling API Responses & Errors"
        ],
        miniProject: "Weather App using OpenWeather API"
      },
      {
        id: 8,
        title: "Database & Local Storage",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "SQLite Database Integration",
          "Shared Preferences for Local Storage",
          "Hive NoSQL Database Basics"
        ],
        miniProject: "Notes App with Local Storage"
      },
      {
        id: 9,
        title: "Firebase Integration",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Firebase Authentication (Email/Password, Google Sign-In)",
          "Firebase Realtime Database & Firestore",
          "Firebase Cloud Messaging (Push Notifications)"
        ],
        miniProject: "Chat App with Firebase"
      },
      {
        id: 10,
        title: "Advanced Features",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Accessing Device Features (Camera, Location, Sensors)",
          "Image Upload & File Handling",
          "Background Services & Notifications"
        ],
        miniProject: "Image Sharing App"
      },
      {
        id: 11,
        title: "Deployment & Publishing",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Testing & Debugging Flutter Apps",
          "Building APK & IPA Files",
          "Publishing App on Google Play Store & Apple App Store",
          "App Store Optimization Basics"
        ],
        miniProject: "Deploy a Portfolio App"
      },
      {
        id: 12,
        title: "Major Project & Career Prep",
        duration: "1 Week",
        lessons: 6,
        topics: [
          "Resume Building", "GitHub Portfolio Setup", "Interview Preparation", "Career Guidance"
        ],
        majorProjects: [
          "E-Commerce App with Firebase Backend",
          "Social Media App with Authentication",
          "Food Delivery App with Payment Integration"
        ]
      }
    ],

    certification: {
      title: "Certified Mobile App Developer",
      description: "Get a verified certificate recognizing your mobile app development skills in Flutter, Firebase, and full app lifecycle from design to deployment.",
      features: [
        "Shareable & downloadable certificate",
        "Freelance & placement-ready",
        "Includes real-time app deployments",
        "Recognized by recruiters & tech startups",
        "Lifetime credential with GitHub portfolio link"
      ]
    }
  },

  "ML-010": {
    title: "Applied Machine Intelligence Mastery",
    description: "Master Machine Learning, Deep Learning, and AI tools to build intelligent systems, predictive models, and real-world AI applications.",
    instructor: "Dr. Arjun Mehta",
    instructorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face",
    image: machine_intelligence,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.9,
    students: "220+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Artificial Intelligence",
    gradient: "from-purple-600 to-indigo-800",
    brochureLink: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf/main/Applied%20Machine%20Intelligence%20Mastery%20Program%20-%20CodeEmy!.pdf",

    whatYoullLearn: [
      "Machine Learning fundamentals",
      "Supervised & Unsupervised Learning",
      "Deep Learning with Neural Networks",
      "Computer Vision and NLP basics",
      "Model evaluation and deployment",
      "Real-world AI projects"
    ],

    uniqueFeatures: [
      "Earn While You Learn project rewards",
      "Freelancing AI project mentorship",
      "Campus leaderboard competitions",
      "Mentor-reviewed real projects",
      "Offline AI innovation showcase"
    ],

    toolsCovered: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Jupyter Notebook",
      "Google Colab"
    ],

    careerSupport: [
      "Resume Building",
      "Mock Interviews",
      "Placement Assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to AI & ML",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "AI vs ML vs Data Science",
          "Applications of Machine Learning",
          "Setting up Python ML environment",
          "Introduction to datasets"
        ],
        miniProject: "Basic Data Exploration"
      },
      {
        id: 2,
        title: "Python for Machine Learning",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "NumPy and Pandas",
          "Data Cleaning",
          "Feature Engineering",
          "Data Visualization"
        ],
        miniProject: "Data Analysis Dashboard"
      },
      {
        id: 3,
        title: "Supervised Learning",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Linear Regression",
          "Logistic Regression",
          "Decision Trees",
          "Model Evaluation"
        ],
        miniProject: "House Price Prediction"
      },
      {
        id: 4,
        title: "Unsupervised Learning",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Clustering",
          "K-Means Algorithm",
          "Dimensionality Reduction",
          "Principal Component Analysis"
        ],
        miniProject: "Customer Segmentation"
      },
      {
        id: 5,
        title: "Deep Learning",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Neural Networks",
          "Backpropagation",
          "Activation Functions",
          "TensorFlow basics"
        ],
        miniProject: "Image Classification"
      }
    ],

    certification: {
      title: "Certified Machine Intelligence Developer",
      description: "Industry-recognized certification validating your AI and Machine Learning expertise.",
      features: [
        "Verified digital certificate",
        "Shareable LinkedIn credential",
        "Recognized by startups and recruiters",
        "Includes real AI project portfolio"
      ]
    }
  },

  "FASHION-011": {
    title: "Fashion Technology & Design",
    description: "Learn fashion illustration, garment construction, textile science, and fashion design principles to build a professional fashion portfolio.",
    instructor: "Ms. Kavya Sharma",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    image: fashion_design,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "180+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Fashion Design",
    gradient: "from-pink-500 to-purple-700",
    brochureLink: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf/main/Fashion%20Technology%20%26%20Design%20Program%20-%20CodeEmy!.pdf",

    whatYoullLearn: [
      "Fashion illustration techniques",
      "Fabric selection and textile knowledge",
      "Pattern making and garment construction",
      "Fashion styling and branding",
      "Portfolio building",
      "Fashion industry insights"
    ],

    uniqueFeatures: [
      "Fashion portfolio mentorship",
      "Design competitions",
      "Campus fashion leaderboard",
      "Industry mentor feedback",
      "Offline design showcase"
    ],

    toolsCovered: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Fashion Sketching Tools",
      "Pattern Making Tools"
    ],

    careerSupport: [
      "Resume Building",
      "Portfolio Review",
      "Placement Assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to Fashion Design",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "History of Fashion",
          "Elements of Design",
          "Color Theory",
          "Fashion Trends"
        ],
        miniProject: "Trend Board"
      },
      {
        id: 2,
        title: "Fashion Illustration",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Human Proportions",
          "Croquis Drawing",
          "Fabric Rendering",
          "Outfit Sketching"
        ],
        miniProject: "Fashion Illustration Portfolio"
      }
    ],

    certification: {
      title: "Certified Fashion Designer",
      description: "Professional certification validating fashion design and garment construction skills.",
      features: [
        "Portfolio-based certification",
        "Industry recognition",
        "Design showcase opportunity"
      ]
    }
  },

  "IOT-012": {
    title: "Next-Gen IoT & Robotics",
    description: "Learn embedded systems, sensors, robotics programming, and IoT communication to build smart devices and automation systems.",
    instructor: "Mr. Rohan Kulkarni",
    instructorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face",
    image: iot_robotics,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "210+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "IoT",
    gradient: "from-blue-600 to-indigo-700",
    brochureLink: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf/main/Next-Gen%20IoT%20%26%20Robotics%20Program%20-%20CodeEmy!.pdf",

    whatYoullLearn: [
      "IoT architecture",
      "Sensors and microcontrollers",
      "Embedded programming",
      "Robotics automation",
      "IoT cloud integration",
      "Smart device development"
    ],

    toolsCovered: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "Node-RED",
      "Python"
    ],

    careerSupport: [
      "IoT project portfolio",
      "Resume building",
      "Placement assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "IoT Fundamentals",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "IoT ecosystem",
          "Sensors & actuators",
          "Embedded systems",
          "Basic electronics"
        ],
        miniProject: "Smart Sensor System"
      }
    ],

    certification: {
      title: "Certified IoT & Robotics Engineer",
      description: "Certification validating skills in IoT devices and robotics systems.",
      features: [
        "Verified digital certificate",
        "Industry-recognized credential",
        "Includes IoT project portfolio"
      ]
    }
  },

  "CAD3D-013": {
    title: "Product Design & 3D Modeling",
    description: "Master CAD design using AutoCAD and CATIA to build professional mechanical and industrial product designs.",
    instructor: "Mr. Karan Desai",
    instructorAvatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&h=64&fit=crop&crop=face",
    image: product_design,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.7,
    students: "160+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Engineering Design",
    gradient: "from-cyan-600 to-blue-800",
    brochureLink: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf/main/Product%20Design%20%26%203D%20Modeling%20Program%20-%20CodeEmy!.pdf",

    whatYoullLearn: [
      "2D drafting with AutoCAD",
      "3D modeling with CATIA",
      "Mechanical design concepts",
      "Industrial design workflow",
      "Product prototyping"
    ],

    toolsCovered: [
      "AutoCAD",
      "CATIA",
      "SolidWorks",
      "Fusion 360"
    ],

    careerSupport: [
      "Resume Building",
      "Portfolio Review",
      "Placement Assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "Introduction to CAD",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "CAD basics",
          "2D drafting",
          "Dimensioning",
          "Design principles"
        ],
        miniProject: "Mechanical Drawing"
      }
    ],

    certification: {
      title: "Certified CAD Designer",
      description: "Certification validating AutoCAD and CATIA design skills.",
      features: [
        "Verified digital certificate",
        "Industry-recognized credential",
        "Includes 3D design project portfolio"
      ]
    }
  },

  "PYTHON-014": {
    title: "Advanced Python Engineering",
    description: "Master Python programming for automation, data processing, backend development, and real-world software projects.",
    instructor: "Mr. Amit Verma",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    image: python_engineering,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.9,
    students: "300+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Programming",
    gradient: "from-green-600 to-emerald-800",
    brochureLink: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf/main/Python%20Programming%20-%20CodeEmy!.pdf",

    whatYoullLearn: [
      "Python fundamentals",
      "Object-oriented programming",
      "Database integration",
      "Automation scripting",
      "Backend development basics"
    ],

    toolsCovered: [
      "Python",
      "Flask",
      "Django",
      "SQLite",
      "Git"
    ],

    careerSupport: [
      "Resume Building",
      "Mock Interviews",
      "Placement Assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "Python Basics",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "Variables",
          "Data types",
          "Loops",
          "Functions"
        ],
        miniProject: "Number Guessing Game"
      }
    ],

    certification: {
      title: "Certified Python Developer",
      description: "Certification validating advanced Python programming skills.",
      features: [
        "Verified digital certificate",
        "Shareable LinkedIn credential",
        "Recognized by recruiters",
        "Includes real Python project portfolio"
      ]
    }
  },

  "UIUX-015": {
    title: "UI/UX Design & Prototyping",
    description: "Learn UX research, wireframing, UI design, and prototyping to design modern digital products and experiences.",
    instructor: "Ms. Sneha Kapoor",
    instructorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    image: uiux_design,
    price: "₹14,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    students: "210+",
    duration: "120 hours",
    lessons: 60,
    level: "Beginner to Advanced",
    category: "Design",
    gradient: "from-purple-500 to-pink-700",
    brochureLink: "https://raw.githubusercontent.com/codeemy123/codeemy-pdf/main/UIUX%20Design%20%26%20Prototyping%20Program%20-%20CodeEmy!.pdf",

    whatYoullLearn: [
      "UX research methods",
      "Wireframing & prototyping",
      "Design systems",
      "User interface design",
      "Usability testing"
    ],

    toolsCovered: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Miro"
    ],

    careerSupport: [
      "Resume Building",
      "Portfolio Review",
      "Placement Assistance"
    ],

    syllabus: [
      {
        id: 1,
        title: "UX Fundamentals",
        duration: "1 Week",
        lessons: 5,
        topics: [
          "UX principles",
          "User research",
          "Personas",
          "User journeys"
        ],
        miniProject: "UX Case Study"
      }
    ],

    certification: {
      title: "Certified UI/UX Designer",
      description: "Industry recognized certificate validating UI/UX design expertise.",
      features: [
        "Verified digital certificate",
        "Portfolio-based certification",
        "Shareable LinkedIn credential",
        "Industry recognition"
      ]
    }
  }

}

export default course_details;
