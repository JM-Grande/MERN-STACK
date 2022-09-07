import React from "react";
import { Button, Stack, styled } from "@mui/material";

const MainStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar = () => {
  return (
    <>
      <MainStack>
        <h1>CrypTools</h1>

        <Stack flexDirection="row">
          <span>Cryptocurrencies</span>
          <span>Exchanges</span>
          <span>News</span>
        </Stack>

        <Stack flexDirection="row" alignItems="center">
          <span>Log In</span>
          <Button>Sign Up</Button>
        </Stack>
      </MainStack>
    </>
  );
};

export default Navbar;
