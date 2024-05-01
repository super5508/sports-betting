import { createRoot } from "react-dom/client";
import { Snackbar, Alert, AlertProps } from "@mui/material";

type Severity = AlertProps["severity"];

const TOAST_DURATION = 3000;

export const showToast = (message: string, severity: Severity = "info") => {
  const snackbar = (
    <Snackbar
      open={true}
      autoHideDuration={TOAST_DURATION}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );

  const snackbarContainer = document.createElement("div");
  document.body.appendChild(snackbarContainer);
  const toastRoot = createRoot(snackbarContainer);
  toastRoot.render(snackbar);

  setTimeout(() => {
    toastRoot.unmount();
    snackbarContainer.remove();
  }, TOAST_DURATION);
};
