import React from "react";
import * as _Builtin from "./_Builtin";
import { Project } from "./Project";
import { ProjectWithSlots } from "./ProjectWithSlots";
import * as _utils from "./utils";
import _styles from "./MyProjects.module.css";

export function MyProjects({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "projects")} tag="div">
      <Project />
      <ProjectWithSlots
        projectDetailsProp1="prop1value"
        projectDetailsId="some-id"
        projectDetailsText="some button details text"
        richText={
          <>
            <_Builtin.Heading tag="h2">{"Some Title"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {"the body of the rich text field/property!!!"}
            </_Builtin.Paragraph>
          </>
        }
        projectDetailsText2="details2"
      />
    </_Component>
  );
}
