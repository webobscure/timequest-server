const express = require('express');
const router = express.Router();
const { Article, Section, Subsection } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: {
        model: Section,
        include: Subsection
      }
    });

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;