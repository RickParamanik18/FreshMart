import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { TagLine } from "./style";
import bannerPic from "../../../public/banner.png";

export const Banner = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box py={10}>
                            <TagLine variant="h2" gutterBottom>
                                Fresh groceries at your door.
                            </TagLine>
                            <Typography variant="subtitle1">
                                Experience the convenience of having fresh,
                                flavorful groceries delivered right to your
                                doorstep for a hassle-free shopping experience.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} pt={2}>
                        <Container component={"img"} src={bannerPic} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
