import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { MUICustomisablePasswordComponent } from "mui-customisable-password-component";
import { theme } from "./theme";
import Props from "./Props";
function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordCopy = (
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={"bolder"}>
          MUI Customisable Password Component
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            onCopy: handlePasswordCopy,
          }}
        />

        <MUICustomisablePasswordComponent
          minLength={2}
          value={password}
          onChange={(test: any) => {
            console.log(test);
          }}
        />

        <Props />
      </Container>

      <footer>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100px",
            backgroundColor: "black",
            justifyContent: "center",
          }}>
          <Typography color="white" variant="body2" align="center">
            Developed by Piraveenan Kirupakaran.{" "}
            <Link
              color="inherit"
              href="https://github.com/piraveenank/MUI-Customisable-Password-Component/"
              target="_blank">
              View on GitHub
            </Link>
          </Typography>
          <Typography color="white" variant="body2" align="center">
            {" "}
            <Link
              color="inherit"
              href="https://www.npmjs.com/package/mui-customisable-password-component"
              target="_blank">
              mui-customisable-password-component on npm
            </Link>
          </Typography>
        </Box>
      </footer>
    </ThemeProvider>
  );
}
export default App;
