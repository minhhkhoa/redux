const init = [
  {
    id: 1,
    content: "Cong viec 1",
    check: false
  },
  {
    id: 2,
    content: "Cong viec 2",
    check: true
  },
  {
    id: 3,
    content: "Cong viec 3",
    check: false
  },
]

const todoReducer = (state = init, action) => {
  let newState = [...state];
  switch (action.type) {
    case "create":
      return [
        ...newState,
        {
          id: Date.now(),
          content: action.content,
          check: false
        }
      ];

    case "complete": {
      const indexComplete = newState.findIndex(item => item.id == action.id);
      if (indexComplete !== -1) {
        newState[indexComplete] = {
          ...newState[indexComplete], // Tạo bản sao mục cần cập nhật
          check: true
        };
      }
      return newState;
    }

    case "undoComplete": {
      const indexUndoComplete = newState.findIndex(item => item.id == action.id);
      if (indexUndoComplete !== -1) {
        newState[indexUndoComplete] = {
          ...newState[indexUndoComplete], // Tạo bản sao mục cần cập nhật
          check: false
        };
      }
      return newState;
    }

    case "delete": 
      newState = newState.filter(item => item.id != action.id)
      return newState;

    default:
      return state; // Trả về state hiện tại nếu không khớp với hành động nào
  }
};

export default todoReducer;
