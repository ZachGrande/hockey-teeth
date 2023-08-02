import React from "react";
import {Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";

const HomeAdmin = () => {
    const { logout } = useAuth0();
    return (
        <>
            <Typography variant="h1">
                ADMIN DASHBOARD
            </Typography>
            <button onClick={() => logout({
                logoutParams: { returnTo: window.location.origin }
            })}>Log Out</button>
        </>
    );
};

export default HomeAdmin;