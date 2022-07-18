import Link from 'next/link';

function Header() {
    return(
        <div>
            <h1>Garage Control</h1>
            <p>
                Desenvolvido por 
                <a href="https://www.instagram.com/prluciohermano"> @prluciohermano

                </a>
            </p>
            <div>
                <h2>Sobre</h2>

                <Link href="/sobre">
                    <a>Acessar página sobre</a>
                </Link>
                <Link href="/tempo">
                    <a>Acessar página de Tempo</a>
                </Link>
            </div>
        </div>
        
    )
}

export default Header;

