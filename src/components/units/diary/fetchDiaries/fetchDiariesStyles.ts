import styled from "@emotion/styled";

export const DiaryWrapper = styled.div`
  width: 100%;
`;
export const WrapperBox = styled.div`
  width: 100%;
  height: 10px;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const BoardBox = styled.div`
  width: 100%;
  height: 65px;
  border: 1px solid #999;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 11px 25px;
  border-radius: 2px;
`;

export const BoardDate = styled.span`
  background: #55b2d4;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 5px 1px;
  border-radius: 2px;
  color: white;
  width: 73px;
`;

export const BoardTitle = styled.div`
  color: black;
  font-family: "Gill Sans";
  font-size: 12px;
  font-weight: 600;
  margin-top: 7px;
`;

export const BoardClick = styled.div`
  color: #999999;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
  align-self: flex-end;
  position: absolute;
  margin-top: 14px;
  cursor: pointer;
  :hover {
    color: black;
  }
`;
