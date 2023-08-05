import {useEffect, useState} from "react";
import axios from "axios";
import config from "../../src/config";
import {Box, CircularProgress, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const HealthStatus = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${config.api.apiUrl}/status`)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("Error fetching status");
                }
                setStatus(response.data.status);
                setLoading(false);
            })
            .catch(() => {
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