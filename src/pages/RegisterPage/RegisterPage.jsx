import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { registerThunk } from "../../redux/userReducer/userThunk";
import { backGroundLogin } from "../../assets/img/js/img";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
import FormInputCustom from "../../components/Input/FormInputCustom";



const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const message = [
    "Vui lòng điền thông tin",
    "Tối thiểu bốn ký tự",
    "Mật khẩu phải ít nhất 4 ký tự gồm chữ, số, in hoa và kí tự đặc biệt",
    "Email chưa đúng định dạng",
    "Vui lòng nhập đúng số điện thoại",
    "không được vượt 16 ký tự",
    "Chỉ nhập chữ",
    "Không được chứa khoảng trắng và kí tự đặc biệt",
  ];

  const formRegister = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
      isRegister: true
    },

    

    onSubmit: (value) => {
      formRegister.values.isRegister = true
      let navigateCustom = () => {
        navigate("/auth/login");
      };
      dispatch(registerThunk({ value, navigateCustom }));
    },

    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .min(4, message[1])
        .max(16, `Tài khoản ${message[5]}`)
        .matches(/^[a-zA-Z0-9_]*$/, message[7])
        .required(message[0]),
      matKhau: yup
        .string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
          message[2]
        )
        .required(message[0]),
      email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, message[3])
        .required(message[0]),
      soDt: yup
        .string()
        .matches(/^(?:\+?84|0)(\d{9,10})$/, message[4])
        .required(message[0]),
      hoTen: yup
        .string()
        .min(4, message[1])
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          message[6]
        )
        .required(message[0]),
    }),
  });
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundLogin})`,
        backgroundSize: "150%",
        backgroundPosition: "center",
      }}
      className="relative w-screen h-screen"
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className="absolute  top-5 left-5  xl:text-5xl md:text-2xl text-2xl text-blue-300 font-extrabold cursor-pointer opacity-70"
      >
        <div
          className="flex justify-between items-center"
        >
          <img src={logo} className="md:w-16 w-7" alt="" />
          <span>Cinema</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <form
          onSubmit={formRegister.handleSubmit}
          className="flex items-center justify-center xl:w-1/2 md:w-1/2 w-4/5 md:px-8  xl:py-8 py-8 md:py-12  bg-[rgba(0,0,0,.75)] z-10"
        >
          {/* // form Input ---------------------- */}
          <div className="xl:w-2/3  md:w-full w-2/3 xl:space-y-2 md:space-y-2 space-y-2">
            <h1 className="xl:text-4xl md:text-3xl text-2xl  xl:mb-10 md:mb-7 mb-6 text-white  font-sans">
              Đăng ký
            </h1>
            {/* USER NAME  */}
            <FormInputCustom
              name="taiKhoan"
              label="Tài khoản"
              formikField={formRegister}
            />
            {/* PASSWWORD  */}
            <FormInputCustom
              name="matKhau"
              label="Mật khẩu"
              formikField={formRegister}
              type="password"
            />
            {/* //EMAIL  */}
            <FormInputCustom
              name="email"
              label="Email"
              formikField={formRegister}
            />
            {/* //SỐ ĐIỆN THOẠI */}
            <FormInputCustom
              name="soDt"
              label="Số điện thoại"
              formikField={formRegister}
            />
            {/* //HỌ TÊN  */}
            <FormInputCustom
              name="hoTen"
              label="Họ Tên"
              formikField={formRegister}
            />



            <button
              type="submit"
              className=" xl:w-full md:w-full w-full  xl:text-lg md:text-lg text-lg   xl:px-4 md:px-4 px-3 xl:py-4 md:py-4 py-2 text-white hover:text-white  bg-blue-700  hover:bg-blue-800  transition rounded-xl"
            >
              Đăng ký
            </button>



            <div className=" text-right  xl:px-5 md:px-5 px-0 xl:text-base md:text-base text-xs text-gray-400">
              Bạn đã có tài khoản?{" "}
              <span
                onClick={() => {
                  navigate("/auth/login");
                }}
                className="text-blue-400 hover:text-blue-600 font-medium cursor-pointer duration-150"
              >
                Đăng nhập
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
