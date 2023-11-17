import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormField.module.css";

export function FormField({
  as: _Component = _Builtin.Block,
  label = "field name",
  inputId = "field-input-id",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "field")}
      tag="div"
      component="FormField"
    >
      <_Builtin.FormBlockLabel htmlFor="nursery-name">
        {label}
      </_Builtin.FormBlockLabel>
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "input")}
        autoFocus={false}
        maxLength={256}
        name="name"
        data-name="Name"
        type="text"
        disabled={false}
        required={false}
        id={inputId}
      />
    </_Component>
  );
}
