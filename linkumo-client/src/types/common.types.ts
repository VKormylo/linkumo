export type Variant = 'filled' | 'outlined'
export type Color = 'primary' | 'secondary' | 'tertiary'
export type Size = 'small' | 'medium' | 'large'
export type Position = 'bottom' | 'top' | 'left' | 'right'

export type TailwindStyles = React.ComponentProps<'div'>['className']

export type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export type ResponseStatus = 'success' | 'error'

export interface RequestParams {
  data?: unknown
  method: HTTPMethod
  url: string
}

export interface ErrorResponse {
  code: number
  status: ResponseStatus
  message: string
}
