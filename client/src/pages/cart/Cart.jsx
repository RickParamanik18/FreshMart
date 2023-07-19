import { Button, Divider, Typography, useThemeProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import { CartCard } from "../../components/cartCard/CartCard";
import { authContext } from "../../context/auth.context";
import { useContext } from "react";
import { NothingFound } from "../../components/nothingFound/nothingFound";

export const Cart = () => {
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);

    return (
        <Container sx={{ padding: "20px 0px", minHeight: "70vh" }}>
            {isLoggedIn ? (
                <Grid container spacing={5}>
                    <Grid item sm={12} lg={8}>
                        <Typography variant="h5">My Cart</Typography>
                        {userData.cart.map((item) => (
                            <CartCard {...item} key={Math.random()} />
                        ))}
                    </Grid>
                    <Grid item sm={12} lg={4}>
                        <Typography variant="h5" gutterBottom>
                            Cart Summary
                        </Typography>
                        <Divider />
                        {userData.cart.map((item, i) => (
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
                                        {item.quantity}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color={"gray"}
                                    >
                                        {`Rs. ${item.price}`}
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
                            <Typography variant="h6">Rs. 1900.00</Typography>
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
