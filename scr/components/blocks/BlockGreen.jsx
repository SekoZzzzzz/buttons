import React from "react";
import styled from 'styled-components'
import Column from "../Column";
function Block(){
  const block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  `
  return(
    <block>
      <Column/>
    </block>
  )
}
export default Block;