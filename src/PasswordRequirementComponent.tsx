import { Checkbox, FormControlLabel } from "@mui/material";

interface PasswordRequirementProps {
  valid: boolean;
  validColor?: string;
  invalidColor?: string;
  children?: React.ReactNode;
}

export const PasswordRequirementComponent: React.FC<
  PasswordRequirementProps
> = ({ valid, validColor, invalidColor, children }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={valid}
            disabled={!valid}
            sx={{
              color: valid ? validColor : invalidColor,
            }}
            disableRipple
          />
        }
        label={children}
      />
    </div>
  );
};
