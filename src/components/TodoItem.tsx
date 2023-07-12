import React,{FC} from 'react'
import styled from '@emotion/styled'
import { ITodo } from '@/model/interfaces'
import { useAppDispatch } from '@/model/hooks'
import { removeTodo, setTodoStatus } from '@/model/todoSlice'
import { colors } from '@/styles/colors'

interface ICheckbox{
    completed:boolean
}
    
export const TodoItem:FC<ITodo> = ({id,description,completed,...TodoItemProps}) => {
    const dispatch = useAppDispatch()
    // обработчик клика на чекбокс
    const toggleComplete = () =>{
        //меняем значение чекбокса на противоположное при нажатии
        dispatch(setTodoStatus({
            completed:!completed,
            id:id
        }))
    }
    //обработчик кнопки удаления таска
    const deleteTodo = () =>{
        dispatch(removeTodo(id))
    }
    return (
        <StyledTodoItem id={id} description={description} completed={completed} {...TodoItemProps}>
            <CheckBox onClick={toggleComplete} completed={completed}/>
            <Content>
                {description}
                <Bin onClick={deleteTodo}/>
            </Content>
        </StyledTodoItem>
    )
}
    
const StyledTodoItem = styled.div<ITodo>`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;
    font-size:24px;
    height:42px;
`
const CheckBox = styled.div<ICheckbox>`
    width: 26px;
    height:26px;
    background-color:${({completed})=>completed == true? "#5d854d":"#FFF1F1"};
    margin-left:5px;
    border-radius:5px;
`;
const Content = styled.div`
    box-sizing:border-box;
    width:100%;
    margin-left:10px;
    height:42px;
    display:flex;
    padding-top:5px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const Bin = styled.div`
    height: 30px;
    width: 30px;
    background-size:contain;
    background-image: url('/bin.svg');
    background-repeat:no-repeat;
`

export {}