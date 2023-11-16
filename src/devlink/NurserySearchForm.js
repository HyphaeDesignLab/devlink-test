import React from "react";
import * as _Builtin from "./_Builtin";
import { FormField } from "./FormField";
import * as _utils from "./utils";
import _styles from "./NurserySearchForm.module.css";

export function NurserySearchForm({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, "form-block")}>
      <_Builtin.FormForm
        name="email-form"
        data-name="Email Form"
        method="get"
        id="email-form"
      >
        <FormField fieldLabel="Nursery Name" />
        <FormField fieldLabel="Location" />
        <FormField fieldLabel="Distance" />
        <FormField fieldLabel="Date" />
        <_Builtin.FormButton
          type="submit"
          value="Submit"
          data-wait="Please wait..."
        />
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage>
        <_Builtin.Block tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage>
        <_Builtin.Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
