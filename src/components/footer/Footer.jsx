import './Footer.css'

function Footer(){
  return(
    <footer className='footer'>
      <div className="footer_block">
        <div className="social">
          <div className="media_icons">
            <a className='media vk'></a>
            <a className='media tg'></a>
          </div>
        </div>
        <div className="information">
          <g className='date'>© 2022-2025</g>
          <div className='teg'>freshpechen'e films</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;