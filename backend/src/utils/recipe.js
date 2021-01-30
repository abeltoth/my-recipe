const got = require('got');

const getRecipe = async (query, from = 0, to = 10) => {

    if (!query) {
        throw new Error('Please provide a valid search term!');
    }

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.RECIPE_SEARCH_APP_ID}&app_key=${process.env.RECIPE_SEARCH_APP_KEY}&from=${from}&to=${to}`;

    try {
        const response = await got(url);
        return response.body;
    } catch (error) {
        console.log(error.response.body);
    }

}

module.exports = { getRecipe };