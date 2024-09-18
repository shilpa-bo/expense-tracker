import React from 'react'
import styled, {keyframes} from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';
export default function Orb() {
    
    const {width, height} = useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width/1.5}px, ${height/1.5}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-right: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2004A 100%);
        filter: blur(800px);
        animation: ${moveOrb} 5s alternate linear infinite;
    `;
    return (
        <OrbStyled>

        </OrbStyled>
    );
}
