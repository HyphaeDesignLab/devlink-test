import * as React from "react";
import * as Types from "./types";

declare function ResultItem(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  component?: Types.Devlink.RuntimeProps;
  isSample?: Types.Devlink.RuntimeProps;
  resultItemSlot?: Types.Devlink.Slot;
  isVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
