/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        field: 'id',
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        field: 'email',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password',
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['tour guide', 'tourist'],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at',
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('accounts');
  },
};
