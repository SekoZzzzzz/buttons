import React from "react";
import styled from 'styled-components'
import LargeButton from "../button/LargebuttonBlue";

function ColumnBlueL(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <LargeButton variant="defaultBlue">Try it free</LargeButton>
      <LargeButton variant="hoverBlue">Try it free</LargeButton>
      <LargeButton variant="pressedBlue">Try it free</LargeButton>
      <LargeButton variant="focusedBlue">Try it free</LargeButton>    
      <LargeButton variant="loadingBlue">Try it free</LargeButton>    
      <LargeButton variant="disabledBlue">Try it free</LargeButton>    
    </Column>
  )
}
export default ColumnBlueL;