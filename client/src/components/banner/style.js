import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TagLine = styled(Typography)(({theme})=>({
    fontWeight: 800,
    color:theme.palette.primary.light
}));
