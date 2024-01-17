import React from "react";
import styled from 'styled-components'
import ColumnBlackL from "../columns/ColumnBlackL";
import ColumnBlackM from "../columns/ColumnBlackM";
import ColumnBlackS from "../columns/ColumnBlackS";
function Blockblack(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnBlackL/>
      <ColumnBlackM/>
      <ColumnBlackS/>
    </Block>
  )
}
export default Blockblack;