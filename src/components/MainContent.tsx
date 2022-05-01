import React from 'react'
import styled from "styled-components"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RepositoryComponent from './RepositorComponent'
import {useAppDispatch, useAppSelector} from "../app/hooks"
import {selectRepo} from "../features/repository/repositorySlice"
 


function MainContent() {
    const repo = useAppSelector(selectRepo)
   

  return (
    <MainContentWrapper>
        {/* Inputs Header */}
        <InputHeader> 
            <input placeholder='Find a repository' />
            <div > 
                <p>Type</p>
                <ExpandMoreIcon />
            </div>
            <div > 
                <p>Language</p>
                <ExpandMoreIcon />
            </div>
            <div > 
                <p>Sort</p>
                <ExpandMoreIcon />
            </div>
        </InputHeader>
        {repo.map((data: any) => (
        <RepositoryComponent data={data} />
        ))}
        {/* <RepositoryComponent />
        <RepositoryComponent />
        <RepositoryComponent />
        <RepositoryComponent /> */}

    </MainContentWrapper>
  )
}

export default MainContent

const MainContentWrapper = styled.div`
flex: 0.7;
`

const InputHeader = styled.div`
display: flex;
padding: 10px;
border-bottom: 1px solid lightgray;
width:100% ;


> input {
    height: 35px;
    width: 400px;
    margin-right: 10px;
} 
> div {
    display: flex;
     align-items: center;
      background: whitesmoke;
       height: 40px;
        justify-content: center;
        width: 100px;
        border-radius: 5px;
        border: 1px solid lightgray;
        color: black;
        font-weight: bold;
        margin-right: 10px;
}
`

