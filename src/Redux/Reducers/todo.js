const initialState = {
  data: [
    {
      id: Math.random().toString(),
      name: "waqas tahir",
      email: "waqas@gmail.com",
    },
    {
      id: Math.random().toString(),
      name: "zeeshan tahir",
      email: "zeeshan@gmail.com",
    },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("addstate", action.message);
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
      };
    case "UPDATE_TODO":
      // debugger;
      console.log("updatestate", action.message);

      return {
        ...state,
        data: [
          ...state.data.map((todo) =>
            todo.id === action.id ? action.message : todo
          ),
        ],
      };

    default:
      return state;
  }
};

export default todo;
