import React, { useState } from "react";
import {
  Button,
  Stack,
  styled,
  IconButton,
  Typography,
  Modal,
  Box,
  Card,
  Link,
} from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link as RouterLink } from "react-router-dom";

//styled components
const MainStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1em 0",
});

const LeftStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "2em",
});

const RightStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
});

const LogSign = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
});

const LinkStack = styled(Stack)({
  padding: "0 .5em",
});

const StyledLink = styled(Link)({
  color: "black",
  textDecoration: "none",
  borderBottom: ".1em solid gray",
  "&:hover": {
    backgroundColor: "#001e3c",
    color: "white",
  },
});

//end of styled

const Navbar = ({ mode, setMode }) => {
  //modal
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(true);
  };

  const handleClose = () => {
    setMenu(false);
  };

  return (
    <>
      <MainStack
        sx={{
          color: "text.primary",
        }}
      >
        <Stack direction="row" gap="1em">
          <h1>CrypTools</h1>

          <LeftStack
            sx={{ display: { mobile: "none", tablet: "none", laptop: "flex" } }}
          >
            <Typography variant="span">Cryptocurrencies</Typography>
            <Typography variant="span">Exchanges</Typography>
            <Typography variant="span">News</Typography>
          </LeftStack>
        </Stack>

        <RightStack>
          {/* DarkMode Button */}
          <IconButton
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "light" ? <NightlightIcon /> : <LightModeIcon />}
          </IconButton>

          <LogSign
            sx={{
              display: {
                mobile: "none",
                tablet: "none",
                laptop: "flex",
              },
            }}
          >
            <Typography variant="span">Log In</Typography>
            <Button variant="contained">Sign Up</Button>
          </LogSign>
          {/* menu button*/}
          <IconButton onClick={handleMenu}>
            <MenuIcon
              sx={{
                display: {
                  mobile: "block",
                  tablet: "block",
                  laptop: "none",
                },
              }}
            />
          </IconButton>
        </RightStack>
      </MainStack>

      {/* modal */}
      <Modal keepMounted open={menu} onClose={handleClose}>
        <Box
          sx={{ position: "absolute", width: "90%", top: "1em", left: "5%" }}
        >
          <Card>
            <Stack>
              <Box ml="auto">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Stack>

            <LinkStack>
              <StyledLink
                sx={{ color: "text.primary" }}
                component={RouterLink}
                to="/home"
                onClick={handleClose}
              >
                <Typography variant="h6">Cryptocurrencies</Typography>
              </StyledLink>

              <StyledLink
                sx={{ color: "text.primary" }}
                component={RouterLink}
                to="/"
                onClick={handleClose}
              >
                <Typography variant="h6">Exchanges</Typography>
              </StyledLink>

              <StyledLink
                sx={{ color: "text.primary" }}
                component={RouterLink}
                to="/"
                onClick={handleClose}
              >
                <Typography variant="h6">News</Typography>
              </StyledLink>
            </LinkStack>
          </Card>
        </Box>
      </Modal>
      {/*end of modal */}
    </>
  );
};

export default Navbar;
