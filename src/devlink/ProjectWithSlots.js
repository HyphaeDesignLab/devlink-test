import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProjectWithSlots.module.css";

export function ProjectWithSlots({
  as: _Component = _Builtin.Block,
  projectDetailsId = "details-btn",
  projectDetailsText = "details",
  projectDetailsText2 = "details",
  projectDetailsProp1,
  richText = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "project")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "project-top-line")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "project-title")}
          tag="h3"
        >
          {"Title"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "project-dates")}
          tag="div"
        >
          {"2023/1/20 - 2023/5/4"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
        {"Project description"}
      </_Builtin.Paragraph>
      <_Builtin.Link
        className={_utils.cx(_styles, "project-details")}
        button={true}
        data-prop1={projectDetailsProp1}
        id={projectDetailsId}
        options={{
          href: "#",
        }}
      >
        {projectDetailsText}
      </_Builtin.Link>
      <_Builtin.Block tag="div">{projectDetailsText2}</_Builtin.Block>
      <_Builtin.RichText tag="div">{richText}</_Builtin.RichText>
    </_Component>
  );
}
