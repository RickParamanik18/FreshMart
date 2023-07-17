import { Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import { CartCard } from "../../components/cartCard/CartCard";

export const Cart = () => {
    return (
        <Container sx={{ padding: "20px 0px", minHeight: "70vh" }}>
            <Grid container spacing={5}>
                <Grid item sm={12} lg={8}>
                    <Typography variant="h5">My Cart</Typography>
                    <CartCard />
                </Grid>
                <Grid item sm={12} lg={4}>
                    <Typography variant="h5" gutterBottom>
                        Cart Summary
                    </Typography>
                    <Divider />
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        width={"100%"}
                    >
                        <Typography variant="overline" color={"gray"}>
                            Corn Cob (Bhutta)
                            <br />
                            1kg x 4
                        </Typography>
                        <Typography variant="caption" color={"gray"}>
                            Rs. 19.00
                        </Typography>
                    </Box>
                    <Divider />
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
        </Container>
    );
};
