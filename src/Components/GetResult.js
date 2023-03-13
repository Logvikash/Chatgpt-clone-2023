import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ComponentsCSS/GetResult.css";

const GetResult = ({ action, setInput, result }) => {
  // condition if result is matching for / or . *,# or import 
  const isCode = result && result.match(/(function|class|\[.*\]|{|\/\/|import)/);

  return (
    <div className="getresult-container">
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control
                  className="text-area"
                  as="textarea"
                  rows={3}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Form.Group>
              <Button className="action-btn" onClick={action}>
                Get Result <BsArrowRight />
              </Button>
            </Form>
          </Col>
        </Row>
        {result && (
          <Row>
            <Col>
              <div className={`result-container ${isCode ? 'code' : 'text'}`}>
                <p className="result-text">{result}</p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default GetResult;
