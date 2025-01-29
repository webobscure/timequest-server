'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      title: 'Египет',
      description: 'История Древнего Египта...',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    const articles = await queryInterface.sequelize.query(
      `SELECT id FROM "Articles" WHERE title='Египет';`
    );

    const articleId = articles[0][0].id;

    await queryInterface.bulkInsert('Sections', [{
      articleId,
      title: 'Ранние этапы',
      content: 'В 6–5 тысячелетии до н. э. ...',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    const sections = await queryInterface.sequelize.query(
      `SELECT id FROM "Sections" WHERE title='Ранние этапы';`
    );

    const sectionId = sections[0][0].id;

    await queryInterface.bulkInsert('Subsections', [{
      sectionId,
      title: 'Великая пирамида Хеопса',
      content: 'Великая пирамида Хеопса...',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subsections', null, {});
    await queryInterface.bulkDelete('Sections', null, {});
    await queryInterface.bulkDelete('Articles', null, {});
  }
};