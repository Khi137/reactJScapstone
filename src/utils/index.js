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


