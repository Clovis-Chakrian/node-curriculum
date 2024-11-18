/*
public List<ListCurriculumDto> list();
    public DetailCurriculumDto detail(UUID curriculumId) throws ElementNotFoundException;
    public DetailCurriculumDto create(NewCurriculumDto newCurriculumDto);
    public DetailCurriculumDto update(UUID curriculumId, UpdatedCurriculumDto updatedCurriculumDto) throws ElementNotFoundException;
    public void delete(UUID curriculumId);
*/

import { curriculumRepository } from "../../infra/repositories/curriculumRepository.js";

const curriculumService = {
  list: async () => {
    return await curriculumRepository.getAll();
  },

  detail: (curriculumId) => {

  },

  create: (newCurriculumDto) => {

  },

  update: (curriculumId, updatedCurriculumDto) => {

  },

  delete: (curriculumId) => {

  }
};

export { curriculumService };