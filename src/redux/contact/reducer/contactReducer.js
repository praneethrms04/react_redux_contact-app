const initialState = [
  {
    id: 0,
    name: "abc",
    email: "abc@gmail.com",
    phone: 1234567890,
  },
  {
    id: 1,
    name: "xyz",
    email: "xyz@gmail.com",
    phone: 9876543210,
  },
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const deleteState = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = deleteState;
      return state;
    default:
      return state;
  }
};
/**const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;*/
export default contactReducer;
