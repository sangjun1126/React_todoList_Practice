## React TodoList와 더불어 라우터 기능을 이용해 여러 프로젝트를 합쳐봅시다.

### TodoList 관련 세부 설명

#### TodoTemplate

- 화면을 가운데에 정렬 + 앱 일정관리를 보여주는 컴포넌트 입니다. children으로 내부 JSX를 props로 받아 와서 렌더링 해줍니다.

#### TodoInsert

- 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 input의 상태를 관리합니다.

#### TodoListItem

- 각 할 일 항목에 대한 정보를 보여주는 컴포넌트입니다. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여줍니다.
- UI : User Interface

#### TodoList

- todos 배열을 props로 받아온 후, 이를 배열 내장 함수인 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줍니다.
