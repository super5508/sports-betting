import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  useConstantsQuery,
  useUserTokenMutation,
} from "../@generated/graphql/types-and-hooks";
import { setToken } from "../utils/storage";
import { Container } from "@mui/material";

export const Header: React.FC = () => {
  const [getUserToken, { loading }] = useUserTokenMutation();
  const { refetch: refetchConstants } = useConstantsQuery();

  const handleRequestToken = useCallback(async () => {
    const result = await getUserToken();
    const accessToken = result.data?.user?.token?.accessToken ?? "";
    setToken(accessToken);
    await refetchConstants();
  }, [getUserToken, refetchConstants]);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Match Data
          </Typography>
          <Button color="inherit" onClick={handleRequestToken}>
            {loading ? "Fetching..." : "Get Token"}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
