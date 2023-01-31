import Person from '@/person'
import * as express from 'express'
import { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send(new Person().sayHello())
})

app.listen(3002, () => console.log('listening server on port 3002!'))
