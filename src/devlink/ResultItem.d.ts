import * as React from "react";
import * as Types from "./types";

declare function ResultItem(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  isVisible?: Types.Visibility.VisibilityConditions;
  props1?: Types.Devlink.RuntimeProps;
  props2?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
