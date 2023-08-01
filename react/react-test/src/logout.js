import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
    const { isAuthenticated,logout } = useAuth0();

    return isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    ) : null;
}

export default LogoutButton;