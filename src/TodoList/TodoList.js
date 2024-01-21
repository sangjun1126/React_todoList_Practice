// TodoList는 할 일 목록을 보여주는 컴포넌트입니다.
// props로 todo와 onRemove, onToggle을 받습니다.
// todos는 할 일들을 가지고 있습니다. map을 사용해서 todos안의 객체 수 만큼 TodoListItem을 만들어줍니다.

import TodoListItem from "./TodoListItem";
import "../TodoList_scss/TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
