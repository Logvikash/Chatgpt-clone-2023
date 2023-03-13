import React from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import "./ComponentsCSS/SelectOptions.css";

const SelectOptions = ({ modelItem, selectOption }) => {
  return (
    <div className="select-option-container">
      <Container>
        <Row>
          <Col>
            <h1 className="heading">
              <AiOutlineRobot /> React AI App
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="grid-main">
              {/* map function is used */}
              {modelItem.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="grid-child"
                    onClick={() => selectOption(item.option)}
                  >
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SelectOptions;
