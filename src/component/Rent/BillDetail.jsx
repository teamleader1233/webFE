import React, { useEffect, useRef } from "react";
import { Controller, set, useForm } from "react-hook-form";
import * as yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import Footer from "../Footer/Footer";
import { useState } from "react";
import axios from "axios";
import InforBill from "./InforBill";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const BillDetail = () => {
  const navigate = useNavigate();

  const area = useRef();
  const { state } = useLocation();
  console.log(state);
  const [address] = useState(() => {
    return state.delivery_address.split("/");
  });

  const handleSelect = () => {
    area.current.classList.toggle("hidden");
  };
  const schema = yub.object().shape({
    phoneNumber: yub.string().required("Vui lòng nhập số điện thoại."),
    name: yub.string().required("Vui lòng nhập tên."),
    address: yub.string().required("Vui lòng nhập địa chỉ"),
    building: yub.string().required("Vui lòng nhập thông tin "),
    wards: yub.string().required("Vui lòng nhập thông tin này"),
    district: yub.string().required("Vui lòng nhập thông tin này"),
    city: yub.string().required("Vui lòng nhập thông tin này"),
    nameProduct: yub.string().required("Vui lòng nhập tên sản phẩm"),
    weight: yub
      .number()
      .positive("Vui lòng nhập số dương")

      .required("Vui lòng nhập khối lượng")
      .typeError("Vui lòng nhập khối lượng"),
    quantity: yub
      .number()
      .positive("Vui lòng nhập số dương")

      .required("Vui lòng nhập số lượng")
      .typeError("Vui lòng nhập số lượng"),
    senderPhoneNumber: yub.string().required("Vui lòng nhập số điện thoại."),
    senderName: yub.string().required("Vui lòng nhập tên."),
    senderAddress: yub.string().required("Vui lòng nhập địa chỉ"),
    collection: yub.string(),
    priceProduct: yub.string(),
    detailProduct: yub.string().required("Vui lòng nhập thông tin này"),
    note: yub.string(),
  });

  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phoneNumber: state.receiver_phone,
      name: state.receiver_name,
      address: state.receiver_address,
      senderPhoneNumber: state.sender_phone,
      senderName: state.sender_name,
      senderAddress: state.sender_address,
      building: address[0],
      wards: address[1],
      district: address[2],
      city: address[3],
      nameProduct: state.product_name,
      weight: state.product_weight,
      quantity: state.quantity,
      collection: state.precollected_price,
      priceProduct: state.total_price,
      detailProduct: state.product_description,
      note: state.note,
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setValue("phoneNumber", state.receiver_phone);
    setValue("name", state.receiver_name);
    setValue("address", state.receiver_address);
    setValue("senderPhoneNumber", state.sender_phone);
    setValue("senderName", state.sender_name);
    setValue("senderAddress", state.sender_address);
    setValue("building", address[0]);
    setValue("wards", address[1]);
    setValue("district", address[2]);
    setValue("city", address[3]);
    setValue("nameProduct", state.product_name);
    setValue("weight", state.product_weight);
    setValue("quantity", state.quantity);
    setValue("collection", state.precollected_price);
    setValue(
      "priceProduct",
      state.total_price !== 0
        ? " " +
            state.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
            " VND"
        : 0
    );
    setValue("detailProduct", state.product_description);
    setValue("note", state.note);
  }, []);
  const editData = async (dataCreate) => {
    const token = cookies.get("access");
    console.log(dataCreate);
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.patch(
        `http://127.0.0.1:8000/bills/${state.id}`,
        { dataCreate },
        {
          headers,
        }
      );

      toast.success("EDIT Thành Công");
      navigate("/");
    } catch (e) {
      toast.error("EDIT Không Thành Công");
    }
  };
  const onSubmit = (data) => {
    const dataCreate = {
      sender_name: data.senderName,
      sender_phone: data.senderPhoneNumber,
      sender_address: data.senderAddress,
      receiver_name: data.name,
      receiver_phone: data.phoneNumber,
      receiver_address: data.address,
      product_name: data.nameProduct,
      product_price: parseInt(data.priceProduct) || 0,
      product_weight: data.weight.toString(),
      product_description: data.detailProduct,
      delivery_address: `${data.building}/${data.wards}/${data.district}/${data.city}`,
      quantity: parseInt(data.quantity),
      status: "pending",
      total_price: parseInt(data.priceProduct) || 0,
    };
    editData(dataCreate);
  };
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className="w-full flex justify-center ">
        <form className="w-4/5 " onSubmit={handleSubmit(onSubmit)}>
          {/* header  */}
          <div className="text-left font-medium text-[20px] mt-[28px]">
            Mã Đơn Hàng : <span className="text-[red]">{state.id}</span>
          </div>
          <div className="flex justify-between max-[1280px]:flex-col max-[1280px]:items-center px-[20px]">
            <div>
              <h1 className="mt-[40px] mb-[20px] text-[32px] font-semibold text-center lg:text-left">
                {" "}
                Người Nhận
              </h1>
              <div className="mb-[10px] flex justify-center lg:block">
                <div className="flex py-[4px] bg-white w-[320px]  lg:w-[420px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center ">
                  <label htmlFor="phoneNumber">
                    <i className="bi bi-telephone-fill pr-[16px] "></i>
                  </label>

                  <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Nhập Số Điện Thoại Của khách Hàng"
                        dataInput="phoneNumber"
                      />
                    )}
                  />
                </div>
                <p className="text-red-400 text-left">
                  {errors.phoneNumber?.message}
                </p>
              </div>
              <div className="mb-[10px] flex justify-center lg:block">
                <div className="flex py-[4px] bg-white  w-[320px]  lg:w-[420px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                  <label htmlFor="name">
                    <i className="bi bi-person-fill-add pr-[16px]"></i>
                  </label>

                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Tên Khách Hàng"
                        dataInput="name"
                      />
                    )}
                  />
                </div>
                <p className="text-red-400 text-left">{errors.name?.message}</p>
              </div>
              <div className="mb-[10px] flex justify-center lg:block">
                <div className="flex py-[4px] bg-white  w-[320px]  lg:w-[420px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                  <label htmlFor="address">
                    <i className="bi bi-house-door-fill pr-[16px]"></i>
                  </label>

                  <Controller
                    control={control}
                    name="address"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Địa Chỉ"
                        dataInput="address"
                      />
                    )}
                  />
                </div>
                <p className="text-red-400 text-left">
                  {errors.address?.message}
                </p>
              </div>
            </div>
            <div>
              <h1 className="mt-[40px] mb-[20px] text-[32px] font-semibold text-center lg:text-left">
                {" "}
                Người Gửi
              </h1>
              <div className="mb-[10px] flex justify-center lg:block">
                <div className="flex py-[4px] bg-white  w-[320px]  lg:w-[420px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                  <label htmlFor="senderPhoneNumber">
                    <i className="bi bi-telephone-fill pr-[16px] "></i>
                  </label>

                  <Controller
                    control={control}
                    name="senderPhoneNumber"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Nhập Số Điện Thoại Của khách Hàng"
                        dataInput="senderPhoneNumber"
                      />
                    )}
                  />
                </div>
                <p className="text-red-400 text-left">
                  {errors.senderPhoneNumber?.message}
                </p>
              </div>
              <div className="mb-[10px] flex justify-center lg:block">
                <div className="flex py-[4px] bg-white  w-[320px]  lg:w-[420px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                  <label htmlFor="senderName">
                    <i className="bi bi-person-fill-add pr-[16px]"></i>
                  </label>

                  <Controller
                    control={control}
                    name="senderName"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Tên Khách Hàng"
                        dataInput="senderName"
                      />
                    )}
                  />
                </div>
                <p className="text-red-400 text-left">
                  {errors.senderName?.message}
                </p>
              </div>
              <div className="mb-[10px] flex justify-center lg:block">
                <div className="flex py-[4px] bg-white  w-[320px]  lg:w-[420px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                  <label htmlFor="senderAddress">
                    <i className="bi bi-house-door-fill pr-[16px]"></i>
                  </label>

                  <Controller
                    control={control}
                    name="senderAddress"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Địa Chỉ"
                        dataInput="senderAddress"
                      />
                    )}
                  />
                </div>
                <p className="text-red-400 text-left">
                  {errors.senderAddress?.message}
                </p>
              </div>
            </div>
          </div>
          {/* main  */}
          <div className="lg:flex justify-between mt-[40px] sm:flex-col xl:flex-row flex-wrap">
            <div className="flex flex-col items-center relative mx-[20px] mb-[20px]">
              <i className="bi bi-geo-alt-fill text-[40px] text-[#d83716] "></i>
              <div className="w-[60px] h-[40px] rounded-[50%] border-solid border-[#d83716] border-[1px] absolute top-[40px] "></div>
              <div className="mt-[40px]">Địa Điểm Nhận Hàng </div>
            </div>
            <div className="xl:mr-[20px]">
              <div className="border-solid border-[1px] border-[#363636a3] sm:w-full  xl:w-[500px] mt-[20px]">
                <Controller
                  control={control}
                  name="building"
                  render={({ field: { onChange } }) => (
                    <Input
                      register={register}
                      onChange={onChange}
                      errors={errors}
                      placeholder="Tòa Nhà/Hẻm/Đường"
                      dataInput="building"
                      isdisabled="false"
                    />
                  )}
                />
              </div>
              <p className="text-red-400 text-left">
                {errors.building?.message}
              </p>
              <div className="border-solid border-[1px] border-[#363636a3] sm:full  xl:w-[500px] mt-[20px]">
                <Controller
                  control={control}
                  name="wards"
                  render={({ field: { onChange } }) => (
                    <Input
                      isdisabled="false"
                      register={register}
                      onChange={onChange}
                      errors={errors}
                      placeholder="Quận/Huyện"
                      dataInput="wards"
                    />
                  )}
                />
              </div>
              <p className="text-red-400 text-left">{errors.wards?.message}</p>
            </div>
            <div>
              <div className="border-solid border-[1px] border-[#363636a3] sm:full  xl:w-[500px] mt-[20px]">
                <Controller
                  control={control}
                  name="district"
                  render={({ field: { onChange } }) => (
                    <Input
                      isdisabled="false"
                      register={register}
                      onChange={onChange}
                      errors={errors}
                      placeholder="Phường/Xã"
                      dataInput="district"
                    />
                  )}
                />
              </div>
              <p className="text-red-400 text-left">
                {errors.district?.message}
              </p>
              <div
                className="border-solid border-[1px] border-[#363636a3] sm:full  xl:w-[500px] mt-[20px] relative cursor-pointer "
                onClick={() => {
                  handleSelect();
                }}
              >
                <Controller
                  control={control}
                  name="city"
                  render={({ field: { onChange } }) => (
                    <Input
                      register={register}
                      onChange={onChange}
                      errors={errors}
                      placeholder="Tỉnh/Tp"
                      dataInput="city"
                      isdisabled="true"
                    />
                  )}
                />
                <div className="absolute top-[12px] right-[8px]">
                  <i className="bi bi-caret-down-fill"></i>
                </div>
                <div
                  ref={area}
                  className="hidden cursor-pointer absolute flex flex-col bg-[#ff9232] left-0 right-0 z-10 text-left overflow-hidden rounded-md text-white "
                >
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Hà Nội")}
                  >
                    Hà Nội
                  </span>
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Bắc Ninh")}
                  >
                    Bắc Ninh
                  </span>
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Hà Nam")}
                  >
                    Hà Nam
                  </span>
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Nam Định")}
                  >
                    Nam Định
                  </span>
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Thái Bình")}
                  >
                    Thái Bình
                  </span>
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Hải Phòng")}
                  >
                    Hải Phòng
                  </span>
                  <span
                    className="py-[8px] px-[14px] hover:bg-[#cc7428]"
                    onClick={() => setValue("city", "Trung Quốc")}
                  >
                    Trung Quốc
                  </span>
                </div>
              </div>
              <p className="text-red-400 text-left">{errors.city?.message}</p>
            </div>
          </div>
          {/* img  */}
          <div className="flex w-full mt-[60px] ">
            <div className="grow-[2] border-b-[1px] border-t-[1px] border-l-[1px] border-solid border-[#363636a3] min-w-[160px] flex justify-center items-center">
              <input isdisabled="false" type="file" />
            </div>
            <div className="flex flex-col grow-[8] border-[1px] border-solid border-[#363636a3]">
              <div className="border-b-[1px] border-solid border-[#363636a3] py-[20px] relative">
                <Controller
                  control={control}
                  name="nameProduct"
                  render={({ field: { onChange } }) => (
                    <Input
                      isdisabled="false"
                      register={register}
                      onChange={onChange}
                      errors={errors}
                      placeholder="Tên Hàng Hóa"
                      dataInput="nameProduct"
                    />
                  )}
                />
                <p className="text-red-400 absolute left-2 ">
                  {errors.nameProduct?.message}
                </p>
              </div>
              <div className="flex py-[20px] ">
                <div className="grow-[1] relative">
                  <Controller
                    control={control}
                    name="weight"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Khối Lượng ( Tấn )"
                        dataInput="weight"
                      />
                    )}
                  />
                  <p className="text-red-400 absolute left-2">
                    {errors.weight?.message}
                  </p>
                </div>
                <div className="grow-[1] relative border-l-[1px] border-solid border-[#363636a3]">
                  <Controller
                    control={control}
                    name="quantity"
                    render={({ field: { onChange } }) => (
                      <Input
                        isdisabled="false"
                        register={register}
                        onChange={onChange}
                        errors={errors}
                        placeholder="Số Lượng"
                        dataInput="quantity"
                      />
                    )}
                  />
                  <p className="text-red-400 absolute left-2">
                    {errors.quantity?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* information product  */}
          <div className="mt-[60px] w-[400px] max-[1280px]:w-full">
            <div className="border-b-[1px] border-solid border-[#363636a3]">
              <Controller
                control={control}
                name="collection"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Thu Hộ (VNĐ)"
                    dataInput="collection"
                  />
                )}
              />
            </div>

            <div className="border-b-[1px] border-solid border-[#363636a3]">
              <Controller
                control={control}
                name="priceProduct"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Giá Trị Hàng Hóa (VNĐ)"
                    dataInput="priceProduct"
                  />
                )}
              />
            </div>
            <div className="border-b-[1px] border-solid border-[#363636a3]">
              <Controller
                control={control}
                name="detailProduct"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Mô tả Hàng Hóa"
                    dataInput="detailProduct"
                  />
                )}
              />
            </div>
            <p className="text-red-400 text-left ml-2">
              {errors.detailProduct?.message}
            </p>
            <div className="border-b-[1px] border-solid border-[#363636a3]">
              <Controller
                control={control}
                name="note"
                render={({ field: { onChange } }) => (
                  <Input
                    isdisabled="false"
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Ghi Chú"
                    dataInput="note"
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-center mb-[60px] mt-[20px]">
            {/* <button
              onClick={(e) => e.stopPropagation()}
              type="submit"
              className="bg-[#ff9232] inline-block text-white px-[18px] py-[10px] rounded-md text-[24px] cursor-pointer active:shadow-[0_0px_10px_6px_#F46000E8] hover:shadow-[0_0px_10px_2px_#E46000E8] transition-all ease-in-out duration-200 select-none"
            >
              Chỉnh Sửa
            </button> */}
          </div>
        </form>
      </div>
      <div className="border-t-[1px] border-solid border-[#363636a3]">
        <Footer />
      </div>
    </div>
  );
};

export default BillDetail;
