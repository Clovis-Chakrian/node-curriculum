import { DataTypes, Model } from "sequelize";
import { sequelizeConn } from "../../infra/database/sequelizeConfig.js";

class Education extends Model { }

Education.init(
  {
    educationId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    begined: {
      type: DataTypes.DATE
    },
    fineshed: {
      type: DataTypes.DATE
    },
    institution: {
      type: DataTypes.STRING
    },
    courseName: {
      type: DataTypes.STRING
    },
  },
  { sequelize: sequelizeConn, tableName: 'educations' }
);

export { Education };