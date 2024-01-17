import React from "react";
import styled from 'styled-components'
import MediumButton from "../button/MediumbuttonBlack";

function ColumnBlackM(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <MediumButton variant="defaultBlack">Try it free</MediumButton>
      <MediumButton variant="hoverBlack">Try it free</MediumButton>
      <MediumButton variant="pressedBlack">Try it free</MediumButton>
      <MediumButton variant="focusedBlack">Try it free</MediumButton>    
      <MediumButton variant="loadingBlack">Try it free</MediumButton>    
      <MediumButton variant="disabledBlack">Try it free</MediumButton>    
    </Column>
  )
}
export default ColumnBlackM;