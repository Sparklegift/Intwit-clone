import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    const handleNavigation = (targetId) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            setOpen();
        }, 100);
    };

    const handleNav = () => {
        setOpen(!open);
    }

    return ( 
        <div className="w-screen z-50 fixed h-16 md:h-28 font-satReg bg-white">
            <div className="hidden md:block ">
                <div className="flex relative">
                    <Link to={`/`}>
                        <img src="/image/logofull.png" 
                            className="absolute top-8 left-24"
                        />
                    </Link>
                    <div className="flex gap-10 justify-center items-center absolute top-6 md:text-lg right-24 ">
                        <Link to={`/Aboutintwit`}>
                            <h1>About Intwit</h1>
                        </Link>
                        <h1 onClick={() => handleNavigation('polls')} className="cursor-pointer">Polls</h1>
                        <h1 onClick={() => handleNavigation('FAQ')} className="cursor-pointer">FAGs</h1>
                        <div className="hover-container">
                            <div className="flex justify-center ">
                                <h1 className="text-xs text-red-700 zoom-text">coming soon!</h1>
                            </div>
                             <button className="bg-Primary p-3 pl-5 pr-5 rounded-md">Get The App</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative md:hidden">
                <div className={`${open? `hidden`: `block`}`}>
                    <Link to={`/`}>
                        <img src="/image/logofull.png" className="absolute top-5 left-7"/>
                    </Link>
                    <img src="/image/Closed.png" className={`absolute top-5 right-5 `} onClick={handleNav}/>
                </div>
                
                <div className={`grid w-screen h-screen fixed bg-white justify-center gap-28 ${!open? `hidden`:`block`}`}>
                    <Link to={`/`}>
                        <img src="/image/logofull.png" className="absolute top-16 w-2/12 left-10"/>
                    </Link>
                    <img src="/image/cancel.png" className="absolute top-12 right-10" onClick={handleNav}/>
                    <ul className="grid justify-center text-center pt-52 gap-14 text-2xl font-semibold">
                        <Link to={`/Aboutintwit`}>
                            <li>About Intwit</li>
                        </Link>
                        <li onClick={() => handleNavigation('polls')} >Polls</li>
                        <li onClick={() => handleNavigation('FAQ')}>FAQ</li>
                    </ul>
                    
                    <div>
                        <img src="/image/appstore.png" />
                        <img src="/image/appstore.png" className="pt-5"/>
                    </div>
                </div>
            </div>

            
        </div>
     );
}
 
export default NavBar;