import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
    const { isAuthenticated,loginWithRedirect } = useAuth0();
    return !isAuthenticated ? (<button onClick={() => loginWithRedirect()}>Log in</button>) : null;
}

export default LoginButton;