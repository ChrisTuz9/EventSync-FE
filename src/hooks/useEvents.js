import { useState, useEffect, useReducer } from "react";
import { EventApi } from "../api/EventApi";
import { eventsReducer, initEventsState, EVENTS_ACTIONS } from "../reducers/eventsReducer";

export function useEvents() {
    const [state, dispatch] = useReducer(eventsReducer, undefined, initEventsState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await EventApi.getAllEvents();
                dispatch({ type: EVENTS_ACTIONS.SET_EVENTS, payload: res.data });
            } catch (err) {
                setError(err?.response?.data?.message || err.message || "Something went wrong")
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const addEvent = (newEvent) => {
        dispatch({ type: EVENTS_ACTIONS.ADD_EVENT, payload: newEvent });
    };

    return { events: state.events, addEvent, loading, error };
}