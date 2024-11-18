import { Router } from "express";
import { curriculumService } from "../../application/services/curriculumService.js";

const curriculumController = Router();

/**
 * @swagger
 * /api/curriculum:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
curriculumController.get('/', async (req, res) => {
  const curriculums = await curriculumService.list();
  res.json({curriculums})
});

export { curriculumController };