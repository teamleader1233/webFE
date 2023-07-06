import React, { useEffect, useRef } from "react";
import shoe from "../../../data/img/shoe.jpg";
const MainContent = () => {
  const scroll = useRef();
  useEffect(() => {
    function scrollY() {
      let scrollYWindow = window.scrollY;
      console.log(scrollYWindow);
      if (scrollYWindow >= 420) {
        const classRemove = "opacity-0 pointer-events-none mt-[800px]";
        scroll.current?.classList.remove(...classRemove.split(" "));
      }
    }
    window.addEventListener("scroll", scrollY);
    return () => {
      window.removeEventListener("scroll", scrollY);
    };
  }, []);
  return (
    <div>
      <div
        className="w-screen mt-[40px] mt-[800px] opacity-0 pointer-events-none transition-all duration-[2000ms] ease-in-out"
        ref={scroll}
      >
        <div className="my-[80px] flex justify-center">
          <h1 className="text-[32px]">Sản Phẩm Mới 2023</h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-center w-4/5 flex-wrap">
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div className="overflow-hidden">
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md   ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={shoe}
                  alt="shoe"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2]">
                  Tên Sản Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden ">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
