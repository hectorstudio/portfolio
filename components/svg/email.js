import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
class Email extends React.Component {
  render() {
    return (
      <SVG
        fill={this.props.color}
        textcolor={this.props.textcolor}
        viewBox="0 0 31.012 31.012"
      >
        <g>
          <g>
            <path
              d="M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706
           c0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z
           "
            />
            <path
              d="M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398
           c0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z"
            />
          </g>
          <path
            d="M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047
       C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012
       c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z"
          />
          <path
            d="M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449
       c0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419
       c0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355
       C16.835,17.797,16.171,18.018,15.506,18.018z"
          />
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </SVG>
    );
  }
}

export default Email;
