import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const screenWidth = window.document.body.clientWidth;

export const StyledBox = styled(Grid)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `0px ${screenWidth >= 900 ? 40 : screenWidth >= 600 ? 20 : 5}px`,
}));

export const ImageContainer = styled(Box)(() => ({
    height: `${screenWidth >= 600 ? 150 : 100}px`,
    width: `${screenWidth >= 600 ? 150 : 100}px`,
}));
