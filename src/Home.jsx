import { useEffect, useState } from "react";

  const testimonials = [
    {
      message: "We’re grateful Intwit! We’re getting married in a few months!",
      names: "Tiana Kayode and Paul Mike",
    },
    {
      message: "We couldn’t be happier, thanks to Intwit! We found our perfect match.",
      names: "Chioma Nwafor and Samuel Adeyemi",
    },
    {
      message: "Intwit brought us together, and now we’re planning our future! Thank you!",
      names: "Aisha Bello and Ibrahim Musa",
    }
  ];
  

  const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: 'Is Intwit free to use?',
        answer: 'Yes, Intwit is free to use.',
      },
      {
        question: 'Is my information secure on Intwit?',
        answer: 'Yes, your information is securely protected on Intwit.',
      },
      {
        question: 'How can I report suspicious activity on Intwit?',
        answer: 'You can report suspicious activity through the in-app reporting feature or by contacting support.',
      },
      {
        question: 'Does Intwit have customer support?',
        answer: 'Yes, Intwit provides customer support.',
      },
      {
        question: 'How do I delete my account?',
        answer: 'You can delete your account by navigating to your account settings and selecting the delete option.',
      }
    ];
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };




    const duration = 30 * 24 * 60 * 60 * 1000;
    const [endTime, setEndTime] = useState(getStoredEndTime);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
    const { days, hours, minutes, seconds } = formatTime(timeLeft);
    const options = ['The Man', 'The Woman', 'None'];
    const [votes, setVotes] = useState({ 'The Man': 20, 'The Woman': 15, 'None': 10 });
    const [userHasVoted, setUserHasVoted] = useState(false);
    const [userVote, setUserVote] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);


    const getStoredEndTime = () => {
      const storedEndTime = localStorage.getItem('countdownEndTime');
      return storedEndTime ? new Date(storedEndTime) : null;
    };
            
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime - now;
      return difference > 0 ? difference : 0;
    };
      
      
    useEffect(() => {
      if (!endTime) {
        const newEndTime = new Date(new Date().getTime() + duration);
        setEndTime(newEndTime);
        localStorage.setItem('countdownEndTime', newEndTime);
      }
      
      const intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      
      return () => clearInterval(intervalId);
    }, [endTime]);
      

    const formatTime = (time) => {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    };
        

    const handleVote = (option) => {
      if (!userHasVoted) {
        const newVotes = { ...votes, [option]: votes[option] + 1 };
        setVotes(newVotes);
        setUserHasVoted(true);
        setUserVote(option);
      }
    };

  const totalVotes = Object.values(votes).reduce((sum, vote) => sum + vote, 0);

  const getPercentage = (option) => {
    return totalVotes > 0 ? ((votes[option] / totalVotes) * 100).toFixed(2) : 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

    return ( 
        <div className=" pt-16">

          <div className="flex justify-center items-center text-white">
            <img src="/image/home.png" className="brightness-75 md:hidden relative"/>
            <img src="/image/home1.png" className="brightness-50 w-100 hidden md:block  relative"/>

            <div className="absolute p-12 md:pt-56 ">
              <div className="md:flex justify-center">

                <div className="md:w-8/12">

                  <h1 className="text-4xl md:text-7xl  font-extrabold text-center tracking-wide font-satBold">
                    Social Media App for Singles
                  </h1>

                  <div className="md:flex justify-center pt-10">
                    <h1 className="text-lg md:text-3xl text-center p-4 md:w-9/12">
                      After all every relationship starts with friendship
                    </h1>
                  </div>

                </div>

              </div>

              <div className="grid md:flex md:items-center cursor-pointer gap-5 md:gap-10 justify-center pt-20">
                <img src="/image/appstore.png"/>
                <img src="image/googlestore.png"/>
              </div>

            </div>
            
            <div className="absolute bottom-8 z-30 md:hidden">
              <div className="relative h-28 bg-hash1 w-screen flex items-center">
                <h1 className="text-lg pl-5 font-satBold text-white">Intwit is better on the App</h1>
                <button className="bg-Primary p-5 w-40 absolute font-satMed right-1 rounded-lg ">Get The App</button>
              </div>
            </div>
          </div>

          <div className="pt-20  justify-center md:flex">
            <div className="md:w-5/12 md:relative top-52 left-40">
              <h1 className="text-center md:text-left text-3xl md:text-5xl font-satBold pl-9  pr-9">
                Two imperfect singles to create perfection
              </h1>
              <p className="text-center md:text-left text-lg md:text-2.5xl  text-hash p-10">
                We celebrate real connections, not airbrushed perfection. Find your perfect match 
                (quirks and all) on the Intwit App.
              </p>

            </div>

            <div className="md:flex md:relative right-32">

              <div className="hidden md:block left-20 relative">
               <img src="/image/Vector 2.png" />
              </div>
                
              <div className="flex justify-center pt-14">
                <img src="/image/mockup3.png" className="md:hidden"/>
                <img src="/image/Group 1000001616.png" className="md:block hidden"/>
              </div>

            </div>

          </div>

          <div className="pt-14 md:flex justify-center items-center md:gap-28 md:pl-24 md:pb-24">
            <img src="/image/Vector 59 (1).png" className="hidden md:block" />

            <div className="md:grid md:gap-5">
              <h1 className="text-center text-lg md:text-2.5xl md:text-left text-hash">Find your tribe. </h1>
              <h1 className="text-center text-4xl md:text-5xl md:text-left md:w-10/12  font-satBold">
                Discover the joy of genuine connections
              </h1>
              <h1 className="text-center text-lg md:text-left md:w-10/12 md:text-2.5xl md:p-0 text-hash pl-10 pr-10 pt-5">
                Upgrade to unlock exclusive events and meet amazing singles.
              </h1>

              <div className="flex justify-center pt-10">
                <img src="/image/Vector 59.png" className="md:hidden" />
              </div>

              <div className="hover-container">

                <div>
                  <h1 className="text-xs text-red-700 zoom-text hidden">coming soon!</h1>
                </div>

                <div className="flex justify-center md:justify-start pt-16 md:pt-0">
                  <button className="bg-Primary p-3 w-7/12 md:w-4/12 text-lg font-satMed rounded ">Connect</button>
                </div> 

              </div>
                
            </div>

          </div>

          <div className="pt-10 text-center md:bg-black md:flex md:p-10 justify-center items-center">

            <div className="md:p-20 md:text-left md:grid gap-10">
              <h1 className="text-lg md:text-2.5xl text-hash2">Find love or friendship </h1>
              <h1 className="md:block hidden text-5xl text-white">Download App to connect with other singles</h1>
              <h1 className="text-lg text-hash pl-8 pr-8 pt-40 md:hidden">
                Upgrade to unlock exclusive events and meet amazing singles.
              </h1>
              
              <div className="flex justify-center pt-10 md:hidden">
                <img src="/image/Frame 1000002298.png" />
              </div>
                
              <div className="hover-container">
                <div className="flex justify-center ">
                  <h1 className="text-xs text-red-700 zoom-text hidden">coming soon!</h1>
                </div>
                
                <div className="pt-7">
                  <button className="bg-Primary p-4 w-7/12 font-satMed rounded-lg ">Download App</button>
                </div> 

              </div>
            </div>

            <img src="/image/Frame 1000002298 (1).png" className="md:block hidden"/>

          </div>

          <div className="text-lg pt-16 md:pb-24 md:pt-24 text-center grid justify-center 
            md:flex md:items-center md:pl-60 md:pr-28 md:bg-dex md:gap-40"
          >

            <img src="/image/mockup4 desk.png" className="md:block hidden"/>
              
            <div className=" md:text-left md:grid md:gap-10">
              <h1 className="text-hash md:text-2.5xl">Safety First</h1>
              <h1 className="text-4xl md:text-5xl font-satBold">Photo and Video verification </h1>
              <p className="text-hash md:text-2.5xl pl-9 md:p-0 pt-5 pr-9">
                We prioritize your peace of mind. Enjoy a safer dating experience with
                our photo and video verification features on Intwit
              </p>

              <div className="flex justify-center pt-10 md:hidden">
                <img src="/image/mockup4.png" />
              </div>

              <div className="md:block hidden pt-10">
                <button className="bg-Primary p-3 w-7/12 text-lg font-satMed rounded" 
                  onClick={() => window.location.href = '/Aboutintwit'}
                >

                  See how it work

                </button>
              </div>

              <div className="pt-10 md:hidden">
                <button className="bg-Primary p-3 w-7/12 text-lg font-satMed rounded">Download App Now</button>
              </div>

            </div>

          </div>
            

          <div id="polls" className="pt-20 md:pt-0 md:pb-0 pb-5">

            <div className="text-lg pt-10 md:pb-52 md:p-28 md:pt-14  bg-Whitey">
              <div className="flex relative">
                <h1 className="relative left-5 md:left-0 md:text-2.5xl">Polls</h1>

                <div className="flex gap-3 absolute right-5 md:right-0 md:text-2.5xl">
                    
                  <div className="h-8 w-8 bg-red-300 rounded-full flex justify-center items-center">
                    <div className="h-4 w-4 rounded-3xl bg-red-600"></div>
                  </div>

                  <h1>Live</h1>
                      
                  {timeLeft > 0 ? (
                    <div className="text-red-600">{days} {hours} {minutes} {seconds}</div>
                  ) : (
                    <div className="text-lg font-bold text-hast">Countdown Complete!</div>
                  )}

                </div>

              </div>

              <div className="md:pt-20">

                <div className="pt-10 md:bg-white md:w-10/12 md:rounded-lg">
                  <h1 className="text-2xl font-extrabold pl-4 pr-6 font-satBold">Who should apologize after a fight?</h1>

                  <div className="grid gap-6 p-4 pt-8">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleVote(option)}
                        className={`p-2 w-full rounded-lg relative flex justify-between items-center
                        ${
                          userHasVoted ? ' cursor-not-allowed' : ''
                        }`}
                        disabled={userHasVoted}
                      >

                        <div className=" absolute top-0 left-0 w-full h-full  rounded-full">
                          
                          <div className={`absolute h-full ${
                            userVote === option ? 'bg-Primary' : 'bg-option'
                            } rounded-r-full`}
                            style={{
                              width: `${getPercentage(option)}%`,
                            }}
                          ></div>

                        </div>

                        <div className="z-10">{option}</div>
                        <div className="right-2 z-20">
                          {getPercentage(option)}%
                        </div>

                      </button>
                    ))}

                  </div>

                </div>
              </div>
                    

              <form>
                <div className="md:flex items-center md:gap-40 md:pt-5 ">

                  <div className="flex justify-center pt-10 md:pt-0">
                    <input type="text" placeholder="Share your thoughts..." 
                      className="p-5 w-11/12 md:w-96 rounded-md outline-none"
                    />
                  </div>

                  <div className="pt-5 md:pt-0 pl-5">
                    <button className="bg-Primary text-lg p-4 w-5/12 md:w-40 font-satMed rounded">Submit</button>
                  </div>

                </div>
              </form>

            </div>
          </div>


          <div>
            <div className="bg-black text-hash2 p-5 md:p-40 md:pt-20 md:pb-20 pt-14 md:text-2.5xl md:grid gap-20 text-lg">
              <h1>Testimonials</h1>

              <div >
                <h1 className="text-4xl font-satBold text-white pt-14">“</h1>
                <p className="text-4xl md:pt-10 md:text-5xl md:w-10/12 font-satBold text-white">
                  {testimonials[currentSlide].message}
                </p>
                <p className="pt-8 md:pt-14">{testimonials[currentSlide].names}</p>
              </div>

              <div className="flex justify-center pt-10">
                {testimonials.map((_, index) => (
                  <div
                    key={index} className={`h-1 w-4/12 mx-1 transition-all duration-300 ${
                    index === currentSlide ? 'bg-Whitey' : 'bg-hash'
                    }`}
                  ></div>
                ))}
              </div>

            </div>
          </div>

          <div>
            <div id="FAQ" className="pt-20 p-6 md:p-48 md:pt-20 md:pb-20 md:bg-Whitey">

              <div className="md:flex gap-2 justify-center">
                <h1 className="text-4xl md:text-5xl font-satBold text-center">Frequently</h1>
                <h1 className="text-4xl md:text-5xl font-satBold text-center">Asked Questions</h1>
              </div>
                    
              <div className="pt-10">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center cursor-pointer "
                      onClick={() => toggleFAQ(index)}
                    >

                      <h2 className="text-sm md:text-2.5xl md:font-semibold md:pt-8">{faq.question}</h2>
                      <span className="text-2xl md:text-5xl md:pt-8 text-hash2  md:text-hash1">
                        {openIndex === index ? '-' : '+'}
                      </span>

                    </div>

                    {openIndex === index && (
                      <div className="p-4 bg-white">
                        <p className="text-hash md:text-hash1 md:text-2.5xl md:w-8/12">{faq.answer}</p>
                      </div>
                    )}

                  </div>
                ))}
              </div>

            </div>
          </div>


          <div>
            <div className="pt-16 md:pt-20 md:pb-20 pb-10">
              <h1 className="text-3xl md:text-5xl pl-16 pr-16 font-satBold text-center">Connect with other Singles</h1>

              <div className="grid justify-center cursor-pointer pt-10 md:pt-14 gap-5 md:flex md:gap-10">
                <img src="/image/appstore.png"/>
                <img src="image/googlestore.png"/>
              </div>

            </div>
          </div>
          
        </div>
     );
}
 
export default Home;