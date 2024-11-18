import { Curriculum } from "../../domain/entities/curriculum.js";
import { Education } from "../../domain/entities/education.js";
import { Experience } from "../../domain/entities/experience.js";

Education.belongsTo(Curriculum, {
  foreignKey: "curriculumId",
});

Experience.belongsTo(Curriculum, {
  foreignKey: 'curriculumId'
})

Curriculum.hasMany(Education, {
  foreignKey: "curriculumId",
});

Curriculum.hasMany(Experience, {
  foreignKey: "curriculumId",
});