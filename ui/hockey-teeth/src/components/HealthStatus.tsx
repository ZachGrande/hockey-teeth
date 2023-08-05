import {useEffect, useState} from "react";
import config from "../../src/config";
import {Box, CircularProgress, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const HealthStatus = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${config.api.apiUrl}/status`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching status");
                }
                return response.json();
            })
            .then((data) => {
                setStatus(data.status);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error || status !== "up") {
        return (
            <Box>
                <ErrorIcon color="error" />
                <Typography variant="body1" color="error">
                    API is not available
                </Typography>
            </Box>
        )
    }

    return (
        <Box>
            <CheckCircleIcon color="success" />
            <Typography variant="body1">
                API is available
            </Typography>
        </Box>
    )
}

export default HealthStatus;