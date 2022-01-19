import axiosClient from "../../config/axiosClient";

export const resetPassword = async (email, password) => {
    const resp = await axiosClient.put('/user/reset', {
        email, password,
    });
    return resp.data;
}
