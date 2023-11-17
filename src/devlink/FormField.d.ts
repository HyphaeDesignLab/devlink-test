import * as React from "react";
import * as Types from "./types";

declare function FormField(props: {
  as?: React.ElementType;
  label?: React.ReactNode;
  inputId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
