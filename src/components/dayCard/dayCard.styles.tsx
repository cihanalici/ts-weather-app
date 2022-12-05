import styled from "styled-components";

export const Card = styled.div`
  width: 120px;
  height: 177px;
  color: white;
  background: #1e213a;

  @media (max-width: 768px) {
    width: 100px;
    height: 150px;
  }
`;

export const DateText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 18px;

  color: #e7e7eb;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DailyImage = styled.img`
  width: 56.44px;
  height: 62px;
  margin: 10px 32px 0px;

  @media (max-width: 768px) {
    width: 40px;
    height: 44px;
    margin: 10px 30px 0px;
  }
`;

export const Range = styled.div`
  margin: 15px 21px 0px 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 10px 15px 0px 15px;
  }
`;

export const UpRange = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DownRange = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a09fb1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;