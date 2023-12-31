interface Theme {
    light:{
      labelText:string,
      todoText:string,
      filterParamText:string,
      main:string,
      activeFilterParam:string,
      defaultFilterParam:string,
      completedCheckbox:string,
      uncompletedCheckbox:string,
    },
    dark:{
      labelText:string,
      todoText:string,
      filterParamText:string,
      main:string,
      activeFilterParam:string,
      defaultFilterParam:string,
      completedCheckbox:string,
      uncompletedCheckbox:string,
    }
  }
export const theme:Theme = {
    light:{
        labelText:'#34574A',
        todoText:'#0D5329',
        filterParamText:'#5B5B5B',
        main:'#DBEADD',
        activeFilterParam:'#D9D9D9',
        defaultFilterParam:'#C4DCD3',
        completedCheckbox:'#5d854d',
        uncompletedCheckbox:'#FFF1F1',
    },
    dark:{
        labelText:'dark',
        todoText:'dark',
        filterParamText:'dark',
        main:'dark',
        activeFilterParam:'dark',
        defaultFilterParam:'dark',
        completedCheckbox:'dark',
        uncompletedCheckbox:'dark',
    }
}