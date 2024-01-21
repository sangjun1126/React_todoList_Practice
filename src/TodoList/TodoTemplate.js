// Todo의 전체적인 틀을 만들어주는 컴포넌트입니다.
// TodoTemplate의 children을 <div className ="content">안에 넣어주었습니다.

import "../TodoList_scss/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
