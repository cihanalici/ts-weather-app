import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 1200px;
  }
`;
