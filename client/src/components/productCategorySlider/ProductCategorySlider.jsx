import { Container, Typography } from "@mui/material";
import { ProductCard } from "./productCard/ProductCard";
import { SliderBox, StyledBox } from "./style";

import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product.service";

export const ProductCardSlider = ({ categoryId, name }) => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then((data) => {
            setAllProducts(data);
        });
    }, []);
    
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
                <SliderBox>
                    <StyledBox>
                        {allProducts
                            .filter(
                                (item) => item.sub_category_id === categoryId
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
            </Container>
        </>
    );
};
