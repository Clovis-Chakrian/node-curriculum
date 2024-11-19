import { Router } from "express";
import { curriculumService } from "../../application/services/curriculumService.js";

const curriculumController = Router();

curriculumController.get('/', async (req, res, next) => {
  try {
    const curriculums = await curriculumService.list();
    res.status(200).json(curriculums);
  } catch (error) {
    next(error)
  }
});

curriculumController.get('/:curriculumId', async (req, res, next) => {
  try {
    const curriculums = await curriculumService.detail(req.params.curriculumId);
    res.status(200).json(curriculums);
  } catch (error) {
    next(error);
  }
});

curriculumController.post('/', async (req, res, next) => {
  try {
    const curriculum = req.body;

    const curriculumSaved = await curriculumService.create(curriculum);
    res.status(201).json(curriculumSaved);
  } catch (error) {
    next(error)
  }
});

curriculumController.put('/:curriculumId', async (req, res, next) => {
  try {
    const curriculum = req.body;

    const curriculumUpdated = await curriculumService.update(req.params.curriculumId, curriculum);
    res.status(200).json(curriculumUpdated);
  } catch (error) {
    next(error)
  }
});

curriculumController.delete('/:curriculumId', async (req, res, next) => {
  try {
    await curriculumService.delete(req.params.curriculumId);

    res.status(200).json();
  } catch (error) {
    next(error);
  }
});

export { curriculumController };