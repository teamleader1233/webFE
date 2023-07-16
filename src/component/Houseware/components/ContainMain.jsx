import React, { useEffect, useRef } from "react";
import productHouseware from "../../../data/img/productHouseware.jpg";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link, NavLink } from "react-router-dom";
>>>>>>> 3aed1849022f2e4e1e71c113c5b2da22f838098a
const MainContent = () => {
  const scroll = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const classRemove = "opacity-0 pointer-events-none mt-[800px]";
    scroll.current?.classList.remove(...classRemove.split(" "));
  }, []);
  const handleOpenDetail = () => {
    console.log("asds");
    navigate(`/HousewareDetail`);
  };
  return (
    <div>
      <div id="product" className="pt-[160px] pb-[60px] flex justify-center">
        <h1 className="text-[32px] bg-[#f94f2f] text-white p-[6px] px-[20px] rounded-md select-none">
          Đồ Gia Dụng
        </h1>
      </div>
      <div
        className="w-screen mt-[40px] mt-[800px] opacity-0 pointer-events-none transition-all duration-[1000ms] ease-in-out"
        ref={scroll}
      >
        <div className="w-full flex justify-center">
          <div className="flex justify-center w-4/5 flex-wrap">
<<<<<<< HEAD
            <div
              className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md cursor-pointer  "
              onClick={() => handleOpenDetail()}
            >
              <div className="overflow-hidden">
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={productHouseware}
                  alt="productHouseware"
                />
              </div>
              <div className="flex flex-col w-full">
                <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2] select-none">
                  Tên San Phẩmasdasdasdasdasdasdasds
                </h1>
                <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden select-none">
                  asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                </span>
                <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
              </div>
            </div>
=======
            <Link to="/Detail">
              <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md  ">
                <div className="overflow-hidden">
                  <img
                    className="h-[280px] overflow-hidden object-cover w-full"
                    src={productHouseware}
                    alt="productHouseware"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="m-[10px] whitespace-nowrap truncate text-ellipsis w-full p-[10px] text-[20px] font-medium grow-[2] select-none">
                    Tên Sản Phẩmasdasdasdasdasdasdasds
                  </h1>
                  <span className="m-[10px] grow-[6]  break-words line-clamp-3 overflow-hidden select-none">
                    asdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdádasdasdasdasdasdsádasdádasdasdassdsdqweqweqw
                  </span>
                  <p className="m-[10px] mb-[20px] grow-[2] ">Giá Sản Phẩm </p>
                </div>
              </div>
            </Link>
>>>>>>> 3aed1849022f2e4e1e71c113c5b2da22f838098a
            <div className="border-[2px] w-[280px] border-solid border-[#CCCC] mx-[40px] mb-[60px] rounded-md   ">
              <div>
                <img
                  className="h-[280px] overflow-hidden object-cover w-full"
                  src={productHouseware}
                  alt="productHouseware"
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
                  src={productHouseware}
                  alt="productHouseware"
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
                  src={productHouseware}
                  alt="productHouseware"
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
                  src={productHouseware}
                  alt="productHouseware"
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
                  src={productHouseware}
                  alt="productHouseware"
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
                  src={productHouseware}
                  alt="productHouseware"
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
                  src={productHouseware}
                  alt="productHouseware"
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
