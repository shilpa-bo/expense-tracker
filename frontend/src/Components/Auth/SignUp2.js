
//need to differentiate home page from signup page
//app automatically routes to signup, and once you are signed in, you can see everything else and route everything else
import{ React , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import styled from "styled-components"
import { facebook, github, google } from '../../utils/icons'
import Button from '../Button/Button'

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
      console.log("Submit")
    }

  return (
    <SignUpStyled>
      <div className='container' id='container'>
        <div className='form-container sign-up'>
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
                <div className="icon-box">
                  <i>{google}</i>
                </div>
                <div className="icon-box">
                  <i>{facebook}</i>
                </div>
                <div className="icon-box">
                  <i>{github}</i>
                </div>
            </div>
            <span>Use Email to Register</span>
            <input type="text" placeholder='Name'></input>
            <input type="email" placeholder='Email'></input>
            <input type="password" placeholder='Password'></input>
            <div className="submit-btn">
                <Button
                    name={'Sign Up'}
                    bPad={'10px 45px'}
                    bRad={'8px'}
                    bg={'#B33F62'}
                    color={'#fff'}
                />
              </div>
          </form>
        </div>
        <div className='form-container sign-in'>
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
                <div className="icon-box">
                  <i>{google}</i>
                </div>
                <div className="icon-box">
                  <i>{facebook}</i>
                </div>
                <div className="icon-box">
                  <i>{github}</i>
                </div>
              </div>
            <span>Enter Email and Password</span>
            <input type="email" placeholder='Email'></input>
            <input type="password" placeholder='Password'></input>
            <a href="#">Forgot Password?</a>
            <div className="submit-btn">
                <Button
                    name={'Sign In'}
                    bPad={'10px 45px'}
                    bRad={'8px'}
                    bg={'#B33F62'}
                    color={'#fff'}
                />
              </div>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Sign in to use the expense tracker!</p>
              <div className="submit-btn">
                <Button  className="hidden"
                    name={'Sign In'}
                    bPad={'10px 45px'}
                    bRad={'8px'}
                    bg={'#B33F62'}
                    color={'#fff'}
                />
              </div>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register to use the expense tracker!</p>
              <div className="submit-btn">
                <Button className="hidden"
                    name={'Sign Up'}
                    bPad={'10px 45px'}
                    bRad={'8px'}
                    bg={'#B33F62'}
                    color={'#fff'}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </SignUpStyled>
  )
}

const SignUpStyled = styled.div`

`;

// const SignUpStyled = styled.div`
//       * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//       }

//       body {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-direction: column;
//         height: 100vh;
//         width: 100wh;
//         overflow: hidden;
//         margin: 0;
//       }
//       .container {
//         background-color: #fff;
//         border-radius: 30px;
//         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
//         position: relative;
//         overflow: hidden;
//         width: 768px;
//         max-width: 100%;
//         min-height: 480px;
//       }
//       .container p {
//         font-size: 14px;
//         line-height: 20px;
//         letter-spacing: 0.3px;
//         margin: 20px 0;
//       }

//       .container span {
//         font-size: 12px;
//         }

//         .container a {
//           color: #333;
//           font-size: 13px;
//           text-decoration: none;
//           margin: 15px 0 10px;
//         }

//       .container form {
//         background-color: #fff;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-direction: column;
//         padding: 0 40px;
//         height: 100%;
//       }

//       button.hidden {
//         background-color: transparent !important;
//         border-color: #fff;
//       }
//       .submit-btn {
//         font-size: 12px;
//       }

//     .submit-btn button {
//       border: 1px solid transparent;
//       border-radius: 8px;
//       font-weight: 600;
//       letter-spacing: 0.5px;
//       text-transform: uppercase;
//       margin-top: 10px;
//       cursor: pointer;
//       box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//       &:hover{
//         background: #f8c6d7 !important;
//       }

//       }
//       .container input{
//         background-color: #eee;
//         border: none;
//         margin: 8px 0;
//         padding: 10px 15px;
//         font-size: 13px;
//         border-radius: 8px;
//         width: 100;
//         outline: none; 
//       }
//       .form-container{
//         position: absolute;
//         top: 0;
//         height: 100%;
//         transition: all 0.6s ease-in-out;
//       }
//       .sign-in{
//         left: 0;
//         width: 50%
//         z-index: 2;
//       }
//       .container.active .sign-in{
//         left: 0;
//         width: 50%;
//         opacity: 0;
//         z-index: 1;
//       }
//       .container.active .sign-up{
//         transform: translateX(100%);
//         opacity: 1;
//         z-index: 5;
//         animation: move 0.6s;
//     }    
//     @keyframes move{
//       0%, 49.99%{
//           opacity: 0;
//           z-index: 1;
//       }
//       50%, 100%{
//           opacity: 1;
//           z-index: 5;
//       }
//   }
//   .social-icons {
//     display: flex;
//     flex-direction: row; /* Ensures the icons are placed in a row */
//     justify-content: center;
//     align-items: center;
//     gap: 10px; /* Spacing between icons */
//     padding: 20px;
//   }
  

//   .social-icons .icon-box {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 30px; /* Adjust the size */
//     height: 30px;
//     border: 1px solid #ccc; /* Light gray border */
//     border-radius: 12px; /* Rounded corners */
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//     transition: background-color 0.3s ease, box-shadow 0.3s ease;
//   }
  
//   .social-icons .icon-box:hover {
//     background-color: #f8c6d7; /* Cute background color on hover */
//     box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Slightly larger shadow on hover */
//   }
  
//   .social-icons i {
//     font-size: 20px; /* Adjust icon size */
//     color: #333; /* Dark gray icon color */
//   }
//   .toggle-container{
//     position: absolute;
//     top: 0;
//     left: 50%;
//     width: 50%;
//     height: 100%;
//     overflow: hidden;
//     transition: all 0.6s ease-in-out;
//     border-radius: 150px 0 0 100px;
//     z-index: 1000;
// }
// .container.active .toggle-container{
//   transform: translateX(-100%);
//   border-radius: 0 150px 100px 0;
// }

// .toggle{
//   background-color: #512da8;
//   height: 100%;
//   background: linear-gradient(to right, #5c6bc0, #512da8);
//   color: #fff;
//   position: relative;
//   left: -100%;
//   height: 100%;
//   width: 200%;
//   transform: translateX(0);
//   transition: all 0.6s ease-in-out;
// }

// .container.active .toggle{
//   transform: translateX(50%);
// }

// .toggle-panel{
//   position: absolute;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0 30px;
//   text-align: center;
//   top: 0;
//   transform: translateX(0);
//   transition: all 0.6s ease-in-out;
// }

// .toggle-left{
//   transform: translateX(-200%);
// }

// .container.active .toggle-left{
//   transform: translateX(0);
// }

// .toggle-right{
//   right: 0;
//   transform: translateX(0);
// }

// .container.active .toggle-right{
//   transform: translateX(200%);
// }

    


// `;


