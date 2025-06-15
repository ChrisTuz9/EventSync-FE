export const EVENTS_ACTIONS = {
  SET_EVENTS: "SET_EVENTS",
  ADD_EVENT: "ADD_EVENT",
};

export function eventsReducer(state, action) {
  switch (action.type) {
    case EVENTS_ACTIONS.SET_EVENTS:
      return { ...state, events: action.payload };
    case EVENTS_ACTIONS.ADD_EVENT:
      return { ...state, events: [action.payload, ...state.events] };
    default:
      return state;
  }
}

export function initEventsState() {
  return {
    events: [],
  };
}
