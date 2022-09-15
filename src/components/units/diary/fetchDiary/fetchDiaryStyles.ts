import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Date = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 650;
  color: #666666;
  background-color: #dddddd;
  padding: 6px 17px 5px 17px;
`;

export const Title = styled.div`
  font-family: "Gill Sans";
  color: black;
  width: 80%;
  text-align: center;
  overflow: hidden;
  font-size: 16px;
  font-weight: 600;
  margin-top: 27px;
`;

export const Contents = styled.div`
  font-family: "Gill Sans";
  color: #666666;
  width: 100%;
  height: 133px;
  font-size: 14px;
  font-weight: 350;
  margin-top: 26px;
  padding: 0px 48px;
  overflow: hidden;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

export const EditBtn = styled.button`
  width: 70px;
  height: 23px;
  border: 1px solid lightgray;
  background-color: #d9d9d9;
  border-radius: 3px;
  font-size: 12px;
  color: #5f5f5f;
  font-weight: 600;
  margin-right: 28px;
  cursor: pointer;
  :hover {
    background-color: #5f5f5f;
    color: #d9d9d9;
  }
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 23px;
  border: 1px solid lightgray;
  background-color: #d9d9d9;
  font-size: 12px;
  color: #5f5f5f;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: #5f5f5f;
    color: #d9d9d9;
  }
`;

export const ListBtn = styled.div`
  font-family: "Gill Sans";
  font-size: 13px;
  font-weight: 600;
  color: #666666;
  text-decoration: underline;
  cursor: pointer;
`;
