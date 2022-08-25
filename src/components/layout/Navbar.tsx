import * as React from "react";
import { AppBar, Box, Button, Container, Divider, Link, Stack, Toolbar, Typography } from "@mui/material";
import { Link as GLink } from "gatsby-theme-material-ui";

const Navbar = () => {
  return (
    <AppBar color="secondary" position="static">
      <Container
        sx={{
          py: 2,
        }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <Typography variant="h4" component="h1" sx={{ mr: 4 }}>
            SimplyMC
          </Typography>
          <Divider orientation="vertical" />
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <GLink to="/" variant="h5" color="inherit" underline="hover">
                Home
              </GLink>
              <GLink to="/rules" variant="h5" color="inherit" underline="hover">
                Rules
              </GLink>
              <GLink to="/commands" variant="h5" color="inherit" underline="hover">
                Commands
              </GLink>
              <GLink to="/about" variant="h5" color="inherit" underline="hover">
                About
              </GLink>
            </Stack>
          </Box>
          <Link href="https://discord.com/invite/DZyknsSNJp" target="_blank" rel="noopener noreferrer" color="inherit">
            <Button variant="outlined" color="inherit" size="large">
              Join our Discord!
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
