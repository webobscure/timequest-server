// seeders/20250129000000-demo-exercises.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('exercises', [
      {
        title: 'Exercise 1',
        coverImage: 'coverImage1.jpg',
        openImage: 'openImage1.jpg',
        content: 'Content of exercise 1',
        audioUrl: 'audio1.mp3',
        category: 'Category 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Exercise 2',
        coverImage: 'coverImage2.jpg',
        openImage: 'openImage2.jpg',
        content: 'Content of exercise 2',
        audioUrl: 'audio2.mp3',
        category: 'Category 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises', null, {});
  }
};