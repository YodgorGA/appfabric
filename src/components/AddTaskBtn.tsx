import React,{FC, useState} from 'react'
import styled from '@emotion/styled'
import { useAppDispatch } from '@/model/hooks'
import { addTodo } from '@/model/todoSlice'


interface AddTaskBtnProps{
    
}

    
export const AddTaskBtn:FC<AddTaskBtnProps> = ({...AddTaskBtnProps}) => {
    //это будет хранить значение из инпута
    const [value,setValue] = useState<string>('')
    const dispatch = useAppDispatch();
    //обработка нажатия на кнопку добавления таска
    const addTodoClickHandler = () =>{
        //проверка на пустое значение в названии, что-бы не содавать пустые записи
        if(value !== ''){
            //и патчим его в стор
            dispatch(addTodo(value))
            //обнуляем значение из инпута
            setValue('')
        }
    }
    const inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        //меняем значение value при вводе данных
        setValue(event.currentTarget.value)
    }
    return (
        <StyledAddTaskBtn {...AddTaskBtnProps}>
            <Icon onClick={addTodoClickHandler}/>
            <TextContainer onChange={inputChangeHandler} value={value} placeholder='Type something...'></TextContainer>
        </StyledAddTaskBtn>
    )
}
    
const StyledAddTaskBtn = styled.div<AddTaskBtnProps>`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;
    font-size:24px;
    height:42px;
`
const Icon = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('/plus.svg');
    background-repeat:no-repeat;
    background-size:contain;
`

const TextContainer = styled.input`
    box-sizing:border-box;
    margin-left:10px;
    height:42px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:transparent;
    border:none;
`
export {}