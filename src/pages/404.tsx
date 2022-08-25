import { Box, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Button } from "gatsby-theme-material-ui";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Page not found</Typography>

        <Button to="/" variant="outlined" color="inherit" size="large" sx={{ mt: 2 }}>
          Go Home
        </Button>
      </Box>
    </Layout>
  );
};

export default IndexPage;
