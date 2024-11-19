import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { routes } from './src/api/index.js';
import { swaggerOptions } from './src/infra/docs/swaggerConfig.js';
import { sequelizeConn } from './src/infra/database/sequelizeConfig.js';
import './src/infra/database/relationshipConfig.js';
import { exceptionHandler } from './src/api/middlewares/exceptionHandler.js';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors())
app.use(express.json());
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);
app.use(exceptionHandler)

sequelizeConn.sync({ force: process.env.ERASE_DATABASE_ON_SYNC }).then(async () => {
  app.listen(port, () => {
    console.log(`The app are listen at port ${port}`);
    console.log(`You can access the app from http://localhost:${port}`);
    console.log(`Docs can be found under http://localhost:${port}/api/docs`);
  })
});