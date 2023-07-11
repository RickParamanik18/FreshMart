import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    margin: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "500px",
}));
