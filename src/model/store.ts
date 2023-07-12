import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import filterSlice from './filterSlice'


export const store = configureStore({
  reducer: {
    todos:todoSlice,
    filter:filterSlice,
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch