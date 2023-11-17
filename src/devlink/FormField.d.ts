import * as React from "react";
import * as Types from "./types";

declare function FormField(props: {
  as?: React.ElementType;
  onClick?: Types.Devlink.RuntimeProps;
  fieldLabel?: React.ReactNode;
  onChange?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
