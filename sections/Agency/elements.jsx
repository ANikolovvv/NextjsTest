import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 70vh;
`;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1px;
  width: 100%;
`;
