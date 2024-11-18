import { Curriculum } from "../../domain/entities/curriculum.js";

const getAll = async () => {
  const curriculums = await Curriculum.findAll();
  return curriculums;
};

export const curriculumRepository = {
  getAll
};