import React from 'react';
import cameraLogo from '../../assets/cameraLogo.svg';
import iglogo from '../../assets/iglogo.png';
import heart from '../../assets/heart.svg';
import compass from '../../assets/compass.svg';
import user from '../../assets/user.svg';
 
const SearchBar = () => {
  return (
    <div style={barWrapper}>
      <div style={imgWrapper}>
        <img alt='camera' src={cameraLogo} style={social}/>
        <img alt="instagram logo" src={iglogo} style={logoImg} />
      </div>
      <div>
        <input style={search} type="text" placeholder= "Search" />
      </div>
      <div style={socialWrapper}>
        <div style={social}>
        <img alt='compass' src={compass} className="logo" />
        </div>
        <div style={social}>
          <img alt='heart' src={heart} className="logo" />
        </div>
        <div style={social}>
          <img alt='user logo' src={user} className="logo" />
        </div>
      </div>
    </div>
  );
};


const barWrapper = {
    borderBottom: '1px solid #3333',
    background: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    height: '80px',
    lineHeight: '70px'
}

const search = {
    padding: '5px 10px',
    opacity: '.5',
    textAlign: 'center',
    border: '1px solid gray',
    background: '#FAFAFA'
}

const imgWrapper ={
    height: '29px'
}

const logoImg = {
    margin: '10px 0',
    height: '100%',
    borderLeft: '1px solid gray',
    padding: '0 10px'
}
 
const socialWrapper = {
    display: 'flex'
}

const social = {
    margin: '10px',
    height: '24px',
    width: '24px'
}
export default SearchBar; 