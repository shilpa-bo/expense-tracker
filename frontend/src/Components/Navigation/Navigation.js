import React from 'react'
import styled from 'styled-components';
import avatar from '../../img/pfp.png'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';
import { useNavigate} from "react-router-dom";

export default function Navigation({active, setActive}) {
//set active and use navigate to go to a path onClick
// in app: Router and add routes to each page- to navigate to- attach them to each page 
// on sign out- call the signout function and naviagate to sign in page!
// create auth folder for all the sign in/ sign out busienss 
// my only question is how to connect all this to the backend 
//how do i connect the paths to this- the actual ID to have the active
  const navigate = useNavigate();

  function handleSignout() {
    navigate('/signup')
  }

  return (
    <NavStyled>
        <div className="user-con">
            <img src={avatar} alt=""/>
            <div className='text'>
                <h2>Shilpa</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((item) => {
              return <li 
              key = {item.id}
              onClick={()=>
                navigate(item.link)}
              className={active===item.id?'active':''}
              >{item.icon}
              <span>{item.title}</span>
              </li>
            })}
            
        </ul>
        <div className="bottom-nav">
          <li className="sign-out" onClick={handleSignout}>
            {signout} Sign Out
          </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
      padding: 2rem 1.5rem;
      width: 374px;
      height: 100%;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      display: flex;
      flex-direction: column; 
      justify-content: space-between;
      gap: 2rem;

      .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          width: 80px;
          height:80px;
          border-radius: 50%;
          object-fit: cover;
          background: #fcf6f9;
          padding: .2rem;
          box-shadow: 0px 1px 17px rgba(0,0,0,0,06);
        }
        h2{
          color: rgba(34,34,96,1);
        }
        p{
          color: rgba(34,34,96,0.6);
        }
    }
    .menu-items{
      flex: 1;
      display: flex;
      flex-direction: column;
      li{
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        margin: .6rem 0;
        font-weight: 500;
        cursor: pointer;
        transition: all .4s ease-in-out;
        color: rgba(34, 34, 96, .6);
        padding-left: 1rem;
        position: relative;
        i{
            color: rgba(34, 34, 96, 0.6);
            font-size: 1.4rem;
            transition: all .4s ease-in-out;
        }
    }


    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

`;


