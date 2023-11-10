import * as React from "react";
import * as Types from "./types";

declare function ProjectWithSlots(props: {
  as?: React.ElementType;
  projectDetailsId?: Types.Basic.IdTextInput;
  projectDetailsText?: React.ReactNode;
  projectDetailsText2?: React.ReactNode;
  projectDetailsProp1?: Types.Builtin.Text;
  richText?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
