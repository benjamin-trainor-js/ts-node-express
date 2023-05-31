import server from './server'

const port = 3000

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
