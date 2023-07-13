import { Box } from "@mui/material";
import { Banner } from "../../components/banner/Banner";
import { ProductCardSlider } from "../../components/productCategorySlider/ProductCategorySlider";

import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../services/product.service";

export const Homepage = () => {
    const theme = useTheme();
    const [allCategory, setAllCategory] = useState([]);
    useEffect(() => {
        getAllCategory().then((data) => {
            setAllCategory(data);
        });
    }, []);

    return (
        <>
            <Banner />
            {allCategory.splice(0, 5).map((item, index) => (
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
        </>
    );
};
