import { Container, Stack } from "@mui/system";

import { NothingFound } from "../../components/nothingFound/nothingFound";
import { ProductBar } from "../../components/productBar/ProductBar";
import { authContext } from "../../context/auth.context";
import { useContext } from "react";
import { Typography } from "@mui/material";

export const Wishlist = () => {
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);
    return (
        <Container sx={{ padding: "30px 0px" }}>
            {isLoggedIn ? (
                <>
                <Typography variant="h5" gutterBottom>My Wishlist</Typography>
                    <Stack>
                        {userData.wishlist.map((item) => (
                            <ProductBar {...item} key={Math.random()} />
                        ))}
                    </Stack>
                </>
            ) : (
                <NothingFound />
            )}
        </Container>
    );
};
