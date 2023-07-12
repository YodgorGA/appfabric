import React,{FC, useState} from 'react'
import styled from '@emotion/styled'
import { Logo } from './Logo'
import { FilterParamContainer } from './FilterParamContainer'
import { FilterParamItem } from './FilterParamItem'
import { useAppSelector } from '@/model/hooks'
import { selectFilterParam } from '@/model/filterSlice'

interface AsideProps{

}

    
export const Aside:FC<AsideProps> = ({...AsideProps}) => {
    //получаем данные по фильтрации
    const filterSelector = useAppSelector(selectFilterParam);
    return (
        <StyledAside  {...AsideProps}>
            <Logo/>
            {/*Компонент-контейнер параметров фильтрации принимает пропсом набор параметров, точнее компоненты выбора*/}
            <FilterParamContainer 
            filterParamItems={[
                <FilterParamItem  sectionName={'all'} activeSectionName={filterSelector.filter} key={Math.random()} content='All tasks' />,
                <FilterParamItem  sectionName={'completed'} activeSectionName={filterSelector.filter} key={Math.random()} content='Completed'/>,
                <FilterParamItem  sectionName={'uncompleted'} activeSectionName={filterSelector.filter} key={Math.random()} content='Uncomplited'/>
            ]}
            />
            
        </StyledAside>
    )
}
    
const StyledAside = styled.aside<AsideProps>`
    width:300px;
    @media (max-width:1575px){
        width:250px;
    }
    height:100%;
    border-right: 1px solid #b6b2b2;
    border-radius: 20px 0px 0px 20px;
`
const toggleTheme = styled.div`
    width:100px;
    height:40px;
    border-radius:20px;
    
`
export {}