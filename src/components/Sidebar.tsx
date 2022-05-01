import { Avatar } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import {selectUser} from "../features/user/userSlice"
import {useAppSelector} from "../app/hooks"
function Sidebar() {
    const {user} = useAppSelector(selectUser)
  return (
    <SidebarWrapper>
        <Avatar src={user.avatar_url} style={{width: 200, height: 200}}/>
        <p>{user.name}</p>
        <FollowButton> 
            Follow
        </FollowButton>
        <p>{user.bio}</p>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}> 
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}> 
                <PeopleOutlineOutlinedIcon />
                <p>{user.followers} followers</p>
            </div>
            <p> . </p> 
        <p>{user.following} following</p>
        </div>
        <IconComponent >
            <LocationOnOutlinedIcon />
            <p>{user.location}</p>
        </IconComponent> 
        <IconComponent >
            <EmailOutlinedIcon />
            <p>{user.email}</p>
        </IconComponent> 
        <IconComponent >
            <TwitterIcon />
            <p>{user.twitter_username}</p>
        </IconComponent>
    </SidebarWrapper>
  )
}

export default Sidebar

const SidebarWrapper = styled.div`
flex: 0.3;
display: flex;
flex-direction: column;
align-items: center;

` 
const FollowButton = styled.button` 
width: 70%;
background:whitesmoke;
color: gray;
border: 1px solid lightgray;
border-radius:10px;
padding: 5px;
`

const IconComponent = styled.div` 
justify-content: space-between;
    align-items: center;
    display: flex;
`