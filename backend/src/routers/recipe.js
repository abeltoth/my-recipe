const express = require('express');
const { getRecipe } = require('../utils/recipe');

const router = new express.Router();

router.get('/recipe', async (req, res) => {

    if (!req.query.query) {
        res.status(400).send({ error: 'Please provide a valid search term!' });
    }

    try {
        const recipe = await getRecipe(req.query.query, req.query.from, req.query.to);
        res.send(recipe);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
});

module.exports = router;