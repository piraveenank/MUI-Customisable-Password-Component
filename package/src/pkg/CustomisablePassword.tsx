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
  const passwordRequirementDefinitions = useMemo(
    () => ({
      minLength: {
        valid: value.length >= minLength,
        label:
          rules.minLength?.label ||
          `Must be at least ${minLength} characters long.`,
      },
      maxLength: {
        valid: value.length <= maxLength && value.length > 0,
        label:
          rules.maxLength?.label || `Must not exceed ${maxLength} characters.`,
      },
      specialChar: {
        valid: specialCharactersRegex.test(value),
        label:
          rules.specialChar?.label ||
          `Must contain at least one special character (${specialCharactersRegex
            .toString()
            .replace("/[", "")
            .replace("]/g", "")}).`,
      },
      number: {
        valid: /\d/g.test(value),
        label: rules.number?.label || "Must contain at least one number.",
      },
      capital: {
        valid: /[A-Z]/.test(value),
        label:
          rules.capital?.label || "Must contain at least one uppercase letter.",
      },
      lowercase: {
        valid: /[a-z]/.test(value),
        label:
          rules.lowercase?.label ||
          "Must contain at least one lowercase letter.",
      },
      letter: {
        valid: /[a-zA-Z]/.test(value),
        label: rules.letter?.label || "Must contain at least one letter.",
      },
      notEmpty: {
        valid: Boolean(value.length > 0),
        label: rules.notEmpty?.label || "Cannot be empty.",
      },
    }),
    [value, minLength, maxLength, specialCharactersRegex, rules]
  );

  const enabledRules =
    Object.keys(rules).length === 0
      ? Object.keys(passwordRequirementDefinitions)
      : Object.keys(rules).filter((rule) =>
          Boolean(
            passwordRequirementDefinitions[rule as PasswordRequirementNames]
          )
        );

  const filteredObject = Object.fromEntries(
    Object.entries(passwordRequirementDefinitions).filter(([key]) =>
      enabledRules.includes(key)
    )
  );

  const calculatePasswordStrength = () => {
    const fulfilledRulesCount = enabledRules.reduce(
      (count, rule) =>
        passwordRequirementDefinitions[rule as PasswordRequirementNames].valid
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
        passwordRequirementDefinitions[rule as PasswordRequirementNames].valid
    );
    setIsValid(isAllRulesValid);

    if (typeof onChange === "function") {
      onChange({
        Rules: filteredObject,
        "Password Meet Requirements": isValid,
        "Password Strength": passwordStrength,
      });
    }
  }, [
    value,
    enabledRules,
    onChange,
    passwordRequirementDefinitions,
    isValid,
    filteredObject,
    passwordStrength,
  ]);

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
          passwordRequirementDefinitions[rule as PasswordRequirementNames];
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
