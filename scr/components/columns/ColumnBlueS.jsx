import React from "react";
import styled from 'styled-components'
import SmallButton from "../button/SmallbuttonBlue";
function ColumnBlueS(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <SmallButton variant="defaultBlue">Try it free</SmallButton>
      <SmallButton variant="hoverBlue">Try it free</SmallButton>
      <SmallButton variant="pressedBlue">Try it free</SmallButton>
      <SmallButton variant="focusedBlue">Try it free</SmallButton>    
      <SmallButton variant="loadingBlue">Try it free</SmallButton>    
      <SmallButton variant="disabledBlue">Try it free</SmallButton>    
    </Column>
  )
}
export default ColumnBlueS;