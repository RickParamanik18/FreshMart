import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Divider />
            <Grid container spacing={5} py={3}>
                <Grid item sm={8}>
                    <Typography variant="h6" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body2">
                        At FreshMart you will get Quality, Variety, and
                        Exceptional Service. Fresh produce, pantry staples, and
                        more. Immaculate store layout, friendly staff, and
                        convenient online shopping. Committed to community and
                        sustainability. Your trusted grocery destination
                    </Typography>
                    <Box>
                        <IconButton
                            onClick={() =>
                                (window.location.href =
                                    "https://www.linkedin.com/in/rick-paramanik-99672821a")
                            }
                        >
                            <LinkedInIcon fontSize="medium" />
                        </IconButton>
                        <IconButton
                            onClick={() =>
                                (window.location.href =
                                    "https://github.com/RickParamanik18/")
                            }
                        >
                            <GitHubIcon fontSize="medium" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Typography variant="h6" gutterBottom>
                        Useful Links
                    </Typography>
                    <Stack>
                        <Typography variant="body2">Offers</Typography>
                        <Typography variant="body2">Complaint</Typography>
                        <Typography variant="body2">Cutomer Support</Typography>
                        <Typography variant="body2">
                            Become a Business Partner
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};
