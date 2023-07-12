import React,{FC} from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import { useAppDispatch } from '@/model/hooks'
import { setFilterParam } from '@/model/filterSlice'

interface FilterParamItemProps{
    content:string,
    //запрашиваем имя конкретного элемента управления
    sectionName:'all'|'completed'|'uncompleted',
    //запрашиваем название текущего параметра фильтрации
    activeSectionName:'all'|'completed'|'uncompleted',
}


    
export const FilterParamItem:FC<FilterParamItemProps> = ({activeSectionName,sectionName,content,...FilterParamItemProps}) => {
    const dispatch = useAppDispatch();
    //обрабатываем нажатие на элемент управления
    const clickHandler = (e:React.MouseEvent<HTMLDivElement,MouseEvent>) =>{
        //передаем в функцию для установки параметров фильтрации название кликнутого элемента
        dispatch(setFilterParam(sectionName))
    }
    
    return (
        <StyledFilterParamItem activeSectionName={activeSectionName} onClick={clickHandler} sectionName={sectionName} content={content} {...FilterParamItemProps}>
            <ItemTextConitaner>{content}</ItemTextConitaner>
        </StyledFilterParamItem>
    )
}
    
const StyledFilterParamItem = styled.div<FilterParamItemProps>`
    width:100%;
    height: 50px;
    background-color:${({activeSectionName,sectionName})=>activeSectionName == sectionName? colors.grayBlock:colors.darkGreen};
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    box-sizing:border-box;
    align-items:center;
    padding:0px 25px;
    border-radius:0px 10px 10px 0px;
    
`
const ItemTextConitaner = styled.div`
    font-size: 26px;
    font-weight: 400;
    color:${colors.grayText};
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:6px;
    margin-left:10px;
    box-sizing:border-box;

`

export {}