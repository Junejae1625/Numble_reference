import * as S from "./homeStyled";
import { homePageProps } from "./homeTypes";
import { v4 as uuidv4 } from "uuid";

export default function HomePresenter(props: homePageProps) {
  return (
    <>
      <S.TitleWrap>
        <S.Title> Update news </S.Title>
        <S.SubTitle>TODAY STORY</S.SubTitle>
      </S.TitleWrap>
      <S.HomeWrap>
        <div>
          {props.datalist &&
            props.datalist.map((item: any) => (
              <S.DiaryListWrap key={uuidv4()}>
                <S.Tag src="/images/tag.svg" />
                <div id={item?.number} onClick={props.onClickDataList}>
                  {item?.title}
                </div>
              </S.DiaryListWrap>
            ))}
        </div>
        <S.MainInfo>
          <S.LineWrap>
            <S.InfoWrap>
              다이어리 <S.Span>0/65</S.Span>
            </S.InfoWrap>
            <S.InfoWrap>
              사진첩 <S.Span>0/265</S.Span>
            </S.InfoWrap>
          </S.LineWrap>
          <S.LineWrap>
            <S.InfoWrap>
              게시판 <S.Span>0/15</S.Span>
            </S.InfoWrap>
            <S.InfoWrap>
              방명록 <S.SpecialSpan>0/15</S.SpecialSpan>{" "}
            </S.InfoWrap>
          </S.LineWrap>
        </S.MainInfo>
      </S.HomeWrap>
      <S.BGMWrap>
        <S.Title> 추억의 BGM</S.Title>
        <S.SubTitle> TODAY CHOICE </S.SubTitle>
      </S.BGMWrap>
      <S.BGMTitle>
        <S.Span1 isTitle={true}>
          <input
            type="checkbox"
            onChange={props.onClickCheckAll}
            checked={props.BGMItem.length === props.isChecked.length}
          />
        </S.Span1>
        <S.Span1 isTitle={true}>번호</S.Span1>
        <S.Span2 isTitle={true}>곡명</S.Span2>
        <S.Span3 isTitle={true}>아티스트</S.Span3>
      </S.BGMTitle>
      {props.BGMItem.map((item, index) => (
        <S.BGMItem key={uuidv4()}>
          <S.Span1 isTitle={false}>
            <input
              type="checkbox"
              onChange={() => props.onClickChecked(item)}
              checked={props.checked(item)}
            />
          </S.Span1>
          <S.Span1 isTitle={false}>{index + 1}</S.Span1>
          <S.Span2 isTitle={false}>{item.song}</S.Span2>
          <S.Span3 isTitle={false}>{item.artist}</S.Span3>
        </S.BGMItem>
      ))}
    </>
  );
}
