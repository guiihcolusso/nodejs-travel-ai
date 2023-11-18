require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OpenIA_KEY,
});
const openai = new OpenAIApi(configuration);

async function IA(conteudo) {
    try {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${conteudo}` }],
        });

        const texto = chatCompletion.data.choices[0].message.content;
        const regex = /(ChatGPT|OpenAI)/g;
        const novoTexto = texto.replace(regex, "A.I_Travel");
        return novoTexto;

    } catch (error) {
        console.error("Error:", error.message);
        return "Ocorreu um erro ao consultar a API.";
    }
}

module.exports = IA;
