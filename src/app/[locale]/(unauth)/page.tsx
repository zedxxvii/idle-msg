import Image from 'next/image';

import { Carousel,
CarouselContent,
CarouselItem,
CarouselNext,
CarouselPrevious } from '@/components/carousel';
export default function Index() {
  
  return (
    <>
      <section>
         <Carousel>
        <CarouselContent className="">
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 ">
            <Image src="/assets/carousels/1.webp" alt="bg" width={460}
          height={160} />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Image src="/assets/carousels/2.webp" alt="bg"width={460}
          height={160} />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Image src="/assets/carousels/3.webp" alt="bg"width={460}
          height={160} />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Image src="/assets/carousels/4.webp" alt="bg" width={460}
          height={160}/>
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center w-4/9 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Image src="/assets/carousels/5.webp" alt="bg" width={460}
          height={160}/>
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Image src="/assets/carousels/6.webp" alt="bg"width={460}
          height={160} />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Image src="/assets/carousels/7.webp" alt="bg" width={460}
          height={160}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        <div className="mx-auto max-w-screen-xl lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Idle Monster Saga
              <strong className="font-extrabold text-red-700 sm:block">
                {' '}
                Unleash Your Monsters!{' '}
              </strong>
            </h1>

            <p className="mt-4 text-black sm:text-xl/relaxed">
              Embark on an epic journey in Idle Monster Saga, where you command
              a legion of powerful monsters on a quest to save the realm from
              darkness. With strategic gameplay and captivating visuals, immerse
              yourself in a world brimming with mythical creatures, ancient
              ruins, and formidable foes. Train your monsters, uncover legendary
              artifacts, and unleash devastating abilities as you rise to become
              the ultimate champion. Will you answer the call of destiny and
              lead your monsters to victory?
            </p>
          </div>
        </div>
      </section>
      <section className="relative mt-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-75">
        <Image
          src="/assets/images/anime.gif"
          alt="bg"
          className="size-full rounded-t-lg object-cover shadow-lg"
          width={160}
          height={160}
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 text-black">
          <div className="p-4 sm:p-6">
            Fun combat with both manual and auto functions!
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Seamless battle between masters with cool interactions and
              ultimate skills.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mt-8  overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-75">
        <Image
          src="/assets/images/char up.gif"
          alt="bg"
          className="size-full rounded-t-lg object-cover shadow-lg"
          width={160}
          height={160}
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 text-black">
          <div className="p-4 sm:p-6">
            Upgrade your monster!
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Level up your monsters to be the strongest in the arena.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mt-8  overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-75">
        <img
          src="/assets/images/char.png"
          alt="bg"
          className="size-full rounded-t-lg object-cover shadow-lg"
          width={160}
          height={160}
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 text-black">
          <div className="p-4 sm:p-6">
            Unlimited activities for everyone!
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Endless activties beside the main quests are waiting for you to
              dominate the arena.
            </p>
          </div>
        </div>
      </section>
      <section className="relative  mt-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-75">
        <img
          src="/assets/images/teamcomp.jpg"
          alt="bg"
          className="size-full rounded-t-lg object-cover shadow-lg"
          width={160}
          height={160}
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 text-black">
          <div className="p-4 sm:p-6">
            Create the ultimate team compositions!
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Create your own team compositions to challenge players around the
              world and be the very best.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
