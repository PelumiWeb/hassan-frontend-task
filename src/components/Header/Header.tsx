import React from 'react';
import styled from "styled-components"
import MapIcon from '@mui/icons-material/MapOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import InputComponent from './InputComponent';
import { useAppSelector} from "../../app/hooks"
import {selectRepo,} from "../../features/repository/repositorySlice"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';


function Header() {
  const repo = useAppSelector(selectRepo)
  return (
    <HeaderWrapper>
      <InputComponent Icon={MapIcon} Text="Overview" />
      <InputComponent Icon={AccountTreeOutlinedIcon} Text="Repositories" count={repo.length} />
      <InputComponent Icon={ViewInArSharpIcon} Text="Packages"/>
      <InputComponent Icon={InboxOutlinedIcon} Text="Projects"/>
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
padding: 10px;
padding-left: 35%;
position: sticky;
top: 0;
background: white;
`
