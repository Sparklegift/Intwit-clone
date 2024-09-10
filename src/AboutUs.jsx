import Footer from "./Footer";
import NavBar from "./NavBar"


const AboutUs = () => {
    return ( 
        <div>
            <NavBar />

            <div className={`relative pt-16`}>
                <div className="flex justify-center items-center">
                    <img src="/image/Rectangle 2873.png" className="brightness-50 relative md:hidden "/>
                    <img src="/image/Rectangle 2870.png" className="brightness-50 -top-20 relative hidden md:block "/>
                    <h1 className="text-5xl md:text-6xl font-bold text-white absolute ">About Us</h1>
                </div>

                <div className="pt-10 grid md:gap-10 md:p-20 relative md:flex justify-center">
                    <img src="/image/Group 1000001618.png" className="md:block hidden"/>
                    
                    <div>
                        <div className="md:block hidden w-full h-2  bg-Primary "></div>
          
                        <div className="md:pt-10  md:grid gap-5">
                            <h1 className="text-2xl text-center md:text-2.5xl md:text-left text-hash">Roadmap</h1>

                            <h1 className="font-satBold pt-2 md:pt-6 font-extrabold text-center 
                                md:text-5xl md:text-left text-4xl"
                            >
                                Our Mission
                            </h1>

                            <p className="text-hash pt-4 text-center md:text-2.5xl md:text-justify md:pl-0 
                                md:leading-normal md:pr-8 pl-10 pr-10 text-lg"
                            >
                                Create a new alternative social platform to connect eligible singles looking 
                                for long-term relationships and make better informed decisions with a focus 
                                on facilitating physical/offline interactions.
                            </p>

                        </div>
                        
                        <div className="flex relative md:hidden">
                            <img src="/image/Rectangle 2872.png" className="relative left-14 top-5 z-20"/>
                            <img src="/image/dext.png" className="absolute right-14"/>
                        </div>
            
                        <div className="absolute -bottom-8 z-30 md:hidden">
                            <div className="relative h-28 bg-hash1 w-screen flex items-center">
                                <h1 className="text-lg pl-5 font-satBold text-white">Intwit is better on the App</h1>
                                <button className="bg-Primary p-5 w-40 absolute font-satMed right-1 rounded-lg ">
                                    Get The App
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-screen bg-black text-white md:flex md:p-40 md:pr-0  gap-48 items-center pt-10">
                    <div className="md:w-6/12 md:grid gap-10">
                        <h1 className="text-hash2 text-center text-xl md:text-2.5xl md:text-left">Who We Are For</h1>

                        <h1 className="font-satBold text-4xl pl-6 md:pl-0 md:text-5xl pt-2 pr-6 md:text-left">
                            You Are No More Alone
                        </h1>

                        <p className="text-center text-hash2 md:leading-normal text-lg md:text-2.5xl pt-4 
                            pl-10 pr-10 md:text-justify md:pl-0"
                        >
                            Are you a single over 30 who's tired of impersonal dating apps and unreliable 
                            connections? You're not alone. We understand the frustration of  non-availability 
                            of credible and decent social platforms for long-term companionships. That's why 
                            we created the Intwit App.
                        </p>

                    </div>

                    <div className="flex pt-12 pb-5 justify-center">
                        <img src="/image/image (6).png" className="md:scale-150"/>
                    </div>

                </div>


                <div classname="w-screen">
                    <div className=" grid bg-Whitey md:bg-white gap-4 pt-20 md:pt-10 pb-20 md:flex md:pl-28">
                        <div className="hidden md:block">
                            <img src="/image/Vector 2.png" />
                        </div>
                        <div className="md:w-6/12 md:grid md:gap-10 md:pt-20">
                            <h1 className="text-hash text-lg text-center md:text-2.5xl">What We Offer</h1>
                            
                            <h1 className="text-4xl md:text-5xl md:pl-10 md:pr-10 pl-15 pr-15 text-center 
                                font-satBold font-extrabold"
                            >
                                Genuine Connections, Not Just Profiles
                            </h1>

                            <p className="text-lg md:leading-normal md:text-2.5xl text-center md:p-0 pr-14 pl-14 text-hash">
                                We focus on real connections that go beyond profile pictures.Our platform 
                                facilitates physical/offline 
                                interactions through features like:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white pt-20 md:pt-0 md:flex md:relative ">
                    <div className="md:absolute right-10 md:w-5/12 top-60">
                        
                        <h1 className="text-4xl pl-15 md:pl-12 pr-15 md:text-left text-center font-satBold font-extrabold">
                            Location-based Matching
                        </h1>
                        
                        <h1 className="text-hash text-lg md:text-2.5xl md:leading-normal md:text-left pt-5 pr-12 pl-12 text-center">
                            Connect with other singles in your area who share your interests.
                        </h1>
                    </div>

                    <div className="flex relative justify-center pt-10">
                        <img src="/image/Group 1000001621.png" className="absolute z-10  -top-40 left-0 hidden md:block"/>
                        <img src="/image/location.png" className="absolute z-10 left-0 md:hidden"/>
                        <img src="/image/mockup2.png" className="md:hidden"/>
                        <img src="/image/Group 1000001619.png" className="hidden md:block relative left-52 -top-20"/>
                    </div>

                </div>

                <div className="bg-white pt-10 pb-5 md:flex md:pt-0 justify-center gap-20">
                    <div className="md:w-5/12 ">

                        <h1 className="text-4xl md:leading-normal md:text-left md:text-5xl md:pl-10 
                            pl-15 pr-15 text-center font-satBold font-extrabold"
                        >
                            Event Planning and Attendance
                        </h1>

                        <h1 className="text-hash md:leading-normal md:text-left text-lg 
                            md:text-2.5xl pt-5 pr-10 pl-10 text-center"
                        >
                            Discover and attend local events to meet potential partners in a fun and social setting.
                        </h1>

                    </div>

                    <div className="flex relative md:-mt-40 justify-center md:pt-0 pt-10">
                        <img src="/image/location.png" className="absolute z-10 left-0 md:hidden"/>
                        <img src="/image/mockup1.png" className="md:hidden"/>
                        <img src="/image/Group 10000016231.png" className=" z-10 absolute right-20 md:block hidden"/>
                        <img src="/image/Group 1000001580.png" className="md:block hidden  relative left-32"/>
                    </div>

                </div>

                <div className="bg-Whitey md:bg-white md:-mt-20 pb-20 pt-24">

                    <div className="md:p-52 md:pb-14 md:pt-0 ">
                        <h1 className="text-4xl pl-15 pr-15 text-center font-satBold font-extrabold">Our Promise</h1>
                        
                        <p className="text-hash md:text-2.5xl md:pt-10 md:leading-normal text-lg pt-5 pr-9 pl-9 text-center p-50">
                            We are committed to providing a secure and supportive atmosphere for 
                            individuals seeking long-term companionship. With Intwit, 
                            you can avoid continuous swiping and instead focus on making genuine 
                            relationships that may lead to marriage.
                        </p>

                    </div>
            
                    <div className="grid justify-center pt-5">
                        <img src="/image/group2.png" className="md:hidden"/>
                        <img src="/image/Frame 1000002321.png" className="md:block hidden"/>
                    </div>
            
                    <div className="hover-container">
                        <div className="flex justify-center ">
                            <h1 className="text-xs text-red-700 zoom-text hidden">coming soon!</h1>
                        </div>
                
                        <div className="flex justify-center">
                            <button className="bg-Primary p-5 w-7/12 md:w-3/12 text-lg font-satMed rounded-lg ">
                                Download App Now
                            </button>
                        </div>            
                    </div>   
                </div>
            </div>

            <Footer />
        </div>
     );
}
 
export default AboutUs;