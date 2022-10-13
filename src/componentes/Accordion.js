import React from "react";
import { Data } from "./Data";
import styled from "@emotion/styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = () => {
  return (
    <div className="wrapper">
      <div className="accordion">
        {Data.map((item, i) => {
          <div className="item">
            <div className="title">
              <h2>{item.question}</h2>
            </div>
            <div className="content">{item.question}</div>
          </div>;
        })}
      </div>
    </div>
  );
};
export default Accordion;
