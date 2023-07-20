import { Container, Stack } from "@mui/system";

import { NothingFound } from "../../components/nothingFound/nothingFound";
import { ProductBar } from "../../components/productBar/ProductBar";
import { authContext } from "../../context/auth.context";
import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getAllProducts } from "../../services/product.service";

export const Wishlist = () => {
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((result) => {
            setWishlistProducts([]);
            result.forEach((item) => {
                const wishlistProductIds = userData.wishlist.map(
                    (item) => item._id
                );
                if (wishlistProductIds.includes(item._id))
                    setWishlistProducts((prev) => [...prev, item]);
            });
        });
    }, [userData]);

    return (
        <Container sx={{ padding: "30px 0px", minHeight: "70vh" }}>
            {Boolean(userData.wishlist.length) ? (
                <>
                    <Typography variant="h5" gutterBottom>
                        My Wishlist
                    </Typography>
                    <Stack>
                        {wishlistProducts.map((item, i) => (
                            <ProductBar
                                {...item}
                                default={userData.wishlist[i]}
                                key={Math.random()}
                            />
                        ))}
                    </Stack>
                </>
            ) : (
                <NothingFound />
            )}
        </Container>
    );
};
