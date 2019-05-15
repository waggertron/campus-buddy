module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    'post',
    {
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
      timeLength: DataTypes.NUMBER,
      compensation: DataTypes.BOOLEAN,
      reoccuring: DataTypes.BOOLEAN,
      reoccuringUnit: DataTypes.STRING,
      contact: DataTypes.STRING,
    },
    {}
  );
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};
