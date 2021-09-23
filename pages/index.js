import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Esse tá bombando</h1>
            <Link href="/sobre">
            <a> Acessar página Sobre</a>
            </Link>
            <Link href="/api/tempo">
            <a> Acessar página tempo</a>
            </Link>
        </div>
    )
}
export default Home