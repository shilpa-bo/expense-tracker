import { Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Orb from './Components/Orb/Orb'
import Navigation from "./Components/Navigation/Navigation";
import React, { useEffect, useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import SignUp from './Components/SignUp/SignUp';
import { useLocation } from 'react-router-dom';

// what router ?? 

function App() {
  const [active, setActive] = useState(1)  
  const location = useLocation();
  console.log(location.pathname)

  useEffect (() => {
    switch(location.pathname){
      case '/dashboard':
        setActive(1);
        break;
      case '/view-transactions':
        setActive(2);
        break;
      case '/incomes':
        setActive(3);
        break;
      case '/expenses':
        setActive(4);
        break;
      default:
        setActive(1);
        break;
    }}, [location] )
  const orbMemo = useMemo(() => {
    return <Orb/>
  }, []);
  return (
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/expenses" element={<Expenses />} />
            </Routes>
          </main>
        </MainLayout>
      </AppStyled>
  );
}
const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
    
    main{
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
  `;
export default App;
