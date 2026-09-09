import { useContext } from "react";
import { UserContext } from "./UserProvider"; // update path as needed

export const useUser = () => useContext(UserContext);
