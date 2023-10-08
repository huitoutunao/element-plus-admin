import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/postTest',
    method: 'post',
    timeout: 2000,
    response: ({ body }) => {
      console.log('body>>>>>>>>', body)
      return {
        code: 0,
        message: 'ok',
        'data|1-10': [
          {
            'id|+1': 1,
          },
        ],
      }
    },
  },
] as MockMethod[]
