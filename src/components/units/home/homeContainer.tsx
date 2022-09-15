import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { FETCH_BOARDS } from "../diary/fetchDiaries/fetchDiariesQuery";
import HomePresenter from "./homePresenter";
import { BGMTypes } from "./homeTypes";

const BGMItem = [
  { id: 0, song: "눈의꽃", artist: "박효신" },
  { id: 1, song: "사랑스러워", artist: "김종국" },
  { id: 2, song: "내사람:Partner For Life", artist: "SG워너비" },
  { id: 3, song: "Love Love Love", artist: "에픽하이" },
  { id: 4, song: "애인있어요", artist: "이은미" },
  { id: 5, song: "눈의꽃", artist: "박효신" },
  { id: 6, song: "사랑스러워", artist: "김종국" },
  { id: 7, song: "내사람:Partner For Life", artist: "SG워너비" },
  { id: 8, song: "Love Love Love", artist: "에픽하이" },
  { id: 9, song: "애인있어요", artist: "이은미" },
];

export default function HomeContainer() {
  const [isChecked, setIsChecked] = useState<BGMTypes[] | []>([]);
  const { data } = useQuery(FETCH_BOARDS);

  const datalist = [];
  for (let i = 0; i < 4; i++) {
    datalist.push(data?.fetchBoards[i]);
  }
  const router = useRouter();
  const onClickDataList = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement)
      router.push(`/diary/${event.target.id}`);
  };

  const onClickCheckAll = () => {
    if (isChecked.length !== BGMItem.length) {
      setIsChecked(BGMItem);
    } else {
      setIsChecked([]);
    }
  };

  const onClickChecked = (item: BGMTypes) => {
    if (isChecked.every((el) => el.id !== item.id)) {
      setIsChecked([...isChecked, item]);
    } else {
      const result = isChecked.filter((el) => el.id !== item.id);
      setIsChecked(result);
    }
  };

  const checked = (item: BGMTypes) => {
    return isChecked.some((el) => el.id === item.id);
  };

  return (
    <HomePresenter
      datalist={datalist}
      onClickDataList={onClickDataList}
      onClickCheckAll={onClickCheckAll}
      onClickChecked={onClickChecked}
      BGMItem={BGMItem}
      isChecked={isChecked}
      checked={checked}
    />
  );
}
