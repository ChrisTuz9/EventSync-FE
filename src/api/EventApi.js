import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/events`;

export const EventApi = {
    async createEvent(data) {
        return axios.post(`${API_BASE_URL}`, data);
    },
    
    async getAllEvents() {
        return axios.get(`${API_BASE_URL}`);
    },

    async getSentimentSummary(eventId) {
        return axios.get(`${API_BASE_URL}/${eventId}/summary`);
    },
}