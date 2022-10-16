import axios from "axios";

const instance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

instance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `BEARER ${window.localStorage.getItem("token")}`,
  };
  return config;
});

export const api = {
  signUp: (email, password) =>
    instance.post("auth/signup", { email, password }),
  signIn: (email, password) =>
    instance.post("auth/signin", { email, password }),
  createTodo: (todo) => instance.post("todos", { todo }),
  getTodo: () => instance.get("todos"),
  updateTodo: (id, todo, isCompleted) =>
    instance.put(`todos/${id}`, { todo, isCompleted }),
  deleteTodo: (id) => instance.delete(`todos/${id}`),
};
