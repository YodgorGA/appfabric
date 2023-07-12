import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import { AddTaskBtn } from './AddTaskBtn'
import { TodoItem } from './TodoItem'
import { useAppSelector } from '@/model/hooks'
import { selectTodos } from '@/model/todoSlice'
import { ITodo } from '@/model/interfaces'
import { selectFilterParam } from '@/model/filterSlice'

interface TodoItemContainerProps{

}

export const TodoItemContainer:FC<TodoItemContainerProps> = ({...TodoItemContainerProps}) => {
    //получаем все тудушки
    const todosSelector = useAppSelector(selectTodos);
    //получаем параметры фильрации
    const filterSelector = useAppSelector(selectFilterParam);
    //записываем завершенные таски 
    const completedItems = todosSelector.filter(item=>item.completed==true);
    //записываем незавершенные таски
    const uncomplitedItems = todosSelector.filter(item=>item.completed==false);

    return (
        <StyledTodoItemContainer {...TodoItemContainerProps}>
            <Title>
                {
                    //меняем название в зависимости от параметров фильтрации
                    filterSelector.filter=='all' && 'All tasks'
                    ||filterSelector.filter == 'completed' && 'Completed'
                    ||filterSelector.filter == 'uncompleted' && 'Uncompleted'
                }
            </Title>
            <Content>
                {   
                    //рендерим все такси, т.к значение фильра -- 'all'
                    filterSelector.filter == 'all' && todosSelector.map((todo:ITodo)=>{
                        return (
                            <TodoItem
                            key={Math.random()}
                            id={todo.id}
                            completed={todo.completed}
                            description={todo.description}
                            />
                        )  
                    })
                    //рендерим только завершенные такси, т.к значение фильра -- 'completed'
                    || filterSelector.filter == 'completed' && completedItems.map((todo:ITodo)=>{
                        return (
                            <TodoItem
                            key={Math.random()}
                            id={todo.id}
                            completed={todo.completed}
                            description={todo.description}
                            />
                        )  
                    })
                    //рендерим только не заверешненные такси, т.к значение фильра -- 'uncompleted'
                    || filterSelector.filter == 'uncompleted' && uncomplitedItems.map((todo:ITodo)=>{
                        return (
                            <TodoItem
                            key={Math.random()}
                            id={todo.id}
                            completed={todo.completed}
                            description={todo.description}
                            />
                        )  
                    })
                    
                    
                }
                <AddTaskBtn/>
            </Content>
        </StyledTodoItemContainer>
    )
}
    
const StyledTodoItemContainer = styled.div<TodoItemContainerProps>`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    width:1140px;
    height:100%;
    @media (max-width:1575px){
        width:1090px;
    }
`
const Title = styled.label`
  font-size:32px;
  font-weight:500;
  line-height:171%;
  width:100%;
  height:135px;
  padding:40px 10px 10px 10px;
  box-sizing:border-box;
  color: ${colors.greenText};
  display:flex;
  flex-direction:row;
  justify-content:center;
`

const Content = styled.div`
    width:100%;
    height:100%;
    padding:20px;
    box-sizing:border-box;

    color:${colors.logoText}
`
export {}