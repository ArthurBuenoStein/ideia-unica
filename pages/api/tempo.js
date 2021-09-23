async function tempo(request, response) {
    const dynamicDate = new Date();

    const temperaturaAtual = await fetch("https://api.hgbrasil.com/weather?key=53fc40c6&city_name=Port%C3%A3o,RS");
    const temperaturaAtualJson = await temperaturaAtual.json();
    const temperatura = temperaturaAtualJson.results.temp;
    const local = temperaturaAtualJson.results.city;

    response.json({
        date: dynamicDate.toUTCString(),
        temperatura: temperatura,
        cidade: local        
    });
}

export default tempo;
