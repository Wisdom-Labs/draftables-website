import React from 'react';
import "./styles/Stake.scss";
import StakePlayer from "../assets/Stake/Stake.png"

const Stake: React.FC = () => {
  return (
    <div className='overview'>
      <div className='container' id='athlete'>
        <h1>Staked Athlete</h1>
        <a>
          <img src={StakePlayer}/>
        </a>
      </div>
    </div>
  );
};

export default Stake;
