import * as React from "react";
import * as Types from "./types";

declare function Results(props: {
  as?: React.ElementType;
  showSampleResult?: Types.Visibility.VisibilityConditions;
  children?: React.ReactNode;
  hasResults?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
