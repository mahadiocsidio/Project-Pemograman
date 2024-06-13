/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        field: 'id',
      },
      packageId: {
        allowNull: false,
        type: Sequelize.UUID,
        field: 'package_id',
      },
      touristId: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'tourist_id',
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['menunggu', 'terkonfirmasi', 'ditolak', 'selesai'],
        field: 'status',
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'start_date',
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'end_date',
      },
      totalPerson: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_person',
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_price',
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

    await queryInterface.addConstraint('transactions', {
      fields: ['package_id'],
      type: 'foreign key',
      name: 'fk_transaction_package_id',
      references: {
        table: 'packages',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('transactions', {
      fields: ['tourist_id'],
      type: 'foreign key',
      name: 'fk_transaction_tourist_id',
      references: {
        table: 'users',
        field: 'username',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },
  async down(queryInterface) {
    await queryInterface.removeConstraint(
      'transactions',
      'fk_transaction_package_id',
    );

    await queryInterface.removeConstraint(
      'transactions',
      'fk_transaction_tourist_id',
    );

    await queryInterface.dropTable('transactions');
  },
};
