const Footer = () => {

    const currentYear = new Date().getFullYear();

    return ( 
        <div className="bg-black text-white ">
            <div className="pb-16 md:pb-20 md:flex items-center md:p-10 md:relative">
                
                <div className="grid justify-center gap-5 pt-20 md:pt-5 md:relative left-14">
                    <div className="flex justify-center">
                        <img src="/image/logo.png" />
                    </div>
                    <div className="flex justify-center gap-4">
                        <img src="/image/facebook.png" className="w-10 h-10"/>
                        <img src="/image/icons8-instagram (2) 1.png" className="w-12 h-12"/>
                        <img src="/image/twitherx.png" className="w-10 h-10"/>
                    </div>
                    <h1 className="text-hash2 text-lg text-center">Intwit {currentYear}. All Rights Reserve</h1>
                </div>

                <div className="pl-5 pt-14 grid md:flex gap-10 md:gap-28 md:absolute right-40">
                    <div>
                        <h1 className="text-xl font-satBold">Company</h1>
                        <ul className="text-hash2 text-xl grid gap-3 pt-5">
                            <li onClick={() => window.location.href = '/Aboutintwit'}>About Us</li>
                            <li>How it works</li>
                            <li>Features</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-xl font-satBold">Help & Support</h1>
                        <ul className="text-hash2 text-xl grid gap-3 pt-5">
                            <li>FAQ</li>
                            <li>Safety</li>
                            <li>Community</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-xl font-satBold">Legal</h1>
                        <ul className="text-hash2 text-xl grid gap-3 pt-5">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;