import { useReducer } from "react";

const initialState = {
  number1: 0,
  number2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setNumber1":
      return { ...state, number1: action.payload };
    case "setNumber2":
      return { ...state, number2: action.payload };
    case "plus":
      return { ...state, result: state.number1 + state.number2 };
    case "minus":
      return { ...state, result: state.number1 - state.number2 };
    case "multiply":
      return { ...state, result: state.number1 * state.number2 };
    case "divide":
      return {
        ...state,
        result:
          state.number2 === 0
            ? "Không thể chia cho 0"
            : state.number1 / state.number2,
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { number1, number2, result } = state;

  return (
    <>
      <div className="container mx-auto justify-content-center text-center">
        <h1 className="fw-bold">Use Reducer</h1>
        <div className="flex gap-2 justify-center my-5">
          <input
            className="form-control border border-gray rounded-md px-2"
            type="text"
            placeholder="Nhập số thứ nhất"
            value={number1}
            onChange={(e) =>
              dispatch({
                type: "setNumber1",
                payload: parseFloat(e.target.value) || 0,
              })
            }
          />
          <input
            className="form-control border border-gray rounded-md px-2"
            type="text"
            placeholder="Nhập số thứ hai"
            value={number2}
            onChange={(e) =>
              dispatch({
                type: "setNumber2",
                payload: parseFloat(e.target.value) || 0,
              })
            }
          />
          =
          <input
            className="form-control border border-gray rounded-md px-2"
            type="text"
            placeholder="Kết quả"
            value={result}
          />
        </div>
        <div className="flex gap-2 justify-center">
          <button
            className="border border-black rounded-md w-10"
            onClick={() => dispatch({ type: "plus" })}
          >
            +
          </button>
          <button
            className="border border-black rounded-md w-10"
            onClick={() => dispatch({ type: "minus" })}
          >
            -
          </button>
          <button
            className="border border-black rounded-md w-10"
            onClick={() => dispatch({ type: "multiply" })}
          >
            *
          </button>
          <button
            className="border border-black rounded-md w-10"
            onClick={() => dispatch({ type: "divide" })}
          >
            /
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
