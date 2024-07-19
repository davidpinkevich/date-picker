import React, { type ChangeEvent, useEffect, useState } from "react";

import { LIMIT_RANDOM } from "constants/data";
import { getRandomId } from "utils/getRandomId";
import { getTargetKey } from "utils/getTargetKey";
import { CrossImg } from "assets/icons/cross";

import { TodoHeader } from "./TodoHeader/TodoHeader";
import { TodoItem } from "./TodoItem/TodoItem";
import { type TypeTodo } from "./TodoItem/TodoItem.types";
import {
  StyledAddBtn,
  StyledCloseBtn,
  StyledTodoInput,
  StyledTodoList,
  StyledTodoUl
} from "./TodoList.styled";
import { type PropsTodoList } from "./TodoList.types";

const TodoList: React.FC<PropsTodoList> = ({
  targetDay,
  viewTodo,
  setViewTodo,
  todos,
  setTodos
}) => {
  const [input, setInput] = useState("");

  const handleClose = () => {
    setViewTodo(false);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || {};
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: TypeTodo = {
      text: input,
      resolve: false,
      id: getRandomId(LIMIT_RANDOM)
    };

    const dateKey = getTargetKey(targetDay);

    if (input.trim().length) {
      setTodos({
        ...todos,
        [dateKey]: [...(todos[dateKey] || []), newTodo]
      });

      setInput("");
    }
  };

  const handleStatusChange = (index: number) => {
    setTodos({
      ...todos,
      [getTargetKey(targetDay)]: todos[getTargetKey(targetDay)]?.map(
        (todo, i) => (i === index ? { ...todo, resolve: !todo.resolve } : todo)
      )
    });
  };

  const handleDeleteTodo = (index: number) => {
    setTodos({
      ...todos,
      [getTargetKey(targetDay)]: todos[getTargetKey(targetDay)]?.filter(
        (_, i) => index !== i
      )
    });
  };

  return (
    <StyledTodoList $viewTodo={viewTodo}>
      <StyledCloseBtn onClick={handleClose}>
        <CrossImg />
      </StyledCloseBtn>
      <TodoHeader targetDay={targetDay} />
      <StyledTodoInput type="text" value={input} onChange={handleInput} />
      <StyledAddBtn onClick={handleAddTodo}>Add Todo</StyledAddBtn>
      {viewTodo && (
        <StyledTodoUl>
          {todos[getTargetKey(targetDay)]?.map(
            ({ text, resolve, id }, index) => (
              <TodoItem
                key={id}
                text={text}
                resolve={resolve}
                handleStatusChange={() => handleStatusChange(index)}
                handleDeleteTodo={() => handleDeleteTodo(index)}
              />
            )
          )}
        </StyledTodoUl>
      )}
    </StyledTodoList>
  );
};

export { TodoList };
