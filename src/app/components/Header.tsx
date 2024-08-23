import { Menu } from './Menu'
export async function Header() {
    return (
        <header className="prevent-select">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="flex-h-center header-container">
                <img id="header-icon" src="flower-lavender-cropped.png"></img>
                <div id="mct-container">
                    <img className="signature-logo" src="MARTHA.png"></img>
                    <img className="signature-logo" src="CARTER.png"></img>
                    <img className="signature-logo" src="THERAPY.png"></img>  
                </div>
                <div id="contact-container">
                    <a href="https://www.instagram.com/allthingsanxious" target="_blank"><i className="fa fa-instagram" id="ig-icon"></i></a>
                    <a href="mailto: marthacartertherapy@gmail.com" ><i className="fa fa-envelope-o" id="mail-icon" aria-hidden="true"></i></a>
                    <a href="https://www.psychologytoday.com/us/therapists/martha-carter-denver-co/1061265" target="_blank" style={{"textDecoration": "none"}}>
                        <div id="connect-btn">PT</div>
                    </a>
                </div>
                <Menu />

            </div>
        </header>
    )
}