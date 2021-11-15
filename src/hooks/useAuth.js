import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const UseAuth = () => {
    return useContext(AuthContext)
};

export default UseAuth;