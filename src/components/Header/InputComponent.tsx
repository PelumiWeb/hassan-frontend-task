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
    <Icon  style={{width: 24, marginRight: 10}}/>
    <TextWrapper>{Text}</TextWrapper>
    {!!count && <CountWrapper>{count}</CountWrapper>}
    </InputComponentWrapper>
  );
}

export default InputComponent;

const InputComponentWrapper = styled.div` 
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
padding: 0px 10px;
border-radius:10px;
cursor: pointer;

&:hover {
    background:whitesmoke;
}


`
const TextWrapper = styled.p`
font-size: 14px;
`

const CountWrapper = styled.p`
padding: 2px 15px;
    background: lightgray;
    border-radius: 10px;
    font-size: 12px;
    margin-left: 10px;
`