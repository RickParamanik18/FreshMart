import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
}));

export const SliderBox = styled(Box)(({ theme }) => ({
    position: "relative",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
        width: "0.4em",
        height: "3px",
    },
    "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
    },
}));
