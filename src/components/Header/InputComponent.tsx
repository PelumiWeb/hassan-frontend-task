import React from 'react';
import styled from "styled-components"

export interface InputProps {
    Icon: any,
    Text: string,
    count?: number,
    active?: boolean

}


function InputComponent({Icon, Text, count}: InputProps ) {
  return (
    <InputComponentWrapper>
    <Icon  style={{width: 20, marginRight: 10}}/>
    <TextWrapper>{Text}</TextWrapper>
    {!!count && <p>{count}</p>}
    </InputComponentWrapper>
  );
}

export default InputComponent;

const InputComponentWrapper = styled.div` 
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;


`
const TextWrapper = styled.p`
font-size: 14px;
`