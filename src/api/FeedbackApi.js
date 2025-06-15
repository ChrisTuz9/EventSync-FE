import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const FeedbackApi = {
    async submitFeedback(eventId, data) {
        return axios.post(`${API_BASE_URL}/events/${eventId}/feedback`, data);
    },
}