import React from "react";
import * as maths from "./Maths";
export default function ListHeader() {
  return (
    <lu>
      <li>Addition:{maths.default(2, 3)}</li>
      <li>subtract:{maths.subtract(5, 2)}</li>
      <li>multiplication:{maths.multiplication(5, 8)}</li>
      <li>devision:{maths.devision(27, 6)}</li>
    </lu>
  );
}
