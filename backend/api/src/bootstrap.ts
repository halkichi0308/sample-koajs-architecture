import http from 'http'
import app from './app'


http
  .createServer(app)
  .listen(3000, () => {
    console.log('Server running http://localhost:3000')
  })
