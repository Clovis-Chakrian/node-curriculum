import { educationRepository } from "../../infra/repositories/educationRepository.js";

const educationService = {
  list: async (curriculumId) => {
    return await educationRepository.getAll(curriculumId);
  },

  detail: async (educationId) => {
    return await educationRepository.getById(educationId);
  },

  create: async (education) => {
    return await educationRepository.save(education);
  },

  update: async (educationId, education) => {
    return await educationRepository.update(educationId, education)
  },

  delete: async (educationId) => {
    return await educationRepository.destroy(educationId);
  }
};

export { educationService };