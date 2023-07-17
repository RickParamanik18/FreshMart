import { Box, Container } from "@mui/system";
import nothingFoundImg from "../../../public/nothing-found.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const NothingFound = () => {
    const navigate = useNavigate();
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box component={"img"} src={nothingFoundImg} />
            <Button onClick={() => navigate("/")}>go to home</Button>
        </Container>
    );
};
