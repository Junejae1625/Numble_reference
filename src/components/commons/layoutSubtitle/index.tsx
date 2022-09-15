import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IPropsLayoutSubTitle {
  mainTitle: string;
  subTitle: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 28px;
  border-bottom: 1px solid #ababab;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const MainTitleSpan = styled.span`
  color: #55b2d4;
  font-family: "Gill Sans";
  font-weight: 600;
  font-size: 15px;
  margin-right: 6px;
`;
const SubTitleSpan = styled.span`
  font-family: "Gill Sans";
  color: black;
  font-weight: 330;
  font-size: 8px;
  margin-bottom: 1px;
`;

const WriteDiaryBtn = styled.button`
  width: 90px;
  margin-left: auto;
  cursor: pointer;
  height: 22px;
  padding: 2px 1px 1px 1px;
  font-weight: 500;
  font-size: 11px;
  color: #020101;
  background-color: #fff;
  border: 1px solid darkgray;
  border-radius: 5px;
  transition: 0.1s;
  :hover {
    background-color: #999;
    color: #eee;
  }
`;

export const WriteTitle = styled.div`
  color: #55b2d4;
  font-size: 13px;
  font-weight: 700;
`;

const LayoutSubTitle = (props: IPropsLayoutSubTitle) => {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("/diary/new");
  };

  return (
    <Wrapper>
      <TitleBox>
        <MainTitleSpan>{props.mainTitle}</MainTitleSpan>
        <SubTitleSpan>{props.subTitle}</SubTitleSpan>
      </TitleBox>
      {router.asPath === "/diary/new" && <WriteTitle>| 글 등록</WriteTitle>}
      {router.asPath.includes("edit") && <WriteTitle>| 글 수정</WriteTitle>}
      {props.subTitle === "TODAY STORY" && (
        <WriteDiaryBtn onClick={onClickWrite}>다이어리 작성</WriteDiaryBtn>
      )}
    </Wrapper>
  );
};

export default LayoutSubTitle;
