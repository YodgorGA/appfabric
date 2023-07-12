import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { ITodo } from './interfaces'
import uuid from 'react-uuid';

//инициализируем редьюсер со значением:
const initialState = [] as ITodo[];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //функция создания тудушки
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        //фактически пушим новую в массив
        state.push(action.payload);
      },// предварительно подготовив её, записываем, передаём туда значение и ставим completed:false
      prepare: (description: string) => ({
        payload: {
          id: uuid(),
          description,
          completed: false,
        } as ITodo,
      }),
    },
    //функция удаления тудушки
    removeTodo: (state,action:PayloadAction<string>) =>{
      //находим её по индексу
      const index = state.findIndex((todo) => todo.id === action.payload);
      //и удаляем
      state.splice(index, 1);
    },
    //функция изменения состояния тудушки 
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      //находим конкретную по индексу и ПЕРЕЗАПИСЫВАЕМ её статус
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    
  }
})
//экспорт экшенов
export const {addTodo,removeTodo,setTodoStatus} = todoSlice.actions;
//экспорт состояния
export const selectTodos = (state: RootState) => state.todos

export default todoSlice.reducer