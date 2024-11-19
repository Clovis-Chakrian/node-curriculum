import { Router } from "express";
import { experienceService } from "../../application/services/experienceService.js";

const experienceController = Router();

experienceController.get('/curriculums/:curriculumId/experiences', async (req, res, next) => {
  try {
    const experiences = await experienceService.list(req.params.curriculumId);
    res.status(200).json(experiences);      
  } catch (error) {
    next(error)
  }
});

experienceController.get('/curriculums/:curriculumId/experiences/:experienceId', async (req, res, next) => {
  try {
    const experiences = await experienceService.detail(req.params.experienceId);
    res.status(200).json(experiences);      
  } catch (error) {
    next(error)
  }
});

experienceController.post('/curriculums/:curriculumId/experiences', async (req, res, next) => {
  try {
    const experience = {
      ...req.body,
      curriculumId: req.params.curriculumId
    };
  
    const experienceSaved = await experienceService.create(experience);
    res.status(201).json(experienceSaved);
  } catch (error) {
    next(error)
  }
});

experienceController.put('/curriculums/:curriculumId/experiences/:experienceId', async (req, res, next) => {
  try {
    const experience = req.body;
  
    const experienceUpdated = await experienceService.update(req.params.experienceId, experience);
    res.status(200).json(experienceUpdated);      
  } catch (error) {
    next(error);
  }
});

experienceController.delete('/curriculums/:curriculumId/experiences/:experienceId', async (req, res, next) => {  
  try {
    await experienceService.delete(req.params.experienceId);

    res.status(200).json();      
  } catch (error) {
    next(error);
  }
});

export { experienceController };