import { Education } from "../../domain/entities/education.js";

const getAll = async (curriculumId) => {
  const educations = await Education.findAll({
    where: {
      curriculumId
    }
  });

  return educations;
};

const getById = async (educationId) => {
  const education = await Education.findByPk(educationId);

  return education;
};

const save = async (education) => {
  const savedEducation = await Education.create(education);

  await savedEducation.save();

  return savedEducation;
};

const update = async (educationId, education) => {
  const educationUpdated = await Education.findByPk(educationId);
  await educationUpdated.update(
    {
      ...education,
      educationId
    }
  );

  await educationUpdated.save();

  return educationUpdated;
};

const destroy = async (educationId) => {
  const education = await Education.findByPk(educationId);

  await education.destroy();
};

export const educationRepository = {
  getAll,
  getById,
  save,
  update,
  destroy
};