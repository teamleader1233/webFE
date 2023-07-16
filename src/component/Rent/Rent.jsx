import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import Footer from "../Footer/Footer";
const Rent = () => {
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
    // collection: yub
    //   .number("vui lòng nhập số ")
    //   .positive("Vui lòng nhập số dương")
    //   .integer("Vui lòng nhập kiểu số dương"),
    // valueProduct: yub
    //   .number()
    //   .positive("Vui lòng nhập số dương")
    //   .integer("Vui lòng nhập kiểu số dương"),
    // detailProduct: yub.string(),
    // note: yub.string(),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
      name: "",
      address: "",
      building: "",
      wards: "",
      district: "",
      city: "",
      nameProduct: "",
      weight: "",
      quantity: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    alert("success");
  };
  return (
    <div>
      <div className="w-full flex justify-center">
        <form className="w-4/5   " onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mt-[40px] mb-[20px] text-[32px] font-semibold text-left">
            {" "}
            Người Nhận
          </h1>
          {/* header  */}
          <div>
            <div className="mb-[10px]">
              <div className="flex py-[4px] bg-white w-[380px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                <label htmlFor="phoneNumber">
                  <i class="bi bi-telephone-fill pr-[16px] "></i>
                </label>

                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field: { onChange } }) => (
                    <Input
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
            <div className="mb-[10px]">
              <div className="flex py-[4px] bg-white  w-[380px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                <label htmlFor="name">
                  <i class="bi bi-person-fill-add pr-[16px]"></i>
                </label>

                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange } }) => (
                    <Input
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
            <div className="mb-[10px]">
              <div className="flex py-[4px] bg-white  w-[380px] border-b-[1px] border-solid border-[#363636a3] mb-[10px] items-center">
                <label htmlFor="address">
                  <i class="bi bi-house-door-fill pr-[16px]"></i>
                </label>

                <Controller
                  control={control}
                  name="address"
                  render={({ field: { onChange } }) => (
                    <Input
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
          {/* main  */}
          <div className="flex justify-between mt-[40px] sm:flex-col xl:flex-row flex-wrap">
            <div className="flex flex-col items-center relative mx-[20px] mb-[20px]">
              <i className="bi bi-geo-alt-fill text-[40px] "></i>
              <div className="w-[60px] h-[40px] rounded-[50%] border-solid border-[black] border-[1px] absolute top-[40px] "></div>
            </div>
            <div className="xl:mr-[20px]">
              <div className="border-solid border-[1px] border-[#363636a3] sm:full  xl:w-[500px] mt-[20px]">
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
              <div className="border-solid border-[1px] border-[#363636a3] sm:full  xl:w-[500px] mt-[20px]">
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
                    />
                  )}
                />
              </div>
              <p className="text-red-400 text-left">{errors.city?.message}</p>
            </div>
          </div>
          {/* img  */}
          <div className="flex w-full mt-[60px] ">
            <div className="grow-[2] border-b-[1px] border-t-[1px] border-l-[1px] border-solid border-[#363636a3] min-w-[160px] flex justify-center items-center">
              <input type="file" />
            </div>
            <div className="flex flex-col grow-[8] border-[1px] border-solid border-[#363636a3]">
              <div className="border-b-[1px] border-solid border-[#363636a3] py-[20px] relative">
                <Controller
                  control={control}
                  name="nameProduct"
                  render={({ field: { onChange } }) => (
                    <Input
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
                name="valueProduct"
                render={({ field: { onChange } }) => (
                  <Input
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Giá Trị Hàng Hóa (VNĐ)"
                    dataInput="valueProduct"
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
                    register={register}
                    onChange={onChange}
                    errors={errors}
                    placeholder="Mô tả Hàng Hóa"
                    dataInput="detailProduct"
                  />
                )}
              />
            </div>
            <div className="border-b-[1px] border-solid border-[#363636a3]">
              <Controller
                control={control}
                name="note"
                render={({ field: { onChange } }) => (
                  <Input
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
            <button
              type="submit"
              className="bg-[#E46000E0] inline-block text-white px-[18px] py-[10px] rounded-md text-[24px] cursor-pointer active:shadow-[0_0px_10px_6px_#F46000E8] hover:shadow-[0_0px_10px_2px_#E46000E8] transition-all ease-in-out duration-200 select-none"
            >
              Tạo Đơn Đăng Kí
            </button>
          </div>
        </form>
      </div>
      <div className="border-t-[1px] border-solid border-[#363636a3]">
        <Footer />
      </div>
    </div>
  );
};

export default Rent;
