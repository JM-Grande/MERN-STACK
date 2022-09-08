import React from "react";
import { Button, Stack, styled, Switch } from "@mui/material";

const MainStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = ({ mode, setMode }) => {
  return (
    <>
      <MainStack sx={{ color: "text.primary" }}>
        <h1>CrypTools</h1>
        <Stack flexDirection="row">
          <span>Cryptocurrencies</span>
          <span>Exchanges</span>
          <span>News</span>
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <Switch
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          />
          <span>Log In</span>
          <Button variant="contained">Sign Up</Button>
        </Stack>
      </MainStack>
    </>
  );
};

export default Navbar;
