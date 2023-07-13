import { Container, Typography } from "@mui/material";
import { ProductCard } from "./productCard/ProductCard";
import { LeftIcon, RightIcon, SliderBox, StyledBox } from "./style";

import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../../services/product.service";

import { Box } from "@mui/system";

export const ProductCardSlider = ({ categoryId, name }) => {
    const [allProducts, setAllProducts] = useState([]);
    const slideRef = useRef(null);
    useEffect(() => {
        getAllProducts().then((data) => {
            setAllProducts(data);
        });
    }, []);

    const slideHandler = (dir) => {
        const slideLength = slideRef.current.clientWidth / 2;
        dir == "l"
            ? (slideRef.current.scrollLeft -= slideLength)
            : (slideRef.current.scrollLeft += slideLength);
    };

    return (
        <>
            <Container sx={{ padding: "18px 0px" }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    style={{ marginLeft: "12px" }}
                >
                    {name}
                </Typography>
                <Box
                    sx={{
                        position: "relative",
                    }}
                >
                    <LeftIcon onClick={() => slideHandler("l")} />
                    <SliderBox ref={slideRef}>
                        <StyledBox>
                            {allProducts
                                .filter(
                                    (item) =>
                                        item.sub_category_id === categoryId
                                )
                                .map((item) => {
                                    return (
                                        <ProductCard
                                            {...item}
                                            key={Math.random()}
                                        />
                                    );
                                })}
                        </StyledBox>
                    </SliderBox>
                    <RightIcon onClick={() => slideHandler("r")} />
                </Box>
            </Container>
        </>
    );
};
