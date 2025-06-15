import { useState, useEffect, useReducer } from "react";
import { EventApi } from "../api/EventApi";

const ACTIONS = {
    SET_SUMMARY: "SET_SUMMARY",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_SUMMARY:
            return { ...state, summary: action.payload };
        default:
            return state;
    }
}

export function useSentimentSummary(eventId) {
    const [state, dispatch] = useReducer(reducer, {
        summary: {
            positiveCount: 0,
            neutralCount: 0,
            negativeCount: 0,
        }
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSummary = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await EventApi.getSentimentSummary(eventId);
            dispatch({ type: ACTIONS.SET_SUMMARY, payload: res.data });
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Failed to load sentiment summary.")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSummary();
    }, [eventId]);

    return {
        summary: state.summary,
        loading,
        error,
        refreshSummary: fetchSummary,
    }
}