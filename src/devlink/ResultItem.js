import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResultItem.module.css";

export function ResultItem({
  as: _Component = _Builtin.Block,
  text = "Name",
  component = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "result-item")}
      tag="div"
      component="NurserySearchResultItem"
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
