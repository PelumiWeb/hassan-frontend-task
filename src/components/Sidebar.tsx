import { Avatar } from '@mui/material'
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
        <p style={{textAlign: "center", width: "70%"}}>{user.bio}</p>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "50%"}}> 
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}> 
                <PeopleOutlineOutlinedIcon />
                <p>{user.followers} followers</p>
            </div>
            <p> . </p> 
        <p>{user.following} following</p>
        </div>
        <div style={{width: "50%"}}> 

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
        </div>

    </SidebarWrapper>
  )
}

export default Sidebar

const SidebarWrapper = styled.div`
flex: 0.3;
display: flex;
flex-direction: column;
align-items: center;
position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 60px;
  height: 100%;
` 
const FollowButton = styled.button` 
width: 60%;
background:whitesmoke;
color: gray;
border: 1px solid lightgray;
border-radius:10px;
padding: 5px;
`

const IconComponent = styled.div` 
    align-items: center;
    display: flex;
`