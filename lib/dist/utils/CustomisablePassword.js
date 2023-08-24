"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var PasswordRequirementComponent_1 = require("./PasswordRequirementComponent");
var MUICustomisablePasswordComponent = function (_a) {
    var _b = _a.rules, rules = _b === void 0 ? {} : _b, value = _a.value, _c = _a.minLength, minLength = _c === void 0 ? 8 : _c, _d = _a.maxLength, maxLength = _d === void 0 ? 16 : _d, onChange = _a.onChange, _e = _a.specialCharactersRegex, specialCharactersRegex = _e === void 0 ? /[~`¿¡!#$%&*€£@+÷=[\]\\';,/{}()|\\":<>?._]/g : _e, _f = _a.passwordStrengthBar, passwordStrengthBar = _f === void 0 ? true : _f, _g = _a.successColourProgressBar, successColourProgressBar = _g === void 0 ? "#4caf50" : _g, _h = _a.warningColourProgressBar, warningColourProgressBar = _h === void 0 ? "#f5333f" : _h, remainingProps = __rest(_a, ["rules", "value", "minLength", "maxLength", "onChange", "specialCharactersRegex", "passwordStrengthBar", "successColourProgressBar", "warningColourProgressBar"]);
    var _j = (0, react_1.useState)(false), isValid = _j[0], setIsValid = _j[1];
    if (maxLength < minLength) {
        maxLength = minLength + 1;
    }
    var passwordRequirementDefinitionsCallback = (0, react_1.useCallback)(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            minLength: {
                valid: value.length >= minLength,
                label: ((_a = rules.minLength) === null || _a === void 0 ? void 0 : _a.label) ||
                    "Must be at least ".concat(minLength, " characters long."),
            },
            maxLength: {
                valid: value.length <= maxLength && value.length > 0,
                label: ((_b = rules.maxLength) === null || _b === void 0 ? void 0 : _b.label) || "Must not exceed ".concat(maxLength, " characters."),
            },
            specialChar: {
                valid: specialCharactersRegex.test(value),
                label: ((_c = rules.specialChar) === null || _c === void 0 ? void 0 : _c.label) ||
                    "Must contain at least one special character (".concat(specialCharactersRegex
                        .toString()
                        .replace("/[", "")
                        .replace("]/g", ""), ")."),
            },
            number: {
                valid: /\d/g.test(value),
                label: ((_d = rules.number) === null || _d === void 0 ? void 0 : _d.label) || "Must contain at least one number.",
            },
            capital: {
                valid: /[A-Z]/.test(value),
                label: ((_e = rules.capital) === null || _e === void 0 ? void 0 : _e.label) || "Must contain at least one uppercase letter.",
            },
            lowercase: {
                valid: /[a-z]/.test(value),
                label: ((_f = rules.lowercase) === null || _f === void 0 ? void 0 : _f.label) ||
                    "Must contain at least one lowercase letter.",
            },
            letter: {
                valid: /[a-zA-Z]/.test(value),
                label: ((_g = rules.letter) === null || _g === void 0 ? void 0 : _g.label) || "Must contain at least one letter.",
            },
            notEmpty: {
                valid: Boolean(value.length > 0),
                label: ((_h = rules.notEmpty) === null || _h === void 0 ? void 0 : _h.label) || "Cannot be empty.",
            },
        });
    }, [value, minLength, maxLength, specialCharactersRegex, rules]);
    var enabledRules = Object.keys(rules).length === 0
        ? Object.keys(passwordRequirementDefinitionsCallback())
        : Object.keys(rules).filter(function (rule) {
            return Boolean(passwordRequirementDefinitionsCallback()[rule]);
        });
    var filteredObject = Object.fromEntries(Object.entries(passwordRequirementDefinitionsCallback()).filter(function (_a) {
        var key = _a[0];
        return enabledRules.includes(key);
    }));
    var calculatePasswordStrength = function () {
        var fulfilledRulesCount = enabledRules.reduce(function (count, rule) {
            return passwordRequirementDefinitionsCallback()[rule].valid
                ? count + 1
                : count;
        }, 0);
        return Math.floor((fulfilledRulesCount / enabledRules.length) * 100);
    };
    var passwordStrength = calculatePasswordStrength();
    (0, react_1.useEffect)(function () {
        var isAllRulesValid = enabledRules.every(function (rule) {
            return passwordRequirementDefinitionsCallback()[rule].valid;
        });
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
        passwordRequirementDefinitionsCallback,
        isValid,
        filteredObject,
        passwordStrength,
    ]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [passwordStrengthBar && ((0, jsx_runtime_1.jsx)(material_1.LinearProgress, { variant: "determinate", value: passwordStrength, sx: {
                    borderRadius: "25px",
                    height: "10px",
                    "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: passwordStrength === 100
                            ? successColourProgressBar
                            : warningColourProgressBar,
                    },
                } })), enabledRules.map(function (rule) {
                var _a = passwordRequirementDefinitionsCallback()[rule], label = _a.label, valid = _a.valid;
                return ((0, jsx_runtime_1.jsx)(PasswordRequirementComponent_1.PasswordRequirementComponent, __assign({ valid: valid, validColour: "#4caf50", defaultColour: "#f5333f" }, remainingProps, { children: label }), rule));
            })] }));
};
exports.default = MUICustomisablePasswordComponent;
//# sourceMappingURL=CustomisablePassword.js.map