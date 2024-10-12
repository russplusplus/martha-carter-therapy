import { Menu } from './Menu'
import Image from 'next/image'
export async function Header() {
    return (
        <header className="prevent-select">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="flex-h-center header-container">
                <div id="header-icon">
                    <Image 
                        src="/flower-lavender-cropped.png" 
                        alt="Martha Carter Therapy flower logo" 
                        height="64"
                        width="64"
                        sizes="100vw"
                    ></Image>
                </div>
                <div id="mct-container">
                    <Image className="signature-logo" src="/MARTHA.png" height="64" width="169" alt="MARTHA"></Image>
                    <Image className="signature-logo" src="/CARTER.png" height="64" width="161" alt="CARTER"></Image>
                    <Image className="signature-logo" src="/THERAPY.png" height="64" width="198" alt="THERAPY"></Image>  
                </div>
                <div id="contact-container">
                    <a href="https://www.instagram.com/therapy.with.martha" target="_blank"><i className="fa fa-instagram" id="ig-icon"></i></a>
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