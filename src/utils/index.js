import Swal from "sweetalert2";
import { movieSer } from "../service/movieSer";


export const swalCustom = (icon, title, time) => {
    return Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: time,
    });
}


export const isValueInArray = (value, array) => array?.includes(value);


export const fetchApiMovie = async (nameUri, params, optional) => {
    try {
        let result = [];
        let res = await movieSer[nameUri]({ maNhom: 'GP01', ...params });
        let data = res.data.content;
        // console.log(data);
        if (data.length > 5 || optional) {
            result = data;
        }
        return result;
    } catch (err) {
        console.log(err);
    }
}


export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const saveLocalStorage = (key, data) => {
    const stringData = JSON.stringify(data);
    return localStorage.setItem(key, stringData);
};
export const formattedDate = () => {
    const currentDate = new Date();

    // Lấy ngày, tháng và năm từ đối tượng Date
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const year = currentDate.getFullYear();

    // Format ngày, tháng và năm thành chuỗi theo định dạng "DD/MM/YYYY"
    const result = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    return result;
}
