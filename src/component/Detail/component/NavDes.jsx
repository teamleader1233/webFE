import React from "react";
import ProductInformation from "./Description/ProductInformation";
import Evaluate from "./Description/Evaluate";
import Guarantee from "./Description/Guarantee";

const NavDes = () => {
    return (
        <div className="flex justify-center mt-[40px] flex-col items-center">
            <div className="">
                <span className="px-[30px] py-[10px] bg-black text-white">Thông Tin Sản Phẩm</span>
                <span className="px-[30px] py-[10px] bg-black text-white">Đánh Giá</span>
                <span className="px-[30px] py-[10px] bg-black text-white">Bảo Hành</span>
            </div>
            <div className="mt-[23px] w-full">
                <ProductInformation></ProductInformation>
            </div>
        </div>
    );
}

export default NavDes;