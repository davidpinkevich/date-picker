import styled from "styled-components";

const StyledFallback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 250px;
`;

const StyledFallbackTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.mainRed};
`;

const StyledFallbackText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export { StyledFallback, StyledFallbackTitle, StyledFallbackText };
