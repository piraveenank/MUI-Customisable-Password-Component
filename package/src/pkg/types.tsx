export type PasswordRequirementNames =
  | "minLength"
  | "maxLength"
  | "specialChar"
  | "number"
  | "capital"
  | "lowercase"
  | "letter"
  | "notEmpty";

interface PasswordProps {
  value: string;
  valueAgain?: string;
  minLength?: number;
  maxLength?: number;
  validColour?: string;
  defaultColour?: string;
  specialCharactersRegex?: RegExp;
  onChange?: (_: any) => void;
}

export interface MUI_CustomisablePasswordProps extends PasswordProps {
  rules?: Partial<{ [key in PasswordRequirementNames]: { label?: string } }>;
  passwordStrengthBar?: boolean;
  successColourProgressBar?: string;
  warningColourProgressBar?: string;
}

export interface PasswordRequirementProps {
  valid: boolean;
  validColour?: string;
  defaultColour?: string;
  children?: React.ReactNode;
}
