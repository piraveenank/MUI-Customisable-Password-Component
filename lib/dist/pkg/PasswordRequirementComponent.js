"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRequirementComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var PasswordRequirementComponent = function (_a) {
    var valid = _a.valid, validColour = _a.validColour, defaultColour = _a.defaultColour, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { control: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { checked: valid, disabled: !valid, style: {
                    color: valid ? validColour : defaultColour,
                }, disableRipple: true }), label: children }) }));
};
exports.PasswordRequirementComponent = PasswordRequirementComponent;
//# sourceMappingURL=PasswordRequirementComponent.js.map