import { Router } from "express";
import { educationService } from "../../application/services/educationService.js";

const educationController = Router();

educationController.get('/curriculums/:curriculumId/educations', async (req, res, next) => {
  try {
    const educations = await educationService.list(req.params.curriculumId);
    res.status(200).json(educations);      
  } catch (error) {
    next(error)
  }
});

educationController.get('/curriculums/:curriculumId/educations/:educationId', async (req, res, next) => {
  try {
    const educations = await educationService.detail(req.params.educationId);
    res.status(200).json(educations);      
  } catch (error) {
    next(error)
  }
});

educationController.post('/curriculums/:curriculumId/educations', async (req, res, next) => {
  try {
    const education = {
      ...req.body,
      curriculumId: req.params.curriculumId
    };
  
    const educationSaved = await educationService.create(education);
    res.status(201).json(educationSaved);      
  } catch (error) {
    next(error)
  }
});

educationController.put('/curriculums/:curriculumId/educations/:educationId', async (req, res, next) => {
  try {
    const education = req.body;
  
    const educationUpdated = await educationService.update(req.params.educationId, education);
    res.status(200).json(educationUpdated);      
  } catch (error) {
    next(error)
  }
});

educationController.delete('/curriculums/:curriculumId/educations/:educationId', async (req, res, next) => {  
  try {
    await educationService.delete(req.params.educationId);

    res.status(200).json();      
  } catch (error) {
    next(error);
  }
});

export { educationController };