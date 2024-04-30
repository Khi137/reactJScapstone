import React, { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { movieSer } from "../../../service/movieSer";
import { useNavigate } from "react-router-dom";

const Films = () => {
  const [movieData, setDataMovie] = useState([]);

  const navigate = useNavigate();

  const fetchMovieData = async () => {
    try {
      const data = await movieSer.getListMovies();


      const newData = data.data.content;
  

      setDataMovie(newData);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const renderTable = () => {
    return movieData.map((movie) => {
      return (
        <tr style={{ height: "150px" }}>
          <td style={{ width: "180px" }} className="text-center">
            {movie.maPhim}
          </td>
          <td>
            <img
              className="mx-auto w-32 h-32 object-cover rounded"
              src={movie.hinhAnh}
              alt=""
            />
          </td>
          <td style={{ width: "240px" }} className="text-center">
            {movie.tenPhim}
          </td>
          <td style={{ width: "530px" }} className="text-center">
            {movie.moTa.substring(0, 100)}...
          </td>
          <td className="text-center space-x-6">
            <button className="text-blue-500 text-2xl">
              <EditOutlined />
            </button>
            <button className="text-red-500 text-2xl">
              <DeleteOutlined />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="text-3xl">Quản lý phim</h1>
        <Button
          type="primary"
          className="mt-3"
          onClick={() => {
            navigate("/admin/addMovies");
          }}
        >
          Thêm phim mới
        </Button>
      </div>
      <div>
        <table className="container table mx-auto mt-4">
          <thead className="m-3">
            <tr>
              <th className="text-center">Mã phim</th>
              <th className="text-center">Hình ảnh</th>
              <th className="text-center">Tên phim</th>
              <th className="text-center">Mô tả</th>
              <th className="text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Films;
