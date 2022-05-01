import React, { useEffect } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase-config';
import { getAdditionalUserInfo, getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import {useNavigate} from "react-router-dom"
import { fetchUserAsync, login } from '../features/user/userSlice';
import { useAppDispatch } from '../app/hooks';

function LoginPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // useEffect(() => {
    //     dispatch(fetchUserAsync("PelumiWeb"))
    //     navigate("/")
    // }, [])

    const SignInWithGithub = async () => {
        try {
            initializeApp(firebaseConfig)
            let provider =  new GithubAuthProvider();
             provider.addScope('repo')
             const auth = getAuth();
            //  auth.onAuthStateChanged
             const result  = await signInWithPopup(auth, provider)
             const profile = getAdditionalUserInfo(result)
             const username = profile?.username

             if (username) {
                dispatch(login({
                    username,
                    user: profile.profile
                }))
             }
                  navigate("/")

        } catch (e) {
            console.log(e)
        }
          
          }
  return (
    <div style={{display: "grid", placeItems: "center", height: "100vh", width: "100%"}}>
        <ButtonWrapper onClick={SignInWithGithub}> 
        <button> 
            Login with Github
        <GitHubIcon />

        </button>
        
        </ButtonWrapper>
 
       
    </div>
  );
}

export default LoginPage;

const ButtonWrapper = styled.div`
width: 250px;
display: flex;
align-items: center;
justify-content: space-between;
> button {
    display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
border: none;
border-radius:10px;
padding: 10px;
cursor: pointer;

}

`