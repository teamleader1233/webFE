import React, { useRef } from "react";
import * as yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const EditBill = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const isOpen = useRef();
  const schema = yub.object().shape({
    code: yub.string(),
    status: yub.string().required("Vui Lòng Nhập Trường Này."),
    area: yub.string().required("Vui Lòng Nhập Trường Này."),
    quantity: yub.string().required("Vui Lòng Nhập Trường Này."),
    total_price: yub.string().required("Vui Lòng Nhập Trường Này."),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      code: state.id,
      status: state.status,
      area: state.current_location,
      total_price: state.total_price,
      quantity: state.quantity,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const token = cookies.get("access");

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.patch(
        `http://127.0.0.1:8000/bills/${data.code}`,

        {
          status: data.status,
          current_location: data.area,
          quantity: data.quantity,
          total_price: parseInt(data.total_price),
        },
        {
          headers,
        }
      );

      toast.success("Chỉnh Sửa Thành Công !");
      navigate(-1);
    } catch (e) {
      toast.error("Chỉnh Sửa Thất Bại ");
    }
  };
  return (
    <div className="w-full flex justify-center flex-col px-[40px] items-center">
      <div className="flex space-x-3 place-content-center my-[20px]">
        <div className=" flex items-center">
          <div className="w-[60px] h-[2px] bg-[#d11908] rounded-md"></div>
        </div>

        <div>
          <h1 className="text-center font-medium text-[22px]  tracking-wider  text-[#d11908]">
            Chỉnh Sửa Đơn Hàng
          </h1>
        </div>
        <div className=" flex items-center">
          <div className="w-[60px] h-[2px] bg-[#d11908] rounded-md"></div>
        </div>
      </div>
      <form
        className="w-4/5 flex-col text-start "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center w-full">
          <div className="mb-[10px] ">
            <div className="flex py-[2px] bg-white w-[600px] border-b-[1px] border-solid border-[#363636a3] items-center ">
              <label htmlFor="code">
                <div className="w-[180px] break-normal"> Mã Sản Phẩm</div>
              </label>

              <Controller
                control={control}
                name="code"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="true"
                    register={register}
                    errors={errors}
                    placeholder="Nhập Mã Sản Phẩm..."
                    dataInput="code"
                  />
                )}
              />
            </div>
          </div>
          <div className="mb-[10px] relative select-none">
            <div className="flex py-[2px] bg-white w-[600px] border-b-[1px] border-solid border-[#363636a3] items-center relative z-30 ">
              <label htmlFor="status">
                <div className="w-[180px] break-normal">
                  {" "}
                  Trạng Thái Sản Phẩm
                </div>
              </label>

              <Controller
                control={control}
                name="status"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="true"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Nhập Trạng Thái Sản Phẩm..."
                    dataInput="status"
                  />
                )}
              />
              <i
                class="bi bi-chevron-down absolute right-[14px] top-[16px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  isOpen.current?.classList.toggle("hidden");
                }}
              ></i>
            </div>
            <p className="text-red-400 text-left">{errors.status?.message}</p>
            <div
              ref={isOpen}
              className="hidden absolute right-0 left-[180px] bg-[#fd9c41] text-white  rounded-sm overflow-hidden"
            >
              <div
                className="hover:bg-[#f8b98f] px-[10px] py-[6px]   cursor-pointer"
                onClick={(e) => {
                  setValue("status", "pending");
                  e.stopPropagation();
                  isOpen.current?.classList.add("hidden");
                }}
              >
                pending
              </div>
              <div
                className="hover:bg-[#f8b98f] px-[10px] py-[6px]   cursor-pointer"
                onClick={(e) => {
                  setValue("status", "delivered");
                  e.stopPropagation();
                  isOpen.current?.classList.add("hidden");
                }}
              >
                delivered
              </div>
              <div
                className="hover:bg-[#f8b98f] px-[10px] py-[6px]   cursor-pointer"
                onClick={(e) => {
                  setValue("status", "paid");
                  e.stopPropagation();
                  isOpen.current?.classList.add("hidden");
                }}
              >
                paid
              </div>
              <div
                className="hover:bg-[#f8b98f] px-[10px] py-[6px]   cursor-pointer"
                onClick={(e) => {
                  setValue("status", "canceled");
                  e.stopPropagation();
                  isOpen.current?.classList.add("hidden");
                }}
              >
                canceled
              </div>
            </div>
          </div>
          <div className="mb-[10px] ">
            <div className="flex py-[2px] bg-white w-[600px] border-b-[1px] border-solid border-[#363636a3] items-center ">
              <label htmlFor="area">
                <div className="w-[180px] break-normal">
                  {" "}
                  Địa Điểm Hiện Tại Của Sản Phẩm
                </div>
              </label>

              <Controller
                control={control}
                name="area"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Nhập Địa Điểm Hiện Tại Của Sản Phẩm..."
                    dataInput="area"
                  />
                )}
              />
            </div>
            <p className="text-red-400 text-left">{errors.area?.message}</p>
          </div>

          <div className="mb-[10px] ">
            <div className="flex py-[2px] bg-white w-[600px] border-b-[1px] border-solid border-[#363636a3] items-center ">
              <label htmlFor="quantity">
                <div className="w-[180px] break-normal"> Số Lượng Sản Phẩm</div>
              </label>

              <Controller
                control={control}
                name="quantity"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Nhập Số Lượng Sản Phẩm..."
                    dataInput="quantity"
                  />
                )}
              />
            </div>
            <p className="text-red-400 text-left">{errors.quantity?.message}</p>
          </div>
          <div className="mb-[10px] ">
            <div className="flex py-[2px] bg-white w-[600px] border-b-[1px] border-solid border-[#363636a3] items-center ">
              <label htmlFor="total_price">
                <div className="w-[180px] break-normal">
                  {" "}
                  Tổng Giá Trị Sản Phẩm{" "}
                </div>
              </label>

              <Controller
                control={control}
                name="total_price"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Nhập Giá Trị Sản Phẩm..."
                    dataInput="total_price"
                  />
                )}
              />
            </div>
            <p className="text-red-400 text-left">
              {errors.total_price?.message}
            </p>
          </div>
        </div>
        <div className="flex justify-end my-[40px]">
          <button
            type="submit"
            className="bg-[#e6712c] text-white mr-[20px] py-[8px] px-[10px] rounded-md text-[18px] hover:shadow-[0_0px_10px_2px_#E46000E8] transition-all duration-100"
          >
            Xác Nhận
          </button>
          <div
            onClick={() => navigate(-1)}
            className="bg-[#aeaeae] text-white py-[8px] px-[10px] rounded-md text-[18px] cursor-pointer hover:opacity-80 transition-all duration-100"
          >
            Hủy{" "}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBill;
