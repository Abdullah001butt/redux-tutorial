import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: true }; // Update the isDone property
        }
        return todo; // Return the original todo item if it's not the one being marked as done
      });
    },
    moveToTop: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        const index = state.todos.indexOf(todo);
        state.todos.splice(index, 1);
        state.todos.unshift(todo);
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, moveToTop } = todoSlice.actions;
export default todoSlice.reducer;
