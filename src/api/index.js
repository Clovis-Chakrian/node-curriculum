import { Router } from "express";
import { curriculumController } from "./controllers/curriculumController.js";
import { educationController } from "./controllers/educationController.js";
import { experienceController } from "./controllers/experienceController.js";

const routes = Router();

routes.use('/api/curriculums', curriculumController);
routes.use('/api', educationController);
routes.use('/api', experienceController);

export { routes };