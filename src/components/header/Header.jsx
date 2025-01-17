import './Header.css'

function Header (){
    return (
        <header className='header'>
            <div className='header-logo'>
                <a href='#' className='logotype'>
                    <div className='FP logo'></div>
                    <span className='logo-text'>Freshpechen'e</span>
                    <span className='logo-text'>Films</span>
                </a>
            </div>
        </header>
    )
}

export default Header;