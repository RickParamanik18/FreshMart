import { Container, Typography } from "@mui/material";
import { ProductCard } from "./productCard/ProductCard";
import { SliderBox, StyledArrowIcon, StyledBox } from "./style";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import subCategoryProducts from "../../data/subCategoryProducts";

export const ProductCardSlider = ({ categoryId, name }) => {
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
                        {subCategoryProducts
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
