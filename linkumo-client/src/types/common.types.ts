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
