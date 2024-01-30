import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  export default function Page() {
    return (
      <>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <img src="/carousels/1.webp" alt="bg" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img src="/carousels/2.webp" alt="bg" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img src="/carousels/3.webp" alt="bg" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img src="/carousels/4.webp" alt="bg" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
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
          <button className="transform transition-transform hover:scale-110">
            <img
              // className="h-6 w-6 mr-2"
              src="download/download_android.png"
              alt="Button Image"
            />
          </button>
          <button className="transform transition-transform hover:scale-110">
            <img
              // className="h-6 w-6 mr-2"
              src="download/download_ios.png"
              alt="Button Image"
            />
          </button>
        </div>
        
        <div className="bg-transparent mr-4 ml-4 p-20">
          <div className="cool-background flex flex-col md:flex-row rounded-lg shadow-lg">
            <img
              src="/carousels/2.webp"
              alt="bg"
              style={{
                width: "400px",
                height: "auto",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
            <div className="content-container p-6">
              <h1 className="font-bold text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-gray-700 mb-4">
                Eius, iure. Eaque fugit officiis eum vero voluptate aliquam
                expedita dignissimos tenetur, cupiditate deleniti nisi voluptas.
                Ad ratione adipisci incidunt doloremque quidem.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
          <div className="cool-background flex flex-col md:flex-row rounded-lg shadow-lg">
            <img
              src="/carousels/2.webp"
              alt="bg"
              style={{
                width: "400px",
                height: "auto",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
            <div className="content-container p-6">
              <h1 className="font-bold text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-gray-700 mb-4">
                Eius, iure. Eaque fugit officiis eum vero voluptate aliquam
                expedita dignissimos tenetur, cupiditate deleniti nisi voluptas.
                Ad ratione adipisci incidunt doloremque quidem.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
          <div className="cool-background flex flex-col md:flex-row rounded-lg shadow-lg">
            <img
              src="/carousels/2.webp"
              alt="bg"
              style={{
                width: "400px",
                height: "auto",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
            <div className="content-container p-6">
              <h1 className="font-bold text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-gray-700 mb-4">
                Eius, iure. Eaque fugit officiis eum vero voluptate aliquam
                expedita dignissimos tenetur, cupiditate deleniti nisi voluptas.
                Ad ratione adipisci incidunt doloremque quidem.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
          <div className="cool-background flex flex-col md:flex-row rounded-lg shadow-lg">
            <img
              src="/carousels/2.webp"
              alt="bg"
              style={{
                width: "400px",
                height: "auto",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
            <div className="content-container p-6">
              <h1 className="font-bold text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-gray-700 mb-4">
                Eius, iure. Eaque fugit officiis eum vero voluptate aliquam
                expedita dignissimos tenetur, cupiditate deleniti nisi voluptas.
                Ad ratione adipisci incidunt doloremque quidem.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  