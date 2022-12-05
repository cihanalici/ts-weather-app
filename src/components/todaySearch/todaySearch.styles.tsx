import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
`;

export const Close = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 46px 0px 381px;

  span {
    color: #e7e7eb;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
  color: white;
  margin: 82px 46px 0px 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  .material-symbols-outlined {
    position: absolute;
    left: 15px;
    top: 15px;
    bottom: 15.94px;
    color: #616475;
  }


`;
export const SearchInput = styled.input`
  width: 268px;
  height: 48px;
  border: 1px solid #e7e7eb;
  background: #1e213a;
  color: #616475;
  padding: 14px 0px 15px 49px;
`;
export const SearchBtn = styled.button`
  width: 86px;
  height: 48px;
  background: #3c47e9;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  padding: 14px 14px 15px 16px;
  cursor: pointer;
`;

export const SearchResult = styled.div`
  cursor: pointer;
  width: 367px;
  height: 64px;
  margin: 58px 46px 0;
  border: 1px solid #616475;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #e7e7eb;
    padding: 23px 0px 22px 12px;
  }
  span {
    color: #616475;
    font-weight: 700;
    padding-right: 16px;
  }

  &:hover {
    background: #616475;
  }

  @media (max-width: 768px) {
    width: 351px;
  }

`;

export const SearchHistory = styled.div`
  margin-top: 50px;
  p {
    color: #e7e7eb;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding: 0px 0px 72px 58px;
  }
`;
