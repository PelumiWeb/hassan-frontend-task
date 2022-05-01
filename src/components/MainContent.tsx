import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import RepositoryComponent from './RepositorComponent'
import {useAppDispatch, useAppSelector} from "../app/hooks"
import {selectRepo, filterrepo, selectStatus} from "../features/repository/repositorySlice"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function MainContent() {
    const repo = useAppSelector(selectRepo)
    const status = useAppSelector(selectStatus)

    const dispatch = useAppDispatch()
    const [searchProducts, setSearchProducts] = useState("")
   
    useEffect(() => {
        const FilterData = () => {
        dispatch(filterrepo(searchProducts))
            }
       FilterData()

    }, [searchProducts])
    

  return (
    <MainContentWrapper>
        {/* Inputs Header */}
        <InputHeader> 
            <input placeholder='Find a repository...' onChange={(e) => setSearchProducts(e.target.value)} />
            <div > 
                <SortStyle>Type</SortStyle>
                <ArrowDropDownIcon />
            </div>
            <div > 
                <SortStyle>Language</SortStyle>
                <ArrowDropDownIcon />
            </div>
            <div > 
                <SortStyle>Sort</SortStyle>
                <ArrowDropDownIcon style={{fontWeight: 500}} />
            </div>
        </InputHeader>
        {status === "loading" && <p>Loading...</p>}
        {!!repo && repo?.map((data: any) => (
        <RepositoryComponent data={data} />
        ))}

    </MainContentWrapper>
  )
}

export default MainContent

const MainContentWrapper = styled.div`
flex: 0.7;
`

const InputHeader = styled.div`
display: flex;
padding: 20px;
border-bottom: 1px solid lightgray;
width:100% ;


> input {
    height: 15px;
    width: 500px;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 5px;
    color: gray;
} 


> div {
    display: flex;
     align-items: center;
      background: whitesmoke;
       height: 15px;
        justify-content: center;
        width: 100px;
        border-radius: 5px;
        border: 1px solid lightgray;
        color: black;
        font-weight: bold;
        margin-right: 10px;
        padding: 5px;
        font-size: 14px;
}
`

const SortStyle = styled.p`
    font-weight: 500;
`
