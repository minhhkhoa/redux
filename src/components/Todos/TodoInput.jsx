import { useDispatch } from "react-redux";
import { create } from "../../action/todos"


function TodoInput() {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    const content = e.target.elements.content.value; // Lấy giá trị từ input

    dispatch(create(content))

    e.target.elements.content.value = "";
    e.target.elements.content.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="content" placeholder="Enter a task" />
        <button type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </>
  )
}

export default TodoInput;
