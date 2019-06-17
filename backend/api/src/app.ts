import 'reflect-metadata'
import { createKoaServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import '@/controllers'
import '@/services'


useContainer(Container)

const app = createKoaServer()

export default app.callback()
