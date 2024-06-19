// "use client"
// const log = console.log.bind(console)
// log("we're logging babyyy!")

import { Menu } from './Menu'
export async function Header() {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="flex-h-center header-container">
                <div id="mct-container">
                    <img id="header-icon" src="flower-lavender-cropped.png"></img>
                    <div>
                        <img className="signature-logo" src="MARTHA.png"></img>
                        <img className="signature-logo" src="CARTER.png"></img>
                        <img className="signature-logo" src="THERAPY.png"></img>  
                    </div>
                </div>
                <div id="contact-container">
                    <a href="https://www.instagram.com/allthingsanxious" target="_blank"><i className="fa fa-instagram" id="ig-icon"></i></a>
                    <a href="mailto: marthacartertherapy@gmail.com" ><i className="fa fa-envelope-o" id="mail-icon" aria-hidden="true"></i></a>
                    <a href="https://www.psychologytoday.com/us/therapists/martha-carter-denver-co/1061265" target="_blank" style={{"textDecoration": "none"}}>
                        <div id="connect-btn">CONNECT</div>
                    </a>
                    <Menu />
                </div>
            </div>
        </header>
    )
}