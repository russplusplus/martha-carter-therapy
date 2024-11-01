import { Menu } from './Menu'
import Image from 'next/image'
import Link from 'next/link'

export async function Header() {
    return (
        <header className="prevent-select">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="flex-h-center header-container">
                <Link href="/">
                    <div id="header-icon">
                        <Image 
                            src="/flower-lavender-cropped.png" 
                            alt="Martha Carter Therapy Somatic Therapist Denver Flower Logo" 
                            height="64"
                            width="64"
                            sizes="100vw"
                        ></Image>
                    </div>
                </Link>
                <div id="mct-container">
                    <Link href="/">
                        <Image src="/MARTHA.png" height="32" width="169" alt="MARTHA Somatic Therapist Denver"></Image>
                        <Image src="/CARTER.png" height="32" width="161" alt="CARTER Somatic Therapist Denver"></Image>
                        <Image src="/THERAPY.png" height="32" width="198" alt="THERAPY Somatic Therapist Denver"></Image>  
                    </Link>
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