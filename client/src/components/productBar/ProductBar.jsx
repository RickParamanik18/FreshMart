import { Divider, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Button } from "@mui/material";
import { ImageContainer, StyledBox } from "./style";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/auth.context";
import { cart, wishlist } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

export const ProductBar = (props) => {
    const navigate = useNavigate();
    const [isInCart, setIsInCart] = useState(null);
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);

    useEffect(() => {
        setIsInCart(
            userData.cart
                ? userData.cart.map((item) => item._id).includes(props._id)
                : null
        );
    }, [userData]);

    const toCart = async (operation) => {
        try {
            if (isLoggedIn) {
                const result = await cart(operation, props, token);
                if (result.status == 200) setAuthData();
            } else {
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
            alert("something wet wrong");
        }
    };

    const toWishlist = async (operation) => {
        try {
            if (isLoggedIn) {
                const result = await wishlist(operation, props, token);
                if (result.status == 200) setAuthData();
            } else {
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
            alert("something went wrong");
        }
    };

    return (
        <Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <StyledBox>
                    <DeleteOutlineIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => toWishlist("remove")}
                    />
                </StyledBox>
                <StyledBox
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/product/${props._id}`)}
                >
                    <ImageContainer
                        component={"img"}
                        src={props.image}
                    ></ImageContainer>
                </StyledBox>
                <StyledBox flexDirection={"column"}>
                    <Typography variant="caption">{props.name}</Typography>
                    <Box width={"100%"}>
                        <Rating value={Math.floor(props.rating)} readOnly />
                    </Box>
                </StyledBox>
                <StyledBox>
                    <Button
                        variant={isInCart ? "contained" : "outlined"}
                        startIcon={<AddShoppingCartOutlinedIcon />}
                        size="small"
                        onClick={() => toCart(isInCart ? "remove" : "add")}
                    >
                        {isInCart ? "remove" : "add"}
                    </Button>
                </StyledBox>
            </Box>
        </Box>
    );
};
