import React from "react";
import Count from "./Count";
import ListImage from "./ListImage";

const MainContent = () => {
    return (
        <div id="productDetail" className="flex mt-[130px] justify-center">
            <div>
                <ListImage/>
            </div>
            <div className="ml-[30px] flex flex-col justify-between">
                <div>
                    <span className="">
                        Bàn ăn gập thông minh
                    </span>
                    <div className="text-orange-300 mt-[8px] mb-[8px]">
                        <i className="bi bi-star-fill m-[6px]"></i>
                        <i className="bi bi-star-fill m-[6px]"></i>
                        <i className="bi bi-star-fill m-[6px]"></i>
                        <i className="bi bi-star-fill m-[6px]"></i>
                        <i className="bi bi-star-fill m-[6px]"></i>
                    </div>
                    <span className="">
                        Giá tiền: $$$$$$
                    </span>
                </div>
                <div className="">
                    <div className="mb-[10px]">
                        <Count/>
                    </div>
                    <div className="flex justify-between w-100">
                        <div className="px-[5px] py-[5px] bg-black">
                            <h1 className="font-medium text-[18px] text-white">
                                Thêm vào giỏ hàng
                            </h1>
                        </div>
                        <div className="px-[5px] py-[5px] bg-black ml-[20px]">
                            <h1 className="font-medium text-[18px] text-white">
                                Mua ngay
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;