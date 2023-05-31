import express, { Express, Request, Response } from 'express'

const server: Express = express()

server.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!!!!!!!!!!!!')
})

export default server
