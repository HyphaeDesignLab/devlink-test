import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormField.module.css";

export function FormField({
  as: _Component = _Builtin.Block,
  onClick = {},
  fieldLabel = "Input 1",
}) {
  return (
    <_Component className={_utils.cx(_styles, "field")} tag="div">
      <_Builtin.FormBlockLabel>{fieldLabel}</_Builtin.FormBlockLabel>
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "input")}
        autoFocus={false}
        maxLength={256}
        name="name"
        data-name="Name"
        type="text"
        disabled={false}
        required={false}
        id="nursery-name"
        {...onClick}
      />
    </_Component>
  );
}
