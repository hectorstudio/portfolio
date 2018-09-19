import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SVG = styled.svg`
  margin-left: 8px;
  width: 24px;
  height: 24px;
  object-fit: contain;
  fill: ${props => (props.textcolor ? props.textcolor : "white")};
`;

const Button = styled.button`
  font-family: Calibri, sans-serif;
  letter-spacing: 1px;
  color: ${props => (props.textcolor ? props.textcolor : "white")};
  background: ${props => (props.color ? props.color : "black")};
  font-size: 16px;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid ${props => (props.color ? props.color : "black")};
  border-radius: 20px;
  display: inline-flex;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

class ImageButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button color={this.props.color} textcolor={this.props.textcolor}>
        <Link
          style={{
            color: "inherit",
            textDecoration: "inherit",
            display: "inherit",
            alignItems: "inherit"
          }}
          to={this.props.link}
        >
          {this.props.text}
          <SVG
            viewBox="0 0 877.547 855.818"
            fill={this.props.color}
            textcolor={this.props.textcolor}
          >
            <path
              id="github"
              class="cls-1"
              d="M438.773.3C196.351.3,0,196.758,0,439.07,0,632.971,125.709,797.4,300.011,855.356c21.939,4.132,29.983-9.434,29.983-21.1,0-10.421-.366-38.027-.548-74.591C207.393,786.14,181.652,700.8,181.652,700.8c-19.964-50.642-48.814-64.171-48.814-64.171-39.746-27.2,3.071-26.655,3.071-26.655,44.06,3.071,67.205,45.194,67.205,45.194,39.124,67.1,102.71,47.717,127.793,36.491,3.949-28.374,15.247-47.717,27.789-58.686C261.253,622,158.836,584.268,158.836,416.144c0-47.9,17-87.023,45.157-117.738-4.936-11.079-19.745-55.688,3.839-116.129,0,0,36.747-11.774,120.663,44.974,35.1-9.763,72.4-14.589,109.693-14.809,37.3.219,74.591,5.046,109.693,14.809C631.248,170.5,668,182.278,668,182.278c23.584,60.441,8.775,105.05,4.388,116.129,27.972,30.714,44.974,69.838,44.974,117.738,0,168.562-102.563,205.675-200.19,216.461,15.357,13.163,29.617,40.075,29.617,81.173,0,58.723-.548,105.891-.548,120.151,0,11.518,7.679,25.229,30.166,20.842,175.546-57.552,301.145-222.092,301.145-415.7C877.547,196.758,681.086.3,438.773.3"
              transform="translate(0 -0.297)"
            />
          </SVG>
        </Link>
      </Button>
    );
  }
}

export default ImageButton;
