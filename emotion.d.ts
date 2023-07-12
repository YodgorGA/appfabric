import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    light:{
      labelText:string,
      todoText:string,
      filterParamText:string,
      main:string,
      activeFilterParam:string,
      completedCheckbox:string,
      uncompletedCheckbox:string,
    },
    dark:{
      labelText:string,
      todoText:string,
      filterParamText:string,
      main:string,
      activeFilterParam:string,
      completedCheckbox:string,
      uncompletedCheckbox:string,
    }
  }
}
