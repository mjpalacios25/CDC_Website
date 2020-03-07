module.exports = function(sequelize, DataTypes) {
    var Result = sequelize.define("Result", {
        alcohol_score: DataTypes.INTEGER,
        age_score: DataTypes.INTEGER,
        tobacco_score: DataTypes.INTEGER,
        drug_score: DataTypes.INTEGER,
        obesity_score: DataTypes.INTEGER,
        sex_score: DataTypes.INTEGER,
        total_score: DataTypes.INTEGER
    });

    Result.associate = function(models) {
        Result.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Result;
  };

