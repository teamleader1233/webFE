import React from "react";


const Evaluate = () => {
    return (
        <div className="w-[100%] ">
            <div className="w-[100%] flex flex-col justify-center">
                <span className="text-[30px] flex justify-center">5.5</span>
                <div className="flex justify-center">
                    <div className="text-orange-300 flex text-[20px]">
                        <i className="bi bi-star-fill m-[5px]"></i>
                        <i className="bi bi-star-fill m-[5px]"></i>
                        <i className="bi bi-star-fill m-[5px]"></i>
                        <i className="bi bi-star-fill m-[5px]"></i>
                        <i className="bi bi-star-fill m-[5px]"></i>
                        <i className="bi bi-star m-[5px]"></i>
                    </div>
                </div>
                <span className="flex justify-center mb-[7px]">40 đánh giá</span>
                <div className=" flex flex-col align-middle">
                    <div className="flex justify-center">
                        <div className="mr-[10px] w-[40px]">
                            <span className="">6</span>
                            <i className="bi bi-star-fill m-[6px] text-orange-300"></i>
                        </div>
                        <div className="w-[200px] h-[10px] bg-[#eceef3] rounded-[10px] mt-[6px]">
                            <div className="h-[100%] w-[145px] bg-[#e86757] rounded-[10px]"></div>
                        </div>
                        <span className="ml-[10px]">29</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-[10px] w-[40px]">
                            <span className="">5</span>
                            <i className="bi bi-star-fill m-[6px] text-orange-300"></i>
                        </div>
                        <div className="w-[200px] h-[10px] bg-[#eceef3] rounded-[10px] mt-[6px]">
                            <div className="h-[100%] w-[40px] bg-[#e86757] rounded-[10px]"></div>
                        </div>
                        <span className="ml-[10px]">8</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-[10px] w-[40px]">
                            <span className="">4</span>
                            <i className="bi bi-star-fill m-[6px] text-orange-300"></i>
                        </div>
                        <div className="w-[200px] h-[10px] bg-[#eceef3] rounded-[10px] mt-[6px]">
                            <div className="h-[100%] w-[5px] bg-[#e86757] rounded-[10px]"></div>
                        </div>
                        <span className="ml-[10px]">1</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-[10px] w-[40px]">
                            <span className="">3</span>
                            <i className="bi bi-star-fill m-[6px] text-orange-300"></i>
                        </div>
                        <div className="w-[200px] h-[10px] bg-[#eceef3] rounded-[10px] mt-[6px]">
                            <div className="h-[100%] w-[5px] bg-[#e86757] rounded-[10px]"></div>
                        </div>
                        <span className="ml-[10px]">1</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-[10px] w-[40px]">
                            <span className="">2</span>
                            <i className="bi bi-star-fill m-[6px] text-orange-300"></i>
                        </div>
                        <div className="w-[200px] h-[10px] bg-[#eceef3] rounded-[10px] mt-[6px]">
                            <div className="h-[100%] w-[0px] bg-[#e86757] rounded-[10px]"></div>
                        </div>
                        <span className="ml-[10px]">0</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="mr-[10px] w-[40px]">
                            <span className="">1</span>
                            <i className="bi bi-star-fill m-[6px] text-orange-300"></i>
                        </div>
                        <div className="w-[200px] h-[10px] bg-[#eceef3] rounded-[10px] mt-[6px]">
                            <div className="h-[100%] w-[5px] bg-[#e86757] rounded-[10px]"></div>
                        </div>
                        <span className="ml-[10px]">1</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[30px]">
                <div className="w-[80%] h-[1px] bg-black"></div>
            </div>
            <div className="flex justify-center mt-[30px]">
                <div className="w-[70%] h-[110px] bg-[#f9f9f9] flex">
                    <div className="bg-red h-[100%] pl-[30px] pt-[15px] w-[140px]">
                        <span>Xem theo:</span>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                Tất cả
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                Mới nhất
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                6 sao (29)
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                5 sao (8)
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                4 sao (1)
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                3 sao (1)
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                2 sao (0)
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                1 sao (1)
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                Có bình luận
                            </div>
                        </div>
                        <div className="h-[20px] ml-[30px] mt-[10px] ">
                            <div className="py-[5px] px-[30px] border-[#dcdfe6] border-solid border-[1px] rounded-[5px]">
                                Có hình ảnh
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[50px]">
                <div className="w-[80%] h-[1000px] border-black border-solid border-[1px] relative">
                    <div className=" flex flex-col">
                        <div className=" w-[80%] bg-red h-auto flex  mt-[40px] ml-[40px]">
                            <div className=" w-[80px] h-[80px] rounded-[50%] bg-[#d9d9d9] mr-[30px]"></div>
                            <div>
                                <div>
                                    <span>người dùng</span>
                                </div>
                                <div className="text-orange-300 flex text-[20px]">
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                </div>
                                <span>XX/XX/2023 </span>
                                <div>
                                    <span className="font-medium text-[18px]">Sản phẩm như cứt, thật tuyệt vời</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[80%] bg-red h-auto flex  mt-[40px] ml-[40px]">
                            <div className=" w-[80px] h-[80px] rounded-[50%] bg-[#d9d9d9] mr-[30px]"></div>
                            <div>
                                <div>
                                    <span>người dùng</span>
                                </div>
                                <div className="text-orange-300 flex text-[20px]">
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                </div>
                                <span>XX/XX/2023 </span>
                                <div>
                                    <span className="font-medium text-[18px]">Sản phẩm như cứt, thật tuyệt vời</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[80%] bg-red h-auto flex  mt-[40px] ml-[40px]">
                            <div className=" w-[80px] h-[80px] rounded-[50%] bg-[#d9d9d9] mr-[30px]"></div>
                            <div>
                                <div>
                                    <span>người dùng</span>
                                </div>
                                <div className="text-orange-300 flex text-[20px]">
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                </div>
                                <span>XX/XX/2023 </span>
                                <div>
                                    <span className="font-medium text-[18px]">Sản phẩm như cứt, thật tuyệt vời</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[80%] bg-red h-auto flex  mt-[40px] ml-[40px]">
                            <div className=" w-[80px] h-[80px] rounded-[50%] bg-[#d9d9d9] mr-[30px]"></div>
                            <div>
                                <div>
                                    <span>người dùng</span>
                                </div>
                                <div className="text-orange-300 flex text-[20px]">
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                </div>
                                <span>XX/XX/2023 </span>
                                <div>
                                    <span className="font-medium text-[18px]">Sản phẩm như cứt, thật tuyệt vời</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-[80%] bg-red h-auto flex  mt-[40px] ml-[40px]">
                            <div className=" w-[80px] h-[80px] rounded-[50%] bg-[#d9d9d9] mr-[30px]"></div>
                            <div>
                                <div>
                                    <span>người dùng</span>
                                </div>
                                <div className="text-orange-300 flex text-[20px]">
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                    <i className="bi bi-star-fill m-[5px]"></i>
                                </div>
                                <span>XX/XX/2023 </span>
                                <div>
                                    <span className="font-medium text-[18px]">Sản phẩm như cứt, thật tuyệt vời</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mr-[30px] mt-[170px]">
                        <span className="text-[18px]">...nhập bình luận</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Evaluate;