import { ChangeEvent, RefObject } from "react";

export interface IPropsGamePresenter {
  startWord: string;
  onChangeWord: (event: ChangeEvent<HTMLInputElement>) => void;
  lottoNumbers: number[];
  onClickLotto: () => void;
  onClickSearch: () => void;
  result: string;
  inputRef: RefObject<HTMLInputElement>;
}
