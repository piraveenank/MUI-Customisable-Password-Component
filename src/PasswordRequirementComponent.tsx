import { Checkbox, FormControlLabel } from "@mui/material";
import { PasswordRequirementProps } from "./types";

export const PasswordRequirementComponent: React.FC<
  PasswordRequirementProps
> = ({ valid, validColour, defaultColour, children }) => {
  console.log(validColour, defaultColour);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={valid}
            disabled={!valid}
            style={{
              color: valid ? validColour : defaultColour,
            }}
            disableRipple
          />
        }
        label={children}
      />
    </div>
  );
};
