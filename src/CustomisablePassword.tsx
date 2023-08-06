import { LinearProgress } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import { PasswordRequirementComponent } from "./PasswordRequirementComponent";
import {
  MUI_CustomisablePasswordProps,
  PasswordRequirementNames,
} from "./types";

const MUI_CustomisablePasswordComponent: React.FC<
  MUI_CustomisablePasswordProps
> = ({
  rules = {},
  value,
  minLength = 8,
  maxLength = 16,
  onChange,
  specialCharactersRegex = /[~`¿¡!#$%&*€£@+÷=[\]\\';,/{}()|\\":<>?._]/g,
  passwordStrengthBar = true,
  successColourProgressBar = "#4caf50",
  warningColourProgressBar = "#f5333f",
  ...remainingProps
}) => {
  const [isValid, setIsValid] = useState(false);

  if (maxLength < minLength) {
    maxLength = minLength + 1;
  }
  const passwordRequirementDefinition = useMemo(
    () => ({
      minLength: {
        valid: value.length >= minLength,
        label: rules.minLength?.label || `At least ${minLength} characters.`,
      },
      maxLength: {
        valid: value.length <= maxLength && value.length > 0,
        label:
          rules.maxLength?.label || `Has no more than ${maxLength} characters.`,
      },
      specialChar: {
        valid: specialCharactersRegex.test(value),
        label:
          rules.specialChar?.label ||
          `At Least one special characters (${specialCharactersRegex
            .toString()
            .replace("/[", "")
            .replace("]/g", "")})`,
      },
      number: {
        valid: /\d/g.test(value),
        label: rules.number?.label || "At least one number.",
      },
      capital: {
        valid: /[A-Z]/.test(value),
        label: rules.capital?.label || "At least one uppercase letter.",
      },
      lowercase: {
        valid: /[a-z]/.test(value),
        label: rules.lowercase?.label || "At least one lowercase letter.",
      },
      letter: {
        valid: /[a-zA-Z]/.test(value),
        label: rules.letter?.label || "At least one a letter.",
      },
      notEmpty: {
        valid: Boolean(value.length > 0),
        label: rules.notEmpty?.label || "Are not empty.",
      },
    }),
    [value, minLength, maxLength, specialCharactersRegex, rules]
  );

  const enabledRules =
    Object.keys(rules).length === 0
      ? Object.keys(passwordRequirementDefinition)
      : Object.keys(rules).filter((rule) =>
          Boolean(
            passwordRequirementDefinition[rule as PasswordRequirementNames]
          )
        );

  // const filteredObject = Object.fromEntries(
  //   Object.entries(ruleDefinitions).filter(([key]) =>
  //     enabledRules.includes(key)
  //   )
  // );

  const calculatePasswordStrength = () => {
    const fulfilledRulesCount = enabledRules.reduce(
      (count, rule) =>
        passwordRequirementDefinition[rule as PasswordRequirementNames].valid
          ? count + 1
          : count,
      0
    );

    return Math.floor((fulfilledRulesCount / enabledRules.length) * 100);
  };

  const passwordStrength = calculatePasswordStrength();

  useEffect(() => {
    const isAllRulesValid = enabledRules.every(
      (rule) =>
        passwordRequirementDefinition[rule as PasswordRequirementNames].valid
    );
    setIsValid(isAllRulesValid);

    if (typeof onChange === "function") {
      onChange({
        // Rules: filteredObject,
        "Password Meet Requirements": isValid,
      });
    }
  }, [value, enabledRules, onChange, passwordRequirementDefinition, isValid]);

  return (
    <div>
      {passwordStrengthBar && (
        <LinearProgress
          variant="determinate"
          value={passwordStrength}
          sx={{
            borderRadius: "25px",
            height: "10px",
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor:
                passwordStrength === 100
                  ? successColourProgressBar
                  : warningColourProgressBar,
            },
          }}
        />
      )}
      {enabledRules.map((rule) => {
        const { label, valid } =
          passwordRequirementDefinition[rule as PasswordRequirementNames];
        return (
          <PasswordRequirementComponent
            key={rule}
            valid={valid}
            validColour="#4caf50"
            defaultColour="#f5333f"
            {...remainingProps}>
            {label}
          </PasswordRequirementComponent>
        );
      })}
    </div>
  );
};

export default MUI_CustomisablePasswordComponent;
