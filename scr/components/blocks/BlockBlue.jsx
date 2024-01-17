import React from "react";
import styled from 'styled-components'
import ColumnBlueL from "../columns/ColumnBlueL";
import ColumnBlueM from "../columns/ColumnBlueM";
import ColumnBlueS from "../columns/ColumnBlueS";
function Blockblue(){
  const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <Block>
      <ColumnBlueL/>
      <ColumnBlueM/>
      <ColumnBlueS/>
    </Block>
  )
}
export default Blockblue;