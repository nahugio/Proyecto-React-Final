import '../css/Footer.css'

const Footer = () => {
    return(
        <>
            <footer className='bg-warning'>
                <div className="container">
                    <p className='text-light'>Copyright © 2023, todos los derechos reservados.</p>
                    <div className="redes">
                        <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;