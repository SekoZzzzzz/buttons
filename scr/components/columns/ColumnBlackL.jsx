import React from "react";
import styled from 'styled-components'
import LargeButton from "../button/LargebuttonBlack";

function ColumnBlackL(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <LargeButton variant="defaultBlack">Try it free</LargeButton>
      <LargeButton variant="hoverBlack">Try it free</LargeButton>
      <LargeButton variant="pressedBlack">Try it free</LargeButton>
      <LargeButton variant="focusedBlack">Try it free</LargeButton>    
      <LargeButton variant="loadingBlack">Try it free</LargeButton>    
      <LargeButton variant="disabledBlack">Try it free</LargeButton>    
    </Column>
  )
}
export default ColumnBlackL;