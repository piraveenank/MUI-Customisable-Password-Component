import {
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MUICustomisablePasswordComponent from "./utils/CustomisablePassword";
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
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight={"bolder"}>
        Password Strength Calculator
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
        specialCharactersRegex={/[^]/g}
        onChange={(test: any) => {
          console.log(test);
        }}
      />
    </Container>
  );
}

export default App;
