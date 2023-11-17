import React from "react";
import * as _Builtin from "./_Builtin";
import { ResultItem } from "./ResultItem";
import * as _utils from "./utils";
import _styles from "./Results.module.css";

export function Results({
  as: _Component = _Builtin.Block,
  showSampleResult = true,
  prop1,
  slot1,
  children = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "results-container")}
      tag="div"
      component="NurserySearchResults"
    >
      <_Builtin.Heading tag="h3">{"Results:"}</_Builtin.Heading>
      <_Builtin.Block tag="div">{"no results found"}</_Builtin.Block>
      <ResultItem isVisible={showSampleResult} text="Sample Result" />
      <_Builtin.Block tag="div">{children}</_Builtin.Block>
    </_Component>
  );
}
