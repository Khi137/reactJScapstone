import { createSlice } from "@reduxjs/toolkit";
import { avatarComment } from "../../assets/img/js/img";


const initialState = {
  dataComment: [
    {
      id: 1,
      name: "Dương Như",
      content: "Rạp ở đây màn hình rất rõ nét, âm thanh sống động",
      hinhAnh:
        avatarComment[0],
      statusLike: true,
      numberLike: 24,
    },
    {
      id: 2,
      name: "Trần Anh",
      content: "Bắp nước ở đây rất hợp khẩu vị, thường xuyên có khuyến mãi",
      hinhAnh:
      avatarComment[1],
      statusLike: false,
      numberLike: 16,
    },
  ],
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    likeCommentAction: (state, action) => {
      let cloneDataComment = [...state.dataComment];
      let index = cloneDataComment.findIndex(
        (dataComment) => dataComment.id == action.payload
      );
      if (index != -1) {
        cloneDataComment[index].statusLike =
          !cloneDataComment[index].statusLike;
      }
      if (cloneDataComment[index].statusLike) {
        cloneDataComment[index].numberLike++;
      } else {
        cloneDataComment[index].numberLike--;
      }
      state = { ...state, dataComment: cloneDataComment };
    },

    submitCommentAction: (state, action) => {
      state.dataComment.unshift(action.payload);
      state = { ...state };
    },
  },
});

export const { likeCommentAction, submitCommentAction } = commentSlice.actions;

export default commentSlice.reducer;
