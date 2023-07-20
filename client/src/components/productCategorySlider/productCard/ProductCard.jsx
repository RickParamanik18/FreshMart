import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
    Box,
    Rating,
} from "@mui/material";
import vegIcon from "../../../../public/veg.png";
import nonVegIcon from "../../../../public/non-veg.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { StyledBox, StyledCard } from "./style";
import { useNavigate } from "react-router-dom";
import { cart, wishlist } from "../../../services/user.service";
import { authContext } from "../../../context/auth.context";
import { useContext, useEffect, useState } from "react";

export const ProductCard = (props) => {
    const navigate = useNavigate();
    const [isInWishlist, setIsInWishlist] = useState(null);
    const [isInCart, setIsInCart] = useState(null);
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);

    const toCart = async (operation) => {
        try {
            if (isLoggedIn) {
                const result = await cart(
                    operation,
                    {
                        _id: props._id,
                        item_variant: props.item_variant[0],
                        units: 1,
                    },
                    token
                );
                if (result.status == 200) setAuthData();
            } else {
                navigate("/login");
            }
        } catch {
            alert("something wet wrong");
        }
    };
    const toWishlist = async (operation) => {
        try {
            if (isLoggedIn) {
                const result = await wishlist(
                    operation,
                    {
                        _id: props._id,
                        item_variant: props.item_variant[0],
                        units: 1,
                    },
                    token
                );
                if (result.status == 200) setAuthData();
            } else {
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
            alert("something went wrong");
        }
    };
    useEffect(() => {
        setIsInWishlist(
            userData.wishlist
                ? userData.wishlist.map((item) => item._id).includes(props._id)
                : null
        );
        setIsInCart(
            userData.cart
                ? userData.cart.map((item) => item._id).includes(props._id)
                : null
        );
    }, [userData]);

    return (
        <StyledCard sx={{ minWidth: 250 }}>
            <CardActionArea
                sx={{ marginBottom: "20px" }}
                onClick={() =>
                    navigate(`/product/${props._id}`, { replace: true })
                }
            >
                <CardMedia
                    component="img"
                    image={props.image}
                    height={"200px"}
                    alt={props.name}
                />
                <CardContent>
                    <StyledBox>
                        <Typography gutterBottom variant="h6" component="div">
                            {`${props.name}`}&nbsp;
                        </Typography>
                        {props.veg_egg_non == "veg" ? (
                            <Box
                                component={"img"}
                                src={vegIcon}
                                height={"20px"}
                            />
                        ) : (
                            <Box
                                component={"img"}
                                src={nonVegIcon}
                                height={"23px"}
                            />
                        )}
                    </StyledBox>
                    <Rating value={props.rating} readOnly />
                    <StyledBox justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                            <span>{props.item_variant[0].unit}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>{`Rs. ${props.item_variant[0].price}`}</span>
                        </Typography>
                    </StyledBox>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                }}
            >
                <Button
                    variant={isInCart ? "contained" : "outlined"}
                    startIcon={<AddShoppingCartOutlinedIcon />}
                    onClick={() => toCart(isInCart ? "remove" : "add")}
                >
                    {isInCart ? "remove" : "add"}
                </Button>
                <Button
                    variant={isInWishlist ? "contained" : "outlined"}
                    startIcon={<FavoriteBorderOutlinedIcon />}
                    onClick={() => toWishlist(isInWishlist ? "remove" : "add")}
                >
                    {isInWishlist ? "remove" : "add"}
                </Button>
            </CardActions>
        </StyledCard>
    );
};
