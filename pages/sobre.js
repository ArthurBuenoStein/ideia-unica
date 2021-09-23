import Link from 'next/link';
import { useState } from 'react';


function Sobre() {
    return (
        <div>
            <h1>Oloco meu</h1>
            <h1>Esta é a página da Roseli</h1>
            <Contador />

            <Link href="/">
                <a> Acessar página Home</a>
            </Link>

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