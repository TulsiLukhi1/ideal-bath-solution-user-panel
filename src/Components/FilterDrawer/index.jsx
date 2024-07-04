import BrandSkeleton from "@/skeletons/BrandSkeleton";
import { getBrands } from "@/utils/callers/brands";
import { MIN_DELAY_TIME, ROWS_PER_PAGE } from "@/utils/constants";
import {
  Category,
  FilterAlt,
  FilterAltOff,
  FilterList,
} from "@mui/icons-material";
import Done from "@mui/icons-material/Done";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import DialogContent from "@mui/joy/DialogContent";
import DialogTitle from "@mui/joy/DialogTitle";
import Divider from "@mui/joy/Divider";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import * as React from "react";

export default function FilterDrawer({
  open = false,
  setOpen = () => {},
  onFilter = () => {},
}) {
  const [brands, setBrands] = React.useState([]);
  const [totalBrands, setTotalBrands] = React.useState(0);
  const [loading, setLoading] = React.useState(false || !brands?.length);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [alertInfo, setAlertInfo] = React.useState({ type: "", message: "" });
  const [displayAlert, setDisplayAlert] = React.useState(false);

  const fetchBrands = async () => {
    setLoading(true);
    const {
      brands,
      totalBrands: total,
      errorMessage,
      status,
    } = await getBrands("/brands", 0, ROWS_PER_PAGE);

    // sucess status code is 2xx
    if (status >= 200 && status < 300) {
      setTimeout(() => {
        setBrands(brands);
        setTotalBrands(total);
        setLoading(false);
      }, MIN_DELAY_TIME);
    }

    // client error status code is 4xx
    if (status >= 400 && status < 500) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({ type: "error", message: `${errorMessage}` });
      setTotalBrands(0);
      setBrands([]);
      return;
    }

    // server error status code is 5xx
    if (status >= 500 && status < 600) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({
        type: "error",
        message: `Error : ${errorMessage}`,
      });
      setTotalBrands(0);
      setBrands([]);
      return;
    }
  };

  React.useEffect(() => {
    fetchBrands();
  }, []);

  function filterHandler() {
    onFilter(selectedBrands);
    setOpen(false);
  }

  return (
    <>
      <Drawer
        size="md"
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxHeight: "100%",
            overflowY: "auto",
          }}
        >
          <DialogTitle>
            <FilterList />
            Filters
          </DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <Typography
              level="title-md"
              fontWeight="bold"
              sx={{ mt: 1 }}
              color="warning"
            >
              <Category /> Brands
            </Typography>
            <div role="group" aria-labelledby="rank" className="min-h-10">
              {loading ? (
                <BrandSkeleton />
              ) : brands.length ? (
                <BrandList
                  brands={brands}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                />
              ) : (
                "No Brands"
              )}
            </div>
          </DialogContent>
          <Divider sx={{ mt: "auto" }} />
          <Stack
            direction="row"
            justifyContent="flex-start"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              size="lg"
              onClick={() => {
                setSelectedBrands([]);
              }}
              sx={{ borderRadius: "2px" }}
              disabled={!selectedBrands.length}
            >
              Clear <FilterAltOff />
            </Button>
            <Button
              onClick={filterHandler}
              size="lg"
              color="warning"
              variant="plain"
              sx={{ borderRadius: "2px" }}
            >
              Apply <FilterAlt />
            </Button>
          </Stack>
        </Sheet>
      </Drawer>
    </>
  );
}

function BrandList({
  brands,
  selectedBrands = [],
  setSelectedBrands = () => {},
}) {
  return (
    <List
      orientation="horizontal"
      size="sm"
      sx={{
        "--List-gap": "12px",
        "--ListItem-radius": "20px",
      }}
    >
      {brands.map((brand) => {
        const selected = selectedBrands.includes(brand._id);
        return (
          <ListItem key={brand._id}>
            <AspectRatio
              variant={selected ? "solid" : "outlined"}
              color={selected ? "primary" : "neutral"}
              ratio={1}
              sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
            >
              <div>{selected && <Done fontSize="md" />}</div>
            </AspectRatio>
            <Checkbox
              size="sm"
              color="neutral"
              disableIcon
              overlay
              label={brand.brandName}
              variant="outlined"
              checked={selected}
              onChange={(event) =>
                setSelectedBrands((prev) => {
                  const set = new Set([...prev, brand._id]);
                  if (!event.target.checked) {
                    set.delete(brand._id);
                  }

                  return [...set];
                })
              }
              slotProps={{
                action: {
                  sx: {
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  },
                },
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
