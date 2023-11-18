const express = require('express');
const router = express.Router();
const AI = require('../module/AI');
const prompt_util = require('./prompt_util');

router.post('/plan', async (req, res) => {
    try {
        const { travel_start, travel_end, city_origin, city_destination } = req.body;
        
        let prompt = prompt_util.itinerary_text(travel_start, travel_end, city_origin, city_destination);

        const respostaAI = await AI(prompt);

        res.status(200).json({ status: "200" ,message: `${respostaAI}` });
    } catch (error) {
        res.status(500).json({ status: "400", error: error.message });
    }
});

module.exports = router;
