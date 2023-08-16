import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Logos.module.css";

export function Logos({ as: _Component = _Builtin.Block, logosTitle = {} }) {
  return (
    <_Component className={_utils.cx(_styles, "container")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "clients-wrapper-two")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "clients-info-two")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Aliquet consectetur"}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "clients-quote-two")}
            tag="div"
            {...logosTitle}
          >
            {"Aliquet consectetur id magna ac integer."}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "clients-divider")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "clients-info")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-info-image")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ace5e12aae4_portfolio%204%20-%20wide.svg"
            />
            <_Builtin.Block tag="div">
              {"Full Name, Title"}
              <br />
              {"Company"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "clients-grid")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "clients-image-two")}
            id={_utils.cx(
              _styles,
              "w-node-cc98cefd-4929-369c-8372-623f3b2b39a9-3b2b399a"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="Ephicient logo"
            src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a3cd712aaf6_logo-05.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "clients-image-two")}
            id={_utils.cx(
              _styles,
              "w-node-cc98cefd-4929-369c-8372-623f3b2b39aa-3b2b399a"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="OE logo"
            src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a411512aaf4_logo-04.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "clients-image-two")}
            id={_utils.cx(
              _styles,
              "w-node-cc98cefd-4929-369c-8372-623f3b2b39ab-3b2b399a"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="2020INC logo"
            src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a753912aaf8_logo-07.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "clients-image-two")}
            id={_utils.cx(
              _styles,
              "w-node-cc98cefd-4929-369c-8372-623f3b2b39ac-3b2b399a"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="The Paak logo"
            src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ae38212aaf1_logo-03.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "clients-image-two")}
            id={_utils.cx(
              _styles,
              "w-node-cc98cefd-4929-369c-8372-623f3b2b39ad-3b2b399a"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="Pipelinx.co logo"
            src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ade1612aaf2_logo-02.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "clients-image-two")}
            id={_utils.cx(
              _styles,
              "w-node-cc98cefd-4929-369c-8372-623f3b2b39ae-3b2b399a"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt="AriseHealth logo"
            src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a395a12aaf3_logo-01.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
