import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ResultItem.module.css";

export function ResultItem({
  as: _Component = _Builtin.Block,
  text = "Name",
  component = {},
  isSample,
  resultItemSlot,
  isVisible = true,
}) {
  return isVisible ? (
    <_Component
      className={_utils.cx(_styles, "result-item")}
      tag="div"
      component="NurserySearchResultItem"
      {...isSample}
    >
      {resultItemSlot ?? <_Builtin.Block tag="div">{text}</_Builtin.Block>}
    </_Component>
  ) : null;
}
