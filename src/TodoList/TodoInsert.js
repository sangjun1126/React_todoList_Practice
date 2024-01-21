// 해당 컴포넌트는 입력받는 부분과 해당 기능에 대해서 구현되어 있는 컴포넌트입니다.
// useState를 사용하여 value의 상태를 관리합니다.
// onChange 함수는 input 값을 변경하기 위해 사용했습니다.
// 함수는 바뀌지 않으면, 재사용 가능하므로 mount 될 경우 한 번만 만들어지도록 useCallback을 사용해주었습니다.
// onSubmit 함수가 실행되면 onInsert 함수를 실행하고 value의 상태를 ''로 만들어줍니다.
// e.preventDefault()를 사용해 화면이 넘어가지 않도록 해줍니다.
// 함수 내에서 onInsert 함수와 value를 사용하므로 해당 값이 바뀔 떄만 새로 생성하게 해주었습니다.

import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../TodoList_scss/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
