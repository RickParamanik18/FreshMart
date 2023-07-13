import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
    Box,
    Rating,
} from "@mui/material";
import vegIcon from "../../../../public/veg.png";
import nonVegIcon from "../../../../public/non-veg.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { StyledBox, StyledCard } from "./style";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
    const navigate = useNavigate();
    return (
        <StyledCard sx={{ minWidth: 250 }}>
            <CardActionArea
                sx={{ marginBottom: "20px" }}
                onClick={() =>
                    navigate(`/product/${props._id}`, { replace: true })
                }
            >
                <CardMedia
                    component="img"
                    image={props.image}
                    height={"200px"}
                    alt={props.name}
                />
                <CardContent>
                    <StyledBox>
                        <Typography gutterBottom variant="h6" component="div">
                            {`${props.name}`}&nbsp;
                        </Typography>
                        {props.veg_egg_non == "veg" ? (
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
                    </StyledBox>
                    <Rating value={props.rating} readOnly />
                    <StyledBox justifyContent={"space-between"}>
                        <Typography variant="body2" color="text.secondary">
                            <span>{props.item_variant[0].unit}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>{`Rs. ${props.item_variant[0].price}`}</span>
                        </Typography>
                    </StyledBox>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                }}
            >
                <Button
                    variant="outlined"
                    startIcon={<AddShoppingCartOutlinedIcon />}
                >
                    add
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<FavoriteBorderOutlinedIcon />}
                >
                    add
                </Button>
            </CardActions>
        </StyledCard>
    );
};
