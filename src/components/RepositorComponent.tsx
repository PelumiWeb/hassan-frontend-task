import React from 'react'
import styled from "styled-components"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReactTimeAgo from 'react-time-ago'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function RepositorComponent({data} : any) {
  return (
    <Repository> 
    {/* Left */}
    <LeftRepository> 
    <LeftTop style={{display: "flex"}}> 
        <Title >{data?.name}</Title>
        <Public>{data?.visibility}</Public>
    </LeftTop>
    <p style={{color: "gray"}}>{data?.description}</p>
    <LeftBottom>
       <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}> 
       <div style={{backgroundColor: "#2b7489", width: 12, height: 12, borderRadius: "50%", marginRight: 5}}/>
            <p style={{fontSize: 12}}>{data?.language}</p>
       </div>

    {data?.stargazers_count !== 0 && 
    <div> 
      <StarBorderIcon />
      <p>{data?.stargazers_count}</p>
      </div>}

       <p>
         Updated {""}
            <ReactTimeAgo date={data?.updated_at} locale="en-US"/>
       </p>


    </LeftBottom>
    </LeftRepository>


    {/* Right */}
    <RightRepository> 
    <div > 
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <StarBorderIcon />
        <p style={{fontSize: 12}}>Star</p>

        </div>
        <ArrowDropDownIcon style={{borderLeft: `1px solid lightgray`}} />
    </div>

    </RightRepository>

</Repository>
  )
}

export default RepositorComponent

const Repository = styled.div`
width: 100%;
border-bottom: 1px solid lightgray;
display: flex;
align-items: flex-start;
justify-content: space-between;

`

const LeftRepository = styled.div` 
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around; 
height: 100%;


`

const LeftTop = styled.div` 
display: flex;
align-items: center;
`
const Title = styled.p`
color: #1f6feb;
font-weight: bold;

`
const Public = styled.p`
border: 1px solid gray; 
color: gray; 
border-radius: 10px; 
padding: 0px 10px; 
margin-left: 10px;
 font-size: 12px;
 height: 20px;
 
`

const LeftBottom = styled.div`
display: flex; align-items: center; justify-content: space-between; width: 250px; 

`

const RightRepository = styled.div`
padding-top: 10px;
> div {
    display: flex;
     align-items: center;
     justify-content: space-between;
      background: whitesmoke;
       height: 30px;
        width: 100px;
        border-radius: 5px;
        border: 1px solid lightgray;
        color: gray;
        font-weight: bold;
        margin-right: 10px;
        padding: 0px 5px;

`