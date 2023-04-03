import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5} mb={5}>
        <Stack spacing={2}>
          <Typography variant="h4">
            Your booking has been succesfully confirmed.
          </Typography>
          <Box>
            <Typography>
              Your confirmation number is{" "}
              <Typography component="span">
                {Math.trunc(Math.random() * 10000)}
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Link to="/">
              <Button variant="contained">OK</Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default ConfirmedBooking;
