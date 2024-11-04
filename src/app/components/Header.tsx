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
                            alt="Somatic Therapist Denver Flower Logo" 
                            height="64"
                            width="64"
                            sizes="100vw"
                        ></Image>
                    </div>
                </Link>
                <div id="mct-container">
                    <Link href="/">
                        <Image src="/MARTHA.png" height="32" width="169" alt="MARTHA Somatic Therapist Denver"></Image>
                        <Image src="/CARTER.png" height="32" width="161" alt="CARTER Trauma Therapy Colorado"></Image>
                        <Image src="/THERAPY.png" height="32" width="198" alt="THERAPY Somatic Therapist Denver"></Image>  
                    </Link>
                </div>
                <div id="contact-container">
                    <Link href="https://www.instagram.com/therapy.with.martha" target="_blank" aria-label="somatic therapist denver instagram"><i className="fa fa-instagram" id="ig-icon"></i></Link>
                    <Link href="mailto: marthacartertherapy@gmail.com" ><i className="fa fa-envelope-o" id="mail-icon" aria-label="trauma therapy colorado email"></i></Link>
                    <Link href="https://www.psychologytoday.com/us/therapists/martha-carter-denver-co/1061265" target="_blank" style={{"textDecoration": "none"}} aria-label="therapy in colorado springs">
                        <div id="connect-btn">PT</div>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    )
}