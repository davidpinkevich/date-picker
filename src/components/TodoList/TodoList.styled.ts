import styled from "styled-components";

const StyledTodoList = styled.div<{ $viewTodo: boolean }>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.mainDark};
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #bbbbbb;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  right: ${(props) => (props.$viewTodo ? "0%" : "-100%")};
  top: 0;
  transition: all 0.2s;
`;

const StyledTodoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-ms-scrollbar {
    width: 0px;
  }
`;

const StyledCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: inherit;
  width: 20px;
  height: 20px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.15);
  }

  & svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledAddBtn = styled.button`
  background-color: inherit;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSizes.todoListBtnAdd};
  font-weight: 600;
  width: 100%;
  height: 38px;
  padding: 10px 15px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledTodoInput = styled.input`
  font-size: ${(props) => props.theme.fontSizes.todoListInput};
  border: 1px solid #bbbbbb;
  padding: 10px 15px;
  border-radius: 8px;
  width: 100%;
  transition: all 0.2s;

  &:focus {
    box-shadow: inset 0px 0px 1px 1px #bbbbbb;
  }
`;

export {
  StyledAddBtn,
  StyledCloseBtn,
  StyledTodoInput,
  StyledTodoList,
  StyledTodoUl
};
