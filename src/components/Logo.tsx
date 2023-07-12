import React,{FC} from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'

interface LogoProps{
    
}

    
export const Logo:FC<LogoProps> = ({...LogoProps}) => {
    
    return (
        <StyledLogo {...LogoProps}>
            <Icon/>
            <LogoText>TO-DO's</LogoText>
        </StyledLogo>
    )
}
    
const StyledLogo = styled.div<LogoProps>`
    width:100%;
    height:135px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding: 0px 30px;
    box-sizing:border-box;
`

const Icon = styled.div`
    width:46px;
    height:52px;
    @media (max-width:1575px){
        width:35px;
        height:40px;
    }
    background-color:transparent;
    background-image: url('/Icon.png');
    background-size:contain;
    background-repeat:no-repeat;
`

const LogoText = styled.div`
    width:170px;
    height:60px;
    color:${colors.greenText};
    font-size:40px;
    font-weight:600;
    line-height: 171%;
    @media (max-width:1575px){
        font-size:32px;
        font-weight:500;
        margin-top:10px;
        margin-left:10px;
    }
`
export {}