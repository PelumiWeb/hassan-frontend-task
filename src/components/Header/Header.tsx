import React from 'react';
import styled from "styled-components"
import MapIcon from '@mui/icons-material/MapOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import InputComponent from './InputComponent';


function Header() {
  return (
    <HeaderWrapper>
      <InputComponent Icon={MapIcon} Text="Overview" />
      <InputComponent Icon={AccountTreeOutlinedIcon} Text="Repositories" />

      <InputComponent Icon={ViewInArSharpIcon} Text="Projects"/>
      <InputComponent Icon={StarBorderIcon} Text="Stars" />

     

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
padding: 10px 0px;
padding-left: 40%;
`
