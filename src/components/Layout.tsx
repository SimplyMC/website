import * as React from "react";
import Navbar from "../components/layout/Navbar";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container sx={{ mt: 3 }} maxWidth="xl">
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
