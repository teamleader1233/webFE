import React from "react";
import demo1 from "../../../../data/img/demo1.png";
import demo2 from "../../../../data/img/demo2.png";
import demo3 from "../../../../data/img/demo3.png";

const ProductInformation = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-[10px] w-[800px] ">
                <span className="mb-[20px]">chi tiết sản phẩm</span>
                <img src={demo1} alt="" />
            </div>
            <div className="flex flex-col items-center mt-[10px] w-[800px]">
                <span className="mb-[20px]">Kích thước sản phẩm</span>
                <img src={demo3} alt="" />
            </div>
            <div className="flex flex-col items-center mt-[10px] w-[800px]">
                <span className="mb-[20px]">Gập một nửa</span>
                <img src={demo2} alt="" />
            </div>
        </div>
    );
}

export default ProductInformation;