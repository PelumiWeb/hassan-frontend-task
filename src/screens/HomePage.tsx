import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Header from "../components/Header/Header"
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import { fetchRepoAsync } from '../features/repository/repositorySlice';
import { selectUser } from '../features/user/userSlice';

function HomePage() {
  const {username} = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  useEffect(() => { 
   dispatch(fetchRepoAsync(username))
  }, [])
  
  return (
    <div className="HomePage">
        <Header />
        {/* Main */}
        <Main> 
          {/* Sidebar */}
          <Sidebar />
          {/* Content */}
          <MainContent />

        </Main>
      
    </div>
  );
}

export default HomePage;

const Main = styled.div`
display: flex;
flex: 1;


`
