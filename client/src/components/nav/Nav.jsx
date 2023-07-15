import {
    Autocomplete,
    Avatar,
    Badge,
    Box,
    Button,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    Tooltip,
} from "@mui/material/";
import logo from "../../../public/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledGrid, StyledPaper } from "./style";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllProducts } from "../../services/product.service";
import useAuth from "../../hooks/useAuth";
import { getInitials } from "../../utils/helper";

export const Nav = () => {
    const navigate = useNavigate();
    const [userOptionsVisibility, setUserOptionsVisibility] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const { isLoggedIn, userData } = useAuth();

    const toggleUserOptions = (val) => {
        typeof val === "boolean"
            ? setUserOptionsVisibility(val)
            : setUserOptionsVisibility((prev) => !prev);
    };
    useEffect(() => {
        getAllProducts().then((data) => {
            setAllProducts(data);
        });
    }, []);

    const getSearchResults = (query) => {
        if (query.trim().length) {
            const results = allProducts.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    return (
        <StyledPaper>
            <StyledGrid container>
                <Grid
                    item
                    xs={3}
                    sm={2}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Box
                        component={"img"}
                        src={logo}
                        height={"50px"}
                        onClick={() => navigate("/")}
                        sx={{ cursor: "pointer" }}
                    ></Box>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sm={6}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={searchResults.map((item) => item.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder={"Search"}
                                InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                //updating search results
                                onChange={() =>
                                    getSearchResults(params.inputProps.value)
                                }
                            />
                        )}
                        fullWidth
                        size="small"
                        //redirecting to the product page onoption select
                        onChange={(e) => {
                            const prodId = searchResults.filter(
                                (item) => item.name === e.target.textContent
                            )[0]._id;
                            navigate(`/product/${prodId}`, { replace: true });
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                    sm={4}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"end"}
                >
                    {/* isLargeDevice */}
                    {window.document.body.clientWidth >= 600 ? (
                        <>
                            <Tooltip title="My Wishlist">
                                <Badge
                                    badgeContent={Number(userData.wishlist)}
                                    color="primary"
                                    sx={{ mx: 1.5 }}
                                >
                                    <FavoriteBorderIcon />
                                </Badge>
                            </Tooltip>
                            <Tooltip title="My Cart">
                                <Badge
                                    badgeContent={Number(userData.cart)}
                                    color={"primary"}
                                    sx={{ mx: 1.5 }}
                                >
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </Tooltip>
                            {/* isLoggedin */}
                            {isLoggedIn ? (
                                <Button variant="outlined" sx={{ mx: 2 }}>
                                    Logout
                                </Button>
                            ) : (
                                <Button variant="contained" sx={{ mx: 2 }}>
                                    Login
                                </Button>
                            )}
                        </>
                    ) : (
                        <>
                            <Box
                                sx={{
                                    position: "relative",
                                }}
                                tabIndex={0}
                                onBlur={() => toggleUserOptions(false)}
                            >
                                <Avatar
                                    onClick={toggleUserOptions}
                                    sx={{ background: "primary.light" }}
                                >
                                    {userData.name
                                        ? getInitials(userData.name)
                                        : "*"}
                                </Avatar>
                                <StyledPaper
                                    sx={{
                                        position: "absolute",
                                        top: "45px",
                                        right: "0px",
                                        display: userOptionsVisibility
                                            ? "block"
                                            : "none",
                                    }}
                                >
                                    <Stack>
                                        <Tooltip title="My Wishlist">
                                            <Badge
                                                badgeContent={Number(
                                                    userData.wishlist
                                                )}
                                                color="primary"
                                                sx={{ my: 1 }}
                                            >
                                                <FavoriteBorderIcon />
                                            </Badge>
                                        </Tooltip>
                                        <Tooltip title="My Cart">
                                            <Badge
                                                badgeContent={Number(
                                                    userData.cart
                                                )}
                                                color={"primary"}
                                                sx={{ my: 1 }}
                                            >
                                                <ShoppingCartOutlinedIcon />
                                            </Badge>
                                        </Tooltip>
                                        {/* isLoggedIn */}
                                        {isLoggedIn ? (
                                            <Tooltip title="Logout">
                                                <LogoutOutlinedIcon
                                                    sx={{ my: 1 }}
                                                />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip title="Login">
                                                <LoginOutlinedIcon
                                                    sx={{ my: 1 }}
                                                />
                                            </Tooltip>
                                        )}
                                    </Stack>
                                </StyledPaper>
                            </Box>
                        </>
                    )}
                </Grid>
            </StyledGrid>
        </StyledPaper>
    );
};
