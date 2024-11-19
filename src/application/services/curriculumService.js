import { curriculumRepository } from "../../infra/repositories/curriculumRepository.js";

const curriculumService = {
  list: async () => {
    return await curriculumRepository.getAll();
  },

  detail: async (curriculumId) => {
    return await curriculumRepository.getById(curriculumId);
  },

  create: async (curriculum) => {
    return await curriculumRepository.save(curriculum);
  },

  update: async (curriculumId, curriculum) => {
    return await curriculumRepository.update(curriculumId, curriculum)
  },

  delete: async (curriculumId) => {
    return await curriculumRepository.destroy(curriculumId);
  }
};

export { curriculumService };