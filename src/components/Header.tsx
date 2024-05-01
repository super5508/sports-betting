import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useUserTokenMutation } from "../@generated/graphql/types-and-hooks";
import { setToken } from "../utils/storage";

export const Header: React.FC = () => {
  const [getUserToken, { loading }] = useUserTokenMutation();

  const handleRequestToken = useCallback(async () => {
    const result = await getUserToken();
    const accessToken = result.data?.user?.token?.accessToken ?? "";
    setToken(accessToken);
  }, [getUserToken]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Match Data
          </Typography>
          <Button color="inherit" onClick={handleRequestToken}>
            {loading ? "Fetching..." : "Get Token"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
