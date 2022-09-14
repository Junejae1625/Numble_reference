import { MouseEvent } from "react";

export interface BGMTypes {
  id: number;
  song: string;
  artist: string;
}
export interface homePageProps {
  datalist: any[];
  onClickDataList: (event: MouseEvent<HTMLDivElement>) => void;
  onClickCheckAll: () => void;
  onClickChecked: (item: BGMTypes) => void;
  BGMItem: {
    id: number;
    song: string;
    artist: string;
  }[];
  isChecked: [] | BGMTypes[];
  checked: (item: BGMTypes) => boolean;
}

export interface emotionProps {
  isTitle: boolean;
}
