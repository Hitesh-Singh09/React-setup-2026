import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  CircularProgress,
  Paper,
  Stack
} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          py: 4
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          React Enterprise Starter
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">Standard Button</Button>
          <Button variant="contained" color="error">Destructive Button</Button>
          <Button variant="outlined" endIcon={<ArrowUpwardIcon />}>
            Outline Button
          </Button>
        </Stack>

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Paper
            elevation={3}
            sx={{
              p: 4,
              width: '100%',
              backgroundColor: 'background.paper',
              borderRadius: 2,
              maxHeight: '400px',
              overflow: 'auto'
            }}
          >
            <Typography component="pre" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(data, null, 2)}
              <h1>Learning react</h1>
            </Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
}