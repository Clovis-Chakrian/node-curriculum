import { DataTypes, Model } from "sequelize";
import { sequelizeConn } from "../../infra/database/sequelizeConfig.js";

class Experience extends Model { }

Experience.init(
  {
    experienceId: {
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
    position: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
  },
  { sequelize: sequelizeConn, tableName: 'experiences' }
);

export { Experience };