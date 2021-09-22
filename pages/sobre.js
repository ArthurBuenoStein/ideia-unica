import { useState } from 'react';

function Sobre() {
    return (
        <div>
            <h1>Oloco meu</h1>
            <Contador />
            <a href="/"> Acessar página Home</a>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Sobre