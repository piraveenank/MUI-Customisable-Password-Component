import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const Props = () => {
  return (
    <>
      {" "}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prop</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>`rules`</TableCell>
              <TableCell>`object`</TableCell>
              <TableCell>Custom password rules.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`value`</TableCell>
              <TableCell>`string`</TableCell>
              <TableCell>The password string to evaluate.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`minLength`</TableCell>
              <TableCell>`number`</TableCell>
              <TableCell>Minimum password length.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`maxLength`</TableCell>
              <TableCell>`number`</TableCell>
              <TableCell>Maximum password length.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`onChange`</TableCell>
              <TableCell>`function`</TableCell>
              <TableCell>
                Callback function triggered on value change.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`specialCharactersRegex`</TableCell>
              <TableCell>`RegExp`</TableCell>
              <TableCell>Regular expression for special characters.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`passwordStrengthBar`</TableCell>
              <TableCell>`boolean`</TableCell>
              <TableCell>Enable/disable password strength bar.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`successColourProgressBar`</TableCell>
              <TableCell>`string`</TableCell>
              <TableCell>Color for successful progress bar.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>`warningColourProgressBar`</TableCell>
              <TableCell>`string`</TableCell>
              <TableCell>Color for warning progress bar.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Props;
