import { DataTypes, Model } from "sequelize";
import { sequelizeConn } from "../../infra/database/sequelizeConfig.js";

class Curriculum extends Model { }

Curriculum.init(
  {
    curriculumId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    curriculumNick: {
      type: DataTypes.STRING,
      unique: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },

    position: {
      type: DataTypes.STRING
    },
    presentation: {
      type: DataTypes.STRING
    }
  },
  { sequelize: sequelizeConn, modelName: 'curriculums' }
);

export { Curriculum };