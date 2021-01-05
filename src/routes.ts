import { Router } from 'express'

import UsersController from './controllers/UsersController'

const routes = Router()

routes.get('/users', UsersController.index)

export default routes
