import UserService from '../services/UserServices/index.api.js';
import UserStore from './UserStore';
import TodoStore from './TodoStore/TodoStore.js';
import CounterStore from './CounterStore';

import TodoService from '../services/TodoServices/index.api.js';

const counterStore = new CounterStore();

const userService =new UserService();
const userStore = new UserStore(userService);

const todoService = new TodoService();
const todoStore =new TodoStore(todoService);

export default {
  counterStore,
  userStore,
  todoStore,
};
