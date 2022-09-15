import styled from "@emotion/styled";
import { emotionProps } from "./homeTypes";

export const TitleWrap = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  padding-bottom: 1.5px;
  border-bottom: 1.5px solid black;
`;
export const Title = styled.div`
  color: #55b2d4;
  font-family: "Gill Sans";
  font-weight: 600;
  font-size: 15px;
  margin-right: 6px;
`;
export const SubTitle = styled.span`
  font-family: "Gill Sans";
  color: black;
  font-weight: 330;
  font-size: 8px;
  margin-bottom: 3px;
`;
export const HomeWrap = styled.div`
  display: flex;
`;
export const DiaryListWrap = styled.div`
  width: 253px;
  padding: 3px;
  font-size: 8px;
  font-weight: 400;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Tag = styled.img`
  margin-right: 5px;
  width: 40px;
  height: 14.5px;
`;
export const DiaryTitle = styled.div`
  font-family: "Gill Sans";
  font-weight: 400;
  font-size: 12px;
  width: 300px;
  height: 15px;
  overflow: hidden;
  line-height: 18px;
`;
export const MainInfo = styled.div`
  width: 194px;
  height: 60px;
  border-top: dotted 1.5px #999999;
  border-bottom: dotted 1.5px #999999;
  font-size: 8px;
`;
export const LineWrap = styled.div`
  width: 194px;
  display: flex;
  border-bottom: dotted 1.5px #999999;
  justify-content: space-between;
  padding-right: 15px;
`;
export const InfoWrap = styled.div`
  font-family: "Gill Sans";
  font-weight: 500;
  padding: 3px 0;
  font-size: 10px;
`;
export const Span = styled.span`
  color: #55b2d4;
  margin-left: 9px;
`;
export const SpecialSpan = styled.span`
  color: #55b2d4;
  margin-left: 7px;
  margin-right: 8px;
`;
export const BGMWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 25px;
  margin-top: 21px;
  margin-bottom: 8px;
`;
export const BGMTitle = styled.div`
  border-top: 2.5px solid #999999;
  border-bottom: 2.5px solid #999999;
  background-color: #eee;
  margin-top: 2px;
  display: flex;
  align-items: center;
`;
export const BGMItem = styled.div`
  display: flex;
  border-bottom: dotted 1px #999999;
  align-items: center;
`;
export const Span1 = styled.div`
  width: 50px;
  text-align: center;
  font-family: "Gill Sans";
  font-size: 13px;
  color: ${(props: emotionProps) => (props.isTitle ? "#99999" : "#0F465E")};
  font-weight: ${(props: emotionProps) => props.isTitle && "600"};
`;
export const Span2 = styled.div`
  width: 220px;
  font-family: "Gill Sans";
  padding-left: 10px;
  color: ${(props: emotionProps) => (props.isTitle ? "#99999" : "#0F465E")};
  font-size: 13px;
  font-weight: ${(props: emotionProps) => props.isTitle && "600"};
`;
export const Span3 = styled.div`
  font-family: "Gill Sans";
  color: ${(props: emotionProps) => (props.isTitle ? "#99999" : "#0F465E")};
  font-size: 13px;
  font-weight: ${(props: emotionProps) => props.isTitle && "600"};
`;
