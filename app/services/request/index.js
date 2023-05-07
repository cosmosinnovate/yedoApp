import axios from "axios";

export const postRequest = async (url, data) => {
    try {
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (e) {
        return e;
    }
}

export const patchRequest = async (url, data) => {
    try {
        const response = await axios.patch(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (e) {
        return e;
    }
}

export const uploadFile = async (url, data) => {
    try {
        const response = await axios.patch(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (e) {
        return e;
    }
}