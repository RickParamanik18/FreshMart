import { Button, Divider, Typography, useThemeProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import { CartCard } from "../../components/cartCard/CartCard";
import { authContext } from "../../context/auth.context";
import { useContext, useEffect, useState } from "react";
import { NothingFound } from "../../components/nothingFound/nothingFound";
import { getAllProducts } from "../../services/product.service";

export const Cart = () => {
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);
    const [cartProducts, setCartProducts] = useState([]);
    const updateCartProducts = () => {
        getAllProducts().then((result) => {
            setCartProducts([]);
            result.forEach((item) => {
                const cartProductIds = userData.cart.map((item) => item._id);
                if (cartProductIds.includes(item._id))
                    setCartProducts((prev) => [...prev, item]);
            });
        });
    };

    useEffect(() => {
        updateCartProducts();
    }, [userData.cart]);

    const calculateTotal = () => {
        const result = userData.cart.reduce((accumulator, current) => {
            return accumulator + current.units * current.item_variant.price;
        }, 0);

        return result;
    };

    return (
        <Container sx={{ padding: "20px 0px", minHeight: "70vh" }}>
            {Boolean(userData.cart.length) ? (
                <Grid container spacing={5}>
                    <Grid item sm={12} lg={8}>
                        <Typography variant="h5">My Cart</Typography>
                        {cartProducts.map((item, i) => (
                            <CartCard
                                {...item}
                                default={userData.cart[i]}
                                key={Math.random()}
                            />
                        ))}
                    </Grid>
                    <Grid item sm={12} lg={4}>
                        <Typography variant="h5" gutterBottom>
                            Cart Summary
                        </Typography>
                        <Divider />
                        {cartProducts.map((item, i) => (
                            <Box key={i}>
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                    width={"100%"}
                                >
                                    <Typography
                                        variant="overline"
                                        color={"gray"}
                                    >
                                        {item.name}
                                        <br />
                                        {userData.cart[i].item_variant.unit +
                                            " x " +
                                            userData.cart[i].units}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color={"gray"}
                                    >
                                        {`Rs. ${
                                            userData.cart[i].item_variant
                                                .price * userData.cart[i].units
                                        }`}
                                    </Typography>
                                </Box>
                                <Divider />
                            </Box>
                        ))}
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"100%"}
                        >
                            <Typography variant="h6">Grand Total</Typography>
                            <Typography variant="h6">{`Rs. ${calculateTotal()}`}</Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"flex-end"}
                            width={"100%"}
                            my={3}
                        >
                            <Button variant="contained">Check out</Button>
                        </Box>
                    </Grid>
                </Grid>
            ) : (
                <NothingFound />
            )}
        </Container>
    );
};
