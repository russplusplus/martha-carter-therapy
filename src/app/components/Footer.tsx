import Image from "next/image"

export function Footer() {
    return (
        <footer>
            <div id="footer-container" className="flex-h-center prevent-select">
                <div id="footer-logo" >
                    <Image src="/mc.png" alt="Martha Carter Therapy Flower MC Logo" width="134" height="64"
                    ></Image>
                </div>
            </div>
        </footer>
    )
}