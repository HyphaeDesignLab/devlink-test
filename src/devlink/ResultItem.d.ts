import * as React from "react";
import * as Types from "./types";

declare function ResultItem(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  component?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
