import * as React from "react";
import * as Types from "./types";

declare function Results(props: {
  as?: React.ElementType;
  showSampleResult?: Types.Visibility.VisibilityConditions;
  prop1?: Types.Devlink.RuntimeProps;
  slot1?: Types.Devlink.Slot;
  children?: React.ReactNode;
}): React.JSX.Element;
