import { Container, Stack } from "@mui/system";

import { NothingFound } from "../../components/nothingFound/nothingFound";
import { ProductBar } from "../../components/productBar/ProductBar";

export const Wishlist = () => {
    return (
        <Container sx={{ padding: "40px 0px" }}>
            {true ? <ProductBar /> : <NothingFound />}
        </Container>
    );
};
