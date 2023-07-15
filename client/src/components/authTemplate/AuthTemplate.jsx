import { useTheme } from "@emotion/react";
import { Paper, Container } from "@mui/material";

export const AuthTemplate = (props) => {
    const containerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <Container sx={containerStyles}>
            <Paper
                sx={{
                    padding: "54px 36px",
                    margin: "20px 0px",
                }}
            >
                {props.children}
            </Paper>
        </Container>
    );
};
