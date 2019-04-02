import React from 'react';
import cameraLogo from '../../assets/cameraLogo.svg';
import iglogo from '../../assets/iglogo.png';
import heart from '../../assets/heart.svg';
import compass from '../../assets/compass.svg';
import user from '../../assets/user.svg';
import styled from 'styled-components';

const LogoStyle = styled.img`
  padding: 5px;
  width: 24px;
  height: 24px;
`;

const BarWrapper = styled.div`
    border-Bottom: 1px solid gray;
    background: #ffffff;
    display: flex;
    justify-Content: space-between;
    height: 80px;
    line-Height: 70px;
`;

const SearchStyle = styled.input`
    padding: 5px 10px;
    opacity: .5;
    text-Align: center;
    border: 1px solid gray;
    background: #FAFAFA;
`;

const ImgWrapper = styled.div`
    height: 29px;
`;

const LogoImg = styled.img`
    margin: 10px 0;
    height: 100%;
    border-Left: 1px solid gray;
    padding: 0 10px;
`;
 
const SocialWrapper = styled.div`
    display: flex;
`;

const Social = styled.div`
    margin: 10px;
    height: 24px;
    width: 24px;
`;

const SocialImg = styled.img`
    margin: 10px;
    height: 24px;
    width: 24px;
`;

const SearchBar = props => {
  return (
    <BarWrapper>
      <ImgWrapper>
        <SocialImg alt='camera' src={cameraLogo} />
        <LogoImg alt="instagram logo" src={iglogo}/>
      </ImgWrapper>
      <form onSubmit = {(e)=>props.submit(e)}>
        <SearchStyle onChange = {(e)=>props.change(e)} type="text" placeholder= "Search" value = {props.value}/>
      </form>
      <SocialWrapper>
        <Social>
        <LogoStyle alt='compass' src={compass} />
        </Social>
        <Social>
          <LogoStyle alt='heart' src={heart} />
        </Social>
        <Social>
          <LogoStyle alt='user logo' src={user} />
        </Social>
      </SocialWrapper>
    </BarWrapper>
  );
};



export default SearchBar; 