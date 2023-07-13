import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
}));

export const SliderBox = styled(Box)(({ theme }) => ({
    position: "relative",
    overflow: "scroll",
    scrollBehavior: "smooth",
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

const commonArrowStyle = {
    fontSize: "72px",
    zIndex: 1,
    opacity: 0.3,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all .3s ease",
};

export const LeftIcon = styled(NavigateBeforeOutlinedIcon)(({ theme }) => ({
    ...commonArrowStyle,
    position: "absolute",
    top: "50%",
    left: "1%",
    transform: "translate(0%,-50%)",
    "&:hover": {
        backgroundColor: "gray",
    },
}));
export const RightIcon = styled(NavigateNextOutlinedIcon)(({ theme }) => ({
    ...commonArrowStyle,
    position: "absolute",
    top: "50%",
    right: "1%",
    transform: "translate(0%,-50%)",
    "&:hover": {
        backgroundColor: "gray",
    },
}));
