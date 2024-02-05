"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('slide-in-from-left');
          observer.unobserve(target);
        }
      });
    }, options);

    const gridItems = document.querySelectorAll('.cool-background');
    gridItems.forEach(item => observer.observe(item));

    // Cleanup: disconnect the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Carousel>
        <CarouselContent className="">
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 ">
            <img src="/carousels/1.webp" alt="bg" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <img src="/carousels/2.webp" alt="bg" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <img src="/carousels/3.webp" alt="bg" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <img src="/carousels/4.webp" alt="bg" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <img src="/carousels/5.webp" alt="bg" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <img src="/carousels/6.webp" alt="bg" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <img src="/carousels/7.webp" alt="bg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className=" flex justify-center items-center ">
        <button className=" transform transition-transform hover:scale-110 w-20 h-30">
          <img src="Images/charizard.png" alt="Button Image" />
        </button>
        <button className="transform transition-transform hover:scale-110 opacity-80">
          <img
            // className="h-6 w-6 mr-2"
            src="download/download_android.png"
            alt="Button Image"
          />
        </button>
        <button className="transform transition-transform hover:scale-110 opacity-80">
          <img
            // className="h-6 w-6 mr-2"
            src="download/download_ios.png"
            alt="Button Image"
          />
        </button>
        <button className=" transform transition-transform hover:scale-110 w-20 h-30">
          <img src="Images/pikachu.png" alt="Button Image" />
        </button>
        
      </div>

      <div className="bg-white bg-opacity-30 shadow-lg rounded-lg p-6">
  <h2 className="text-xl font-bold mb-4 text-yellow-200 font-mono">Unleash Your Monsters!</h2>
  <p className="font-zorque text-gray-700 font-large text-lg"> 
  <br/> 
  Embark on an epic journey in Idle Monster Saga, where you command a legion of powerful monsters on a quest to save the realm from darkness. With strategic gameplay and captivating visuals, immerse yourself in a world brimming with mythical creatures, ancient ruins, and formidable foes. Train your monsters, uncover legendary artifacts, and unleash devastating abilities as you rise to become the ultimate champion. Will you answer the call of destiny and lead your monsters to victory?
 <br/>
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="cool-background rounded-lg shadow-lg overflow-hidden border border-red-300 opacity-90 ">
          <img
            src="/Images/anime.gif"
            alt="bg"
            className="w-full h-auto object-cover rounded-t-lg shadow-lg"
          />
          <div className="p-4">
            <h1 className="font-bold text-xl mb-2">
              Fun combat with both manual and auto functions!
            </h1>
            <p className="text-black-400 mb-4">
              Seamless battle between masters with cool interactions and
              ultimate skills.
            </p>
          </div>
        </div>
        <div className="cool-background rounded-lg shadow-lg overflow-hidden border border-red-300 opacity-90">
          <img
            src="/Images/char up.gif"
            alt="bg"
            className="w-full h-auto object-cover rounded-t-lg shadow-lg"
          />
          <div className="p-4">
            <h1 className="font-bold text-xl mb-2">Upgrade your monsters!</h1>
            <p className="text-black-700 mb-4">
              Level up your monsters to be the strongest in the arena.
            </p>
          </div>
        </div>
        <div className="cool-background rounded-lg shadow-lg overflow-hidden border border-red-300 opacity-90">
          <img
            src="/Images/char.png"
            alt="bg"
            className="w-full h-auto object-cover rounded-t-lg shadow-lg"
          />
          <div className="p-4">
            <h1 className="font-bold text-xl mb-2">
              Unlimited activities for everyone!
            </h1>
            <p className="text-black-700 mb-4">
              Endless activties beside the main quests are waiting for you to
              dominate the arena.
            </p>
          </div>
        </div>
        <div className="cool-background rounded-lg shadow-lg overflow-hidden border border-red-300 opacity-90 ">
          <img
            src="/Images/teamcomp.jpg"
            alt="bg"
            className="w-full h-auto object-cover rounded-t-lg shadow-lg"
          />
          <div className="p-4">
            <h1 className="font-bold text-xl mb-2">
              Create the ultimate team compositions!
            </h1>
            <p className="text-black-700 mb-4">
              Create your own team compositions to challenge players around the
              world and be the very best.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
