import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            state.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, toggleTodo, removeTodo} = todosSlice.actions
export default todosSlice.reducer;