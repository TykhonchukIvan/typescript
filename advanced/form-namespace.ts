namespace FormNameSpace {
  export type FormType = 'inline' | 'block'
  export type FormSate = 'active' | 'disabled'

  export interface FormInfo {
    type: FormType
    state: FormType
  }
}