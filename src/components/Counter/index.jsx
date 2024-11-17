import { useDispatch, useSelector } from "react-redux";
import { up, down, reset } from "../../action/counter";

function Counter() {

  //- dungf useSelector de lay ra cac state tu store
  //- hay khi nay state = store (ma store dang la allReducers)
  const counter = useSelector(state => state.counterReducer);

  //-dispatch
  const dispatch = useDispatch();

  return (
    <>
    <h2>Counter: {counter}</h2>
    {/* khi nhấn nút thì action được gửi tới Store thông qua dispatch */}
      <button onClick={() => dispatch(up())}>UP</button>
      <button onClick={() => dispatch(down())}>DOWN</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  )
}

export default Counter;