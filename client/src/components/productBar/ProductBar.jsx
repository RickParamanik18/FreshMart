import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import pic from "../../../public/banner.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Button } from "@mui/material";
import { ImageContainer, StyledBox } from "./style";

export const ProductBar = () => {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <StyledBox>
                    <DeleteOutlineIcon sx={{ cursor: "pointer" }} />
                </StyledBox>
                <StyledBox>
                    <ImageContainer
                        component={"img"}
                        src={pic}
                    ></ImageContainer>
                </StyledBox>
                <StyledBox>
                    <Typography variant="caption">
                        Parle Platina Hide & Seek Chocolate Chip Cookies
                        <br />4 items
                    </Typography>
                </StyledBox>
                <StyledBox>
                    <Button
                        variant="outlined"
                        startIcon={<AddShoppingCartOutlinedIcon />}
                        size="small"
                    >
                        add
                    </Button>
                </StyledBox>
            </Box>
            <Divider />
        </Box>
    );
};
