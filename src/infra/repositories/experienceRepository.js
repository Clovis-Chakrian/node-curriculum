import { Experience } from "../../domain/entities/experience.js";

const getAll = async (curriculumId) => {
  const experiences = await Experience.findAll({
    where: {
      curriculumId
    }
  });

  return experiences;
};

const getById = async (experienceId) => {
  const experience = await Experience.findByPk(experienceId);

  return experience;
};

const save = async (experience) => {
  const savedExperience = await Experience.create(experience);

  await savedExperience.save();

  return savedExperience;
};

const update = async (experienceId, experience) => {
  const experienceUpdated = await Experience.findByPk(experienceId);
  await experienceUpdated.update(
    {
      ...experience,
      experienceId
    }
  );

  await experienceUpdated.save();

  return experienceUpdated;
};

const destroy = async (experienceId) => {
  const experience = await Experience.findByPk(experienceId);

  await experience.destroy();
};

export const experienceRepository = {
  getAll,
  getById,
  save,
  update,
  destroy
};