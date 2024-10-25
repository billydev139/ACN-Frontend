import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = process.env.NEXT_PUBLIC_API_URL



const createRequest = url => ({
  method: 'GET',
  url
})

const createPostRequest = (url, data) => ({
  method: 'POST',
  url,
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})

const createDeleteRequest = (url, data) => ({
  method: 'DELETE',
  url,
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})

const createUpdateRequest = (url, data) => ({
  method: 'PUT',
  url,
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})

const customBaseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    return headers
  }
})


const baseQueryWithHeaders = async (args, api, extraOptions) => {
  const result = await customBaseQuery(args, api, extraOptions)
  if (result.meta && result.meta.response) {
    const headers = {}
    result.meta.response.headers.forEach((value, key) => {
      headers[key] = value
    })
    return { ...result, headers }
  }
  return result
}

export const GlobalApi = createApi({
  reducerPath: 'GlobalApi',
  baseQuery: baseQueryWithHeaders,
  endpoints: builder => ({
    SalesForm: builder.mutation({
      query: data => createPostRequest('/api/sales-contact', data),
      invalidatesTags: ['sales']
    })

  })
})

export const {
useSalesFormMutation
} = GlobalApi