// What do we need to require here?

// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
}

User.init(
  {
  //  What needs to go in the User expression here?
  },
  {
    hooks: {
      // How do we set up the hook functionality?
    
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;
