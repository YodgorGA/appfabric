import React,{FC} from 'react'
import styled from '@emotion/styled'

interface FilterParamContainerProps{
    //получаем пропсами набор компонентов, которые будут менять фильтрацию
    filterParamItems:React.ReactElement[];
}

    
export const FilterParamContainer:FC<FilterParamContainerProps> = ({filterParamItems,...FilterParamContainerProps}) => {
    
    return (
        <StyledFilterParamContainer filterParamItems={filterParamItems}{...FilterParamContainerProps}>
            {/*и разворачиваем их сюда*/}
            {filterParamItems}
        </StyledFilterParamContainer>
    )
}
    
const StyledFilterParamContainer = styled.div<FilterParamContainerProps>`
    width:100%;
    height: 200px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
export {}