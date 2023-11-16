import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "navbar", "grey")} tag="div">
      <_Builtin.Heading
        className={_utils.cx(_styles, "aos-header-black")}
        tag="h3"
      >
        {"PLANTNURSERY"}
      </_Builtin.Heading>
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar-3")}
        tag="div"
        config={{
          animation: "default",
          collapse: "all",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.NavbarContainer tag="div">
          <_Builtin.NavbarBrand
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-46")}
              width="224"
              height="auto"
              loading="lazy"
              alt=""
              src="https://uploads-ssl.webflow.com/64dc102f0fe9b9caf0623028/6553e6bfa8227a8767c75dbb_adaptOS_logo_simple-wide.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu tag="nav" role="navigation">
            <_Builtin.NavbarLink
              options={{
                href: "#",
              }}
            >
              {"Home"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton tag="div">
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.NavbarContainer>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
