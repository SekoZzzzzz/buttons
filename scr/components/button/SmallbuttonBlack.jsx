import React from "react";
import styled from 'styled-components';


const colors = {
  defaultBlack: '#414042',
  hoverBlack:'#2F2E30',
  pressedBlack: '#242325',
  focusedBlack:  '#414042',
  loadingBlack:  '#414042',
  disabledBlack: '#B1B1B1',
  defaultBorder: '#DDDDDD',
  defaultTxt: '#FFFFFF',
  hoverBorder: '#717171',
  hoverTxt: '#FFFFFF',
  pressedBorder: '#414042',
  pressedTxt: '#FFFFFF',
  pressedBorder: '#414042',
  focusedTxt: '#FFFFFF',
  focusedBorder: '#B1B1B1',
  loadingBorder: '#DDDDDD',
  loadingTxt: '#FFFFFF',
  disabledBorder: '#DDDDDD',
  disabledTxt: '#ffffff'
};


const Button = styled.button`
  width: 107px;
  height: 32px;
  font-family: Open-sans, sans-serif; 
  cursor: pointer;
  font-size: 18px;
  border-radius: 6px;

  ${(props) => props.variant === 'defaultBlack' && `
    background-color: ${colors.defaultBlack};
    border: ${colors.defaultBorder};
    color: ${colors.defaultTxt};
  `}

  ${(props) => props.variant === 'hoverBlack' && `
    background-color: ${colors.hoverBlack};
    border: ${colors.hoverBorder};
    color: ${colors.hoverTxt};
  `}

  ${(props) => props.variant === 'pressedBlack' && `
    background-color: ${colors.pressedBlack};
    border: ${colors.pressedBorder};
    color: ${colors.pressedTxt};
  `}

  ${(props) => props.variant === 'focusedBlack' && `
    background-color: ${colors.focusedBlack};
    border: ${colors.focusedBorder};
    color: ${colors.focusedTxt};
    border-style: solid;
    border-width: 2px;
  `}
  ${(props) => props.variant === 'loadingBlack' && `
    background-color: ${colors.loadingBlack};
    border: ${colors.loadingBorder};
    color: ${colors.loadingTxt};
  `}
  ${(props) => props.variant === 'disabledBlack' && `
    background-color: ${colors.disabledBlack};
    border: ${colors.disabledBorder};
    color: ${colors.disabledTxt};
  `}
`;

function SmallButton({ variant, children }) {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  );
}

export default SmallButton;