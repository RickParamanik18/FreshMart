import styled from "@emotion/styled";
import { Grid, Paper, Stack } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    boxShadow: theme.shadows[3],
    padding: "6px 18px",
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
