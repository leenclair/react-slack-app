import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentChatRoom: {
        createdBy: {
            image: '',
            name: ''
        },
        description: '',
        id: '',
        name: ''
    },
    isPrivateChatRoom: false,
    userPost: null
}


export const chatRoomSlice = createSlice({
    name: "chatRoom",
    initialState,
    reducers: {}
})

export default chatRoomSlice.reducer;