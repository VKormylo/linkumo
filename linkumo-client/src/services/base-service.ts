import { isAxiosError, type AxiosResponse } from 'axios'

import { axiosClient } from '~/plugins/axiosClient'

import type {
  ErrorResponse,
  RequestParams,
  ResponseStatus
} from '~/types/common.types'

import { ResponseError } from '~/exceptions/response-error'

interface APIResponse<T> {
  status: ResponseStatus
  data: T
}

export const baseService = {
  request: async <T = unknown>({ data, method, url }: RequestParams) => {
    try {
      const response = (await axiosClient.request<T>({
        data,
        method,
        url
      })) as AxiosResponse<APIResponse<T>>

      return response.data.data
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const serverError = error.response.data as ErrorResponse

        throw new ResponseError(serverError)
      }

      throw new ResponseError({ code: 500, message: 'UNKNOWN_ERROR' })
    }
  }
}
