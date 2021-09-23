async function tempo(request, response) {
    const dynamicDate = new Date();

    const temperaturaAtual = await fetch("https://api.hgbrasil.com/weather?key=53fc40c6&city_name=Portão,RS");
    const temperaturaAtual = await temperaturaAtual.json();
    const temperatura = temperaturaAtual.results.temp;

    response.json({
        date: dynamicDate.toUTCString(),
        temperatura: temperatura

    });
}

export default tempo;
