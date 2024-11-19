import { experienceRepository } from "../../infra/repositories/experienceRepository.js";

const experienceService = {
  list: async (curriculumId) => {
    return await experienceRepository.getAll(curriculumId);
  },

  detail: async (experienceId) => {
    return await experienceRepository.getById(experienceId);
  },

  create: async (experience) => {
    return await experienceRepository.save(experience);
  },

  update: async (experienceId, experience) => {
    return await experienceRepository.update(experienceId, experience)
  },

  delete: async (experienceId) => {
    return await experienceRepository.destroy(experienceId);
  }
};

export { experienceService };