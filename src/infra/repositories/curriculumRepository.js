import { Curriculum } from "../../domain/entities/curriculum.js";

const getAll = async () => {
  const curriculums = await Curriculum.findAll();

  return curriculums;
};

const getById = async (curriculumId) => {
  const curriculum = await Curriculum.findByPk(curriculumId);

  return curriculum;
};

const save = async (curriculum) => {
  const savedCurriculum = await Curriculum.create(curriculum);

  await savedCurriculum.save();

  return savedCurriculum;
};

const update = async (curriculumId, curriculum) => {
  const curriculumUpdated = await Curriculum.findByPk(curriculumId);
  await curriculumUpdated.update(
    {
      ...curriculum,
      curriculumId
    }
  );

  await curriculumUpdated.save();

  return curriculumUpdated;
};

const destroy = async (curriculumId) => {
  const curriculum = await Curriculum.findByPk(curriculumId);

  await curriculum.destroy();
};

export const curriculumRepository = {
  getAll,
  getById,
  save,
  update,
  destroy
};