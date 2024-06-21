import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const ProductCard = ({ name, description, imageUrl }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();

  const handleReadMore = (e) => {
    setLoading(true);
    setOpenModal(true);
    setTimeout(() => setLoading(false), 500);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCardClick = () => {
    handleReadMore();
  };

  const shouldShowReadMore = description.length > 100;

  const handleIncrease = (e) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = (e) => {
    e.stopPropagation();
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleDoEnquiry = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        sx={{
          width: "100%",
          margin: 0,
          borderRadius: "1.5rem",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: "12.5rem" }}
          image="images/IdealBathImage1.png" // Replace with {imageUrl} 
          alt={name}
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontSize: "1.5rem" }}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              position: "relative",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              marginTop: "0.625rem",
            }}
          >
            {description}
            {shouldShowReadMore && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleReadMore(e);
                }}
                style={{
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                  marginLeft: "0.5rem",
                }}
              >
                Read more...
              </span>
            )}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: "0.8rem",
            }}
          >
            <Button
              onClick={handleDecrease}
              sx={{
                fontSize: "1.5rem",
                minWidth: 0,
                height: "2rem",
                color: theme.palette.primary.main,
                paddingLeft: "0.8rem",
                paddingRight: "1rem",
                marginLeft: "0.5rem",
              }}
            >
              -
            </Button>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1.5rem",
                marginLeft: "0.5rem",
              }}
            >
              {quantity}
            </Typography>
            <Button
              onClick={handleIncrease}
              sx={{
                fontSize: "1.5rem",
                minWidth: 0,
                height: "2rem",
                color: theme.palette.primary.main,
                paddingLeft: "0.8rem",
                paddingRight: "1rem",
                marginLeft: "0.5rem",
              }}
            >
              +
            </Button>
            <Button
              onClick={handleDoEnquiry}
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}33`,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                },
                marginLeft: "0.625rem",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
                fontSize: "1rem",
              }}
            >
              Do Enquiry
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Modal for detailed view */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25rem",
            bgcolor: "background.paper",
            borderRadius: "1.5rem",
            boxShadow: 24,
            p: "1rem",
            border: 0,
            outline: "none",
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "150px",
              }}
            >
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <>
              <Typography
                id="modal-modal-title"
                variant="h4"
                component="h1"
                sx={{ fontSize: "1.5rem", textAlign: "center", mb: "1rem" }}
              >
                {name}
              </Typography>
              <CardMedia
                component="img"
                height="10rem"
                image="images/IdealBathImage1.png" // Replace with {imageUrl} if you pass imageUrl as prop
                alt={name}
                sx={{ borderRadius: "1rem", mb: "1rem" }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  maxHeight: "5rem",
                  overflowY: "auto",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  mt: "0.625rem",
                  mb: "1rem",
                }}
              >
                {description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  mt: "1.25rem",
                  mb: "1rem",
                }}
              >
                <Button
                  onClick={handleDecrease}
                  sx={{
                    fontSize: "1.5rem",
                    minWidth: 0,
                    height: "2rem",
                    color: theme.palette.primary.main,
                    paddingLeft: "0.8rem",
                    paddingRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  -
                </Button>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  {quantity}
                </Typography>
                <Button
                  onClick={handleIncrease}
                  sx={{
                    fontSize: "1.5rem",
                    minWidth: 0,
                    height: "2rem",
                    color: theme.palette.primary.main,
                    paddingLeft: "0.8rem",
                    paddingRight: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  +
                </Button>
                <Button
                  onClick={handleDoEnquiry}
                  variant="outlined"
                  sx={{
                    borderRadius: "1rem",
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.main}33`,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                    },
                    marginLeft: "0.625rem",
                    paddingLeft: "1.25rem",
                    paddingRight: "1.25rem",
                    fontSize: "1rem",
                  }}
                >
                  Do Enquiry
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ProductCard;
