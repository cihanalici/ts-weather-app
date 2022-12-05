import styled from "styled-components";

export const Header = styled.div`
  width: 409px;
  padding: 42px 46px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 375px;
    padding: 18px 12px 0px 11px;
  }
`;

export const Button = styled.button`
  width: 161px;
  height: 40px;
  padding: 5px 9px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 161px;
    height: 30px;

    font-size: 12px;
  
  }
`;

export const LIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    color: #e7e7eb;
  }

`;

export const ImgDiv = styled.div`
  background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 100%
    ),
    url("assets/Cloud-background.png");
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: 150%;

  margin-top: 109px;
  text-align: center;
`;

export const Celcius = styled.h2`
  margin-top: 87px;
  text-align: center;
  font-weight: 500;
  font-size: 144px;
  line-height: 169px;
  color: #e7e7eb;
  span {
    font-size: 72px;
    color: #a09fb1;
  }
`;

export const Text = styled.p`
  margin-top: 87px;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  color: #a09fb1;
`;

export const DateText = styled.p`
  margin-top: 30px;
  text-align: center;
  color: #88869d;
`;

export const City = styled.div`
  margin-top: 28px;
  margin-bottom: 20px;
  text-align: center;
  .material-symbols-outlined {
    color: #88869d;
  }
  span {
    color: #88869d;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-left: 10px;
  }
`;
