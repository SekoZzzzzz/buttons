import React from "react";
import styled from 'styled-components'
import MediumButton from "../button/MediumbuttonBlue";

function ColumnBlueM(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <MediumButton variant="defaultBlue">Try it free</MediumButton>
      <MediumButton variant="hoverBlue">Try it free</MediumButton>
      <MediumButton variant="pressedBlue">Try it free</MediumButton>
      <MediumButton variant="focusedBlue">Try it free</MediumButton>    
      <MediumButton variant="loadingBlue">Try it free</MediumButton>    
      <MediumButton variant="disabledBlue">Try it free</MediumButton>    
    </Column>
  )
}
export default ColumnBlueM;