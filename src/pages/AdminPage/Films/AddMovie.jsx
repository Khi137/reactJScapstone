import React, { useContext, useState } from "react";
import InputCustom from "../../../components/Input/InputCustom";
import { DatePicker, Switch, Rate } from "antd";
import { useFormik } from "formik";
import { NotifyContext } from "../../../templates/AdminTemplate";
import { movieSer } from "../../../service/movieSer";
import * as Yup from "yup";
import { formattedDate } from "../../../utils/index.js"
const AddMovie = () => {
  const notify = useContext(NotifyContext);
  const [image, setImage] = useState();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      sapChieu: true,
      dangChieu: false,
      hot: true,
      danhGia: 8,
      hinhAnh: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        if (!values.hinhAnh) {
          alert("Bạn phải chọn một hình ảnh trước khi thêm phim!");
          return;
        }

        values.ngayKhoiChieu = formatDate(values.ngayKhoiChieu);
        console.log(values);
        let formData = new FormData();
        for (let key in values) {
          if (key === "hinhAnh") {
            formData.append("File", values[key]);
          } else {
            formData.append(key, values[key]);
          }
        }
        const res = await movieSer.postMovieUploadImage(formData);
        console.log(res);
        resetForm();
        setImage(null);
        notify(
          "Thêm phim thành công"
        );
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object().shape({
      tenPhim: Yup.string().required("Tên phim không được để trống"),
      trailer: Yup.string().required("Link trailer không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      ngayKhoiChieu: Yup.date()
        .required("Ngày khởi chiếu không được để trống")
        .min(new Date(), "Ngày khởi chiếu phải lớn hơn hoặc bằng ngày hiện tại"),

      hinhAnh: Yup.mixed().required("Hình ảnh không được để trống"),
    }),
  });
  // Hàm chuyển đổi ngày thành chuỗi định dạng dd/mm/yyyy
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày và đảm bảo có 2 chữ số
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và đảm bảo có 2 chữ số
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Trả về chuỗi định dạng dd/mm/yyyy
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-8">Thêm phim mới</h1> {/* Tiêu đề trang */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputCustom
          name="tenPhim"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.tenPhim}
          label="Tên phim"
          placeholder="Nhập tên phim"
          error={errors.tenPhim}
          touched={touched.tenPhim}
        />
        <InputCustom
          name="trailer"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.trailer}
          label="Trailer"
          placeholder="Nhập trailer"
          error={errors.trailer}
          touched={touched.trailer}
        />
        <InputCustom
          name="moTa"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.moTa}
          label="Mô tả"
          placeholder="Nhập mô tả"
          error={errors.moTa}
          touched={touched.moTa}
        />
        <div>
          <label className="block">Nhập ngày chiếu</label>
          {/* <DatePicker
            onChange={(datejs, dateString) => {
              setFieldValue("ngayKhoiChieu", dateString);
            }}
            onBlur={() => {

              handleBlur("ngayKhoiChieu");

            }}
            format="DD-MM-YYYY"
          /> */}
          <DatePicker
            onChange={(datejs, dateString) => {
              const selectedDateParts = dateString.split('/');
              const formattedDate = `${selectedDateParts[1]}/${selectedDateParts[0]}/${selectedDateParts[2]}`;
              const selectedDate = new Date(formattedDate);
              const currentDate = new Date(); console.log(selectedDate, "hehehe", currentDate)
              setFieldValue("ngayKhoiChieu", selectedDate);
            }}
            onBlur={() => {
              handleBlur("ngayKhoiChieu");
            }}
            format="DD/MM/YYYY" // Định dạng hiển thị cho DatePicker
          />

          {errors.ngayKhoiChieu && touched.ngayKhoiChieu && (
            <div className="text-red-500">{errors.ngayKhoiChieu}</div>
          )}
        </div>
        <div>
          <label className="block">Đang chiếu</label>
          <Switch
            onChange={(checked, event) => {
              setFieldValue("dangChieu", checked);
            }}
            checked={values.dangChieu}
          />
        </div>
        <div>
          <label className="block">Sắp chiếu</label>
          <Switch
            onChange={(checked, event) => {
              setFieldValue("sapChieu", checked);
            }}
            checked={values.sapChieu}
          />
        </div>
        <div>
          <label className="block">Hot</label>
          <Switch
            onChange={(checked, event) => {
              setFieldValue("hot", checked);
            }}
            checked={values.hot}
          />
        </div>
        <div>
          <label className="block">Đánh giá</label>
          <Rate
            onChange={(value) => {
              setFieldValue("danhGia", value * 2);
            }}
            value={values.danhGia / 2}
            allowHalf
          />
        </div>
        <div>
          <label className="block">Hình ảnh</label>
          <input
            onChange={(event) => {
              let urlImage = URL.createObjectURL(event.target.files[0]);
              setImage(urlImage);
              setFieldValue("hinhAnh", event.target.files[0]);
            }}
            type="file"
          />
          {image && <img className="w-96 mt-2" src={image} alt="" />}
          {errors.hinhAnh && touched.hinhAnh && (
            <div className="text-red-500">{errors.hinhAnh}</div>
          )}
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Thêm phim
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
