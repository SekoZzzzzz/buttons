import React from "react";
import styled from 'styled-components'
import SmallButton from "../button/SmallbuttonBlack";

function ColumnBlackS(){
  const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `
  return(
    <Column>
      <SmallButton variant="defaultBlack">Try it free</SmallButton>
      <SmallButton variant="hoverBlack">Try it free</SmallButton>
      <SmallButton variant="pressedBlack">Try it free</SmallButton>
      <SmallButton variant="focusedBlack">Try it free</SmallButton>    
      <SmallButton variant="loadingBlack">Try it free</SmallButton>    
      <SmallButton variant="disabledBlack">Try it free</SmallButton>    
    </Column>
  )
}
export default ColumnBlackS;