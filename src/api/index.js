import { Router } from "express";
import { curriculumController } from "./controllers/curriculumController.js";

const routes = Router();

routes.use('/api/curriculum', curriculumController);

export { routes };