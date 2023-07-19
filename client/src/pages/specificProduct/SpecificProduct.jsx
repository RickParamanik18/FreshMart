import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    MenuItem,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import vegIcon from "../../../public/veg.png";
import { useContext, useEffect, useRef, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import nonVegIcon from "../../../public/non-veg.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import nothingFoundPic from "../../../public/nothing-found.png";
import { getAllProducts } from "../../services/product.service";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { ProductCardSlider } from "../../components/productCategorySlider/ProductCategorySlider";
import { authContext } from "../../context/auth.context";
import { cart, wishlist } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

export const SpecificProduct = () => {
    const navigate = useNavigate();
    const imageRef = useRef(null);
    const [largeImgDim, setLargeImgDim] = useState({});
    const [currentProduct, setCurrentProduct] = useState({});
    const [quantity, setQuantity] = useState("");
    const [units, setUnits] = useState(1);
    const [urlId, setUrlId] = useState(window.location.pathname.substring(9));
    const [isInWishlist, setIsInWishlist] = useState(null);
    const [isInCart, setIsInCart] = useState(null);
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);
    const toCart = async (operation) => {
        try {
            if (isLoggedIn) {
                const result = await cart(operation, currentProduct, token);
                if (result.status == 200) setAuthData();
            } else {
                navigate("/login");
            }
        } catch {
            alert("something wet wrong");
        }
    };
    const toWishlist = async (operation) => {
        try {
            if (isLoggedIn) {
                const result = await wishlist(operation, currentProduct, token);
                if (result.status == 200) setAuthData();
            } else {
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
            alert("something went wrong");
        }
    };
    useEffect(() => {
        setIsInWishlist(
            userData.wishlist
                ? userData.wishlist
                      .map((item) => item._id)
                      .includes(currentProduct._id)
                : null
        );
        setIsInCart(
            userData.cart
                ? userData.cart
                      .map((item) => item._id)
                      .includes(currentProduct._id)
                : null
        );
    }, [userData]);
    // for setting magnified image dim
    useEffect(() => {
        window.onload = () => {
            setLargeImgDim({
                height: imageRef.current.clientHeight,
                width: imageRef.current.clientWidth,
            });
        };
    }, [imageRef.current]);

    //to set current product related details
    useEffect(() => {
        getAllProducts().then((data) => {
            const currentProduct = data.reduce(
                (accumulator, current) =>
                    current._id == urlId ? current : accumulator,
                null
            );
            setCurrentProduct(currentProduct);
            setQuantity(currentProduct.item_variant?.[0]?.price);
        });
    }, []);

    const quantityCahngeHandler = (e) => {
        setQuantity(+e.target.value);
    };

    return (
        <>
            <Container>
                <Grid container my={1}>
                    <Grid item sm={6}>
                        {/* image container */}
                        <Box ref={imageRef}>
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: "Wristwatch by Ted Baker London",
                                        isFluidWidth: true,
                                        src:
                                            currentProduct.image ||
                                            nothingFoundPic,
                                    },
                                    largeImage: {
                                        src:
                                            currentProduct.image ||
                                            nothingFoundPic,
                                        height: largeImgDim.height
                                            ? 2 * largeImgDim.height
                                            : 1000,
                                        width: largeImgDim.width
                                            ? 2 * largeImgDim.width
                                            : 1000,
                                    },
                                    enlargedImageContainerStyle: {
                                        zIndex: 999,
                                        margin: "0px",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} pt={10}>
                        {/* product details container */}
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography variant="h5">
                                {currentProduct?.name}&nbsp;
                            </Typography>
                            {currentProduct?.veg_egg_non == "veg" ? (
                                <Box
                                    component={"img"}
                                    src={vegIcon}
                                    height={"20px"}
                                />
                            ) : (
                                <Box
                                    component={"img"}
                                    src={nonVegIcon}
                                    height={"23px"}
                                />
                            )}
                        </Box>
                        <Rating
                            value={Math.floor(currentProduct?.rating)}
                            readOnly
                        />
                        <Typography
                            varient="body2"
                            color={"grey"}
                            display={"flex"}
                        >
                            <AccessTimeIcon />
                            &nbsp;
                            {`Will be delivered in ${currentProduct?.delivery_time_in_mins} minutes`}
                        </Typography>
                        <Box mt={5}>
                            <TextField
                                select
                                value={quantity}
                                helperText="Please select product amount"
                                onChange={quantityCahngeHandler}
                            >
                                {currentProduct.item_variant
                                    ? currentProduct.item_variant.map(
                                          (item) => (
                                              <MenuItem
                                                  key={item.unit}
                                                  value={item.price}
                                              >
                                                  {item.unit}
                                              </MenuItem>
                                          )
                                      )
                                    : []}
                            </TextField>
                            <TextField
                                helperText="Units"
                                type="number"
                                sx={{ width: "80px" }}
                                defaultValue={1}
                                InputProps={{ inputProps: { min: 1, max: 5 } }}
                                style={{ marginLeft: "5px" }}
                                onChange={(e) => setUnits(+e.target.value)}
                            />
                        </Box>
                        <Typography
                            variant="h6"
                            mt={3}
                            bgcolor={"primary.light"}
                            px={2}
                            py={1}
                            borderRadius={1}
                        >
                            {`Total Price is Rs. ${quantity * units}`}
                        </Typography>
                        <Box my={5}>
                            <Button
                                variant={isInCart ? "contained" : "outlined"}
                                startIcon={<AddShoppingCartOutlinedIcon />}
                                size="large"
                                onClick={() =>
                                    toCart(isInCart ? "remove" : "add")
                                }
                            >
                                {isInCart ? "remove" : "add"}
                            </Button>
                            <Button
                                variant={
                                    isInWishlist ? "contained" : "outlined"
                                }
                                startIcon={<FavoriteBorderOutlinedIcon />}
                                sx={{ marginLeft: "22px" }}
                                size="large"
                                onClick={() =>
                                    toWishlist(isInWishlist ? "remove" : "add")
                                }
                            >
                                {isInWishlist ? "remove" : "add"}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <ProductCardSlider
                    categoryId={currentProduct?.sub_category_id}
                    name="Similar Products"
                />
            </Container>
        </>
    );
};
