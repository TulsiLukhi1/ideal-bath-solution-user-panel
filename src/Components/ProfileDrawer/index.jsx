import { NO_IMAGE } from "@/utils/constants";
import DialogContent from "@mui/joy/DialogContent";
import DialogTitle from "@mui/joy/DialogTitle";
import Divider from "@mui/joy/Divider";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Image from "next/image";
import * as React from "react";

export default function ProfileDrawer({
  open = false,
  setOpen = () => {},
  profile,
}) {

  return (
    <React.Fragment>
      <Drawer
        size="md"
        variant="plain"
        anchor="right"
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
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Profile</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <div>
              <Image
                src={profile ? profile.imgUrl : NO_IMAGE}
                width={50}
                height={50}
                className="rounded-lg w-full shadow-md"
              />
            </div>
            <div>
              <p className="text-2xl font-medium">
                {profile ? profile?.userName : "Your Name"}
              </p>
              <p className="text-md font-base">
                {profile ? profile?.mobileNumbe : "Your Mobile Number"}
              </p>
            </div>
          </DialogContent>

          {/* <Divider sx={{ mt: "auto" }} /> */}
          {/* <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setType("");
                setAmenities([]);
              }}
            >
              Clear
            </Button>
            <Button onClick={() => setOpen(false)}>Show 165 properties</Button>
          </Stack> */}
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
