async function tempo(request, response) {
    const dynamicDate = new Date();

    const temperaturaAtual = await fetch("https://api.hgbrasil.com/weather?key=53fc40c6&city_name=Portão,RS");
    const temperaturaAtualJson = await temperaturaAtual.json();
    const temperatura = temperaturaAtualJson.results.temp;

    response.json({
        date: dynamicDate.toUTCString(),
        temperatura: temperatura

    });
}

export default tempo;
