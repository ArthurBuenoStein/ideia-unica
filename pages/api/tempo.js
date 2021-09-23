async function tempo(request, response) {
    const dynamicDate = new Date();

    const temperaturaAtual = await fetch("https://api.hgbrasil.com/weather?format=json&key=53fc40c6");
    //const temperaturaAtualJson = await temperaturaAtual.json();
    const temperatura = temperaturaAtual.temp;

    response.json({
        date: dynamicDate.toUTCString(),
        temperatura: temperatura        
    });
}

export default tempo;
