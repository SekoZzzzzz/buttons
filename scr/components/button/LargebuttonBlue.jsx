import React from "react";
import styled from 'styled-components';


const colors = {
  defaultBlue: '#6580A2',
  hoverBlue: '#557092',
  pressedBlue: '#4E698B',
  focusedBlue: '#6580A2',
  loadingBlue: '#6580A2',
  disabledBlue: '#D6E2F2',
  defaultBorder: '#DDDDDD',
  defaultTxt: '#FFFFFF',
  hoverBorder: '#717171',
  hoverTxt: '#FFFFFF',
  pressedBorder: '#414042',
  pressedTxt: '#FFFFFF',
  pressedBorder: '#414042',
  focusedTxt: '#FFFFFF',
  focusedBorder: '#D6E2F2',
  loadingBorder: '#DDDDDD',
  loadingTxt: '#FFFFFF',
  disabledBorder: '#DDDDDD',
  disabledTxt: '#ffffff'
};


const Button = styled.button`
  width: 113px;
  height: 48px;
  font-family: Open-sans, sans-serif;
  font-size: 18px; 
  cursor: pointer;
  border-radius: 6px;

  ${(props) => props.variant === 'defaultBlue' && `
    background-color: ${colors.defaultBlue};
    border: ${colors.defaultBorder};
    color: ${colors.defaultTxt};
  `}

  ${(props) => props.variant === 'hoverBlue' && `
    background-color: ${colors.hoverBlue};
    border: ${colors.hoverBorder};
    color: ${colors.hoverTxt};
  `}

  ${(props) => props.variant === 'pressedBlue' && `
    background-color: ${colors.pressedBlue};
    border: ${colors.pressedBorder};
    color: ${colors.pressedTxt};
  `}

  ${(props) => props.variant === 'focusedBlue' && `
    background-color: ${colors.focusedBlue};
    border: ${colors.focusedBorder};
    color: ${colors.focusedTxt};
    border-style: solid;
    border-width: 2px;
  `}
  ${(props) => props.variant === 'loadingBlue' && `
    background-color: ${colors.loadingBlue};
    border: ${colors.loadingBorder};
    color: ${colors.loadingTxt};
  `}
  ${(props) => props.variant === 'disabledBlue' && `
    background-color: ${colors.disabledBlue};
    border: ${colors.disabledBorder};
    color: ${colors.disabledTxt};
  `}
`;

function LargeButton({ variant, children }) {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  );
}

export default LargeButton;
