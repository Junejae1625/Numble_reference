import styled from "@emotion/styled";

export interface IPropsLayoutSideMenu {
  src: string;
  title?: string;
}

export const MainTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const MainTitle = styled.span`
  font-weight: 500;
  font-size: 11px;
  color: black;
  line-height: 15px;
`;
export const MainTitleImage = styled.img`
  width: 12px;
  height: 13px;
  margin-right: 9px;
`;

const LayoutSideMenu = (props: IPropsLayoutSideMenu) => {
  return (
    <MainTitleWrapper>
      <MainTitleImage src={props.src} />
      <MainTitle>{props.title}</MainTitle>
    </MainTitleWrapper>
  );
};
export default LayoutSideMenu;
