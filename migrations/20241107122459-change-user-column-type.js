'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(
            'ALTER TABLE "tokens" ALTER COLUMN "user" TYPE INTEGER USING "user"::integer;'
        );
    },
    down: async (queryInterface, Sequelize) => {
        // Обратное преобразование в строку, если потребуется откатить миграцию
        await queryInterface.sequelize.query(
            'ALTER TABLE "tokens" ALTER COLUMN "user" TYPE VARCHAR USING "user"::varchar;'
        );
    }
};
