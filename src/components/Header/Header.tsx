import React from 'react';
import styled from "styled-components"
import MapIcon from '@mui/icons-material/MapOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InputComponent from './InputComponent';


function Header() {
  return (
    <HeaderWrapper>
      <InputComponent Icon={MapIcon} Text="Overview" />
      <InputComponent Icon={StarBorderIcon} Text="Star" />

    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div` 
display: flex;
align-items:center;
border: 1px solid lightgray;
border-right: none;
border-left: none;
width: 100%;
padding: 10px 0px;

`
