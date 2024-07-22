import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function Notification({
  open = false,
  setOpen = () => {},
  type = "success",
  message = "",
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
