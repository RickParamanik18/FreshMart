import { Box } from "@mui/material";
import { Banner } from "../../components/banner/Banner";
import { ProductCardSlider } from "../../components/productCategorySlider/ProductCategorySlider";

import subCategories from "../../data/subCategories";
import { useTheme } from "@emotion/react";
import { Footer } from "../../components/footer/Footer";

export const Homepage = () => {
    const theme = useTheme();

    return (
        <>
            <Banner />
            {subCategories.splice(0,5).map((item, index) => (
                <Box
                    sx={{
                        background:
                            index % 2 ? "white" : theme.palette.grey[100],
                    }}
                    key={Math.random()}
                >
                    <ProductCardSlider categoryId={item._id} name={item.name} />
                </Box>
            ))}
            <Footer/>
        </>
    );
};
