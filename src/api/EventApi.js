import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`;

export const EventApi = {
    async createEvent(data) {
        return axios.post(`${API_BASE_URL}`, data);
    }
}