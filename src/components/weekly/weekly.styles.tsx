import styled from "styled-components";

export const WContainer = styled.div`
  width: auto;
  height: auto;
  background: #100e1d;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const DegreeDiv = styled.div`
  color: white;
  display: flex;
  gap: 12px;
  margin: 42px 125px 0 70%;

  @media (max-width: 768px) {
    margin: 42px 0 0 0;
    justify-content: center;
  }
`;

export const Celcius = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #e7e7eb;
  border-radius: 50px;
  color: #110e3c;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Fahreneit = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #585676;
  border-radius: 50px;
  color: #e7e7eb;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const DayCards = styled.div`
  margin: 0 123px 0px;
  display: flex;
  gap: 26px;

  @media (max-width: 768px) {
    margin: 0 0 0 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Heading = styled.h2`
  margin: 72px 0px 0px 130px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #e7e7eb;

  @media (max-width: 768px) {
    margin: 72px 0px 0px 0px;
    text-align: center;
  }
`;

export const Contents = styled.div`
  margin: 32px 123px;
  display: flex;
  

  flex-wrap: wrap;
  gap: 48px;

  @media (max-width: 768px) {
    margin: 32px 0px;
    justify-content: center;
  }

`;

export const Content = styled.div`
  width: 250px;
  height: 180px;

  background: #1e213a;

  border-radius: 10px;
  
  @media (max-width: 768px) {
    width: 161px;
    height: 204px;
  }
`;

export const Text = styled.p`
  margin: 22px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #e7e7eb;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const InnerText = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 55px;
  text-align: center;
  span {
    font-size: 64px;

    font-weight: 700;
  }

  color: #e7e7eb;

  @media (max-width: 768px) {
    font-size: 24px;
    span {
      font-size: 36px;
    }
  }
`;

export const Outer = styled.p`
  margin: 18px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #e7e7eb;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Footer = styled.div`

  margin: 0 123px 0px;

  gap: 26px;
  color: #A09FB1;

  a {
    text-decoration: underline;
    color: #A09FB1;
  }

  @media (max-width: 768px) {
    margin: 0 0 0 0;
    justify-content: center;
    flex-wrap: wrap;
  } 
`;