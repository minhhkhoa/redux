import { useDispatch, useSelector } from "react-redux";
import { complete, undoComplete,  deleted } from "../../action/todos";

function TodoList() {
  const dispatch = useDispatch();

  const handleClick = (type, id) => {
    switch (type) {
      case "complete":
        dispatch(complete(id));
        break;

      case "undoComplete":
        dispatch(undoComplete(id));
        break;

      case "delete":
        dispatch(deleted(id));
        break;
    
      default:
        break;
    }
  }

  const list = useSelector(state => state.todoReducer);
  const empty = list.length > 0;

  return (
    <>
      {empty
        ?
        <div className="list">
          {list.map((item) => (
            <div className="list--item" key={item.id}> {/* Thêm key để đảm bảo React nhận diện phần tử */}
              <h4 className={"list--item" + (item.check ? "--decoration" : "")}>{item.content}</h4>
              {item.check
                ?  //- gach ngang
                <button onClick={() => handleClick("undoComplete", item.id)}>
                  <i className="fa-solid fa-rotate-left"></i>
                </button>
                : //- ko gach ngang
                <button onClick={() => handleClick("complete", item.id)}>
                  <i className="fa-solid fa-check"></i>
                </button>
              }
              <button onClick={() => handleClick("delete", item.id)}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
          ))}
        </div>
        : 'hehe'
      }
    </>
  )
}

export default TodoList;
