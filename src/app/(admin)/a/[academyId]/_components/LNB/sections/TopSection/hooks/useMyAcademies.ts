const SERVER_DATA = [
  {
    label: "가상융합기술 아카데미",
    value: "019f8999-3914-7607-8135-51ef9d1466ea",
  },
  { label: "메가스터디 종로점", value: "019f8999-4c92-73d8-ae5f-572c22b0523a" },
];

/**
 * 내 학원 목록
 */
export const useMyAcademies = (): { label: string; value: string }[] => {
  return SERVER_DATA;
};
