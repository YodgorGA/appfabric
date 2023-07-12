import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


export interface filterState {
  filter: 'all'|'completed'|'uncompleted',
}


const initialState: filterState = {
  filter: 'all'
}

export const filterSlice = createSlice({
  name: 'filter',
  
  initialState,
  reducers: {
   
    setFilterParam: (state, action: PayloadAction<'all'|'completed'|'uncompleted'>) => {
      state.filter = action.payload
    }
  }
})

export const { setFilterParam }  = filterSlice.actions


export const selectFilterParam = (state: RootState) => state.filter

export default filterSlice.reducer