import { getDashboardBriefing } from "@/api/setup";
import { SignalState } from "@/domain/signal/state";
import { GlobalConfig } from "@/global-config";
import { useSuspenseQuery } from "@tanstack/react-query";

export interface IFollowUpSectionData {
  /**
   * 팔로업 ID
   */
  id: string;
  /**
   * 학생 정보
   */
  student: {
    id: string;
    name: string;
  };
  label: {
    /**
     * 라벨 상태
     */
    status: SignalState;
    text: string;
  };
  /**
   * 팔로업 내용
   */
  content: string;
  /**
   * 생성일시
   */
  createdAt: Date;
  /**
   * 다음 팔로업 일시
   */
  scheduledAt: Date;
}

export const useFollowUpSection = (selectedDate: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useFollowUpSection", selectedDate],
    queryFn: async () => {
      return fetch(selectedDate);
    },
  });

  return {
    data,
  };
};

const fetch = async (selectedDate: string): Promise<IFollowUpSectionData[]> => {
  /**
   * Production 모드 데이터 반환
   */
  if (GlobalConfig.apiMode === "production") {
    try {
      const { data } = await getDashboardBriefing({
        query: {
          date: selectedDate,
        },
      });

      const items = data?.reminders ?? [];

      const models: IFollowUpSectionData[] = items.map((item) => {
        return {
          id: item.reminderId,
          student: {
            id: item.studentId,
            name: item.studentName ?? "",
          },
          label: {
            status: SignalState.Danger,
            text: item.latestIntervention.type,
          },
          content: item.latestIntervention.summary,
          createdAt: new Date(item.latestIntervention.createdAt),
          scheduledAt: new Date(item.scheduledAt),
        };
      });

      return models;
    } catch {
      return [];
    }
  }

  return mocks;
};

const mocks: IFollowUpSectionData[] = [
  {
    id: "reminder-1",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd4",
      name: "박서연",
    },
    label: {
      status: SignalState.Positive,
      text: "경과 양호",
    },
    content:
      "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
    createdAt: new Date("2026-08-22T10:30:00"),
    scheduledAt: new Date("2026-08-30T10:00:00"),
  },
  {
    id: "reminder-2",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd1",
      name: "김민준",
    },
    label: {
      status: SignalState.Warning,
      text: "재검토",
    },
    content:
      "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
    createdAt: new Date("2026-08-23T14:00:00"),
    scheduledAt: new Date("2026-08-31T10:00:00"),
  },
  {
    id: "reminder-3",
    student: {
      id: "019fd78d-deb7-772c-89e1-318d374a6dd4",
      name: "박서연",
    },
    label: {
      status: SignalState.Danger,
      text: "결과 부정확",
    },
    content:
      "6/26 상담 이후: 제출률 50%→100% · 정답률 62%→74% · 풀이시간 정상 범위",
    createdAt: new Date("2026-08-24T09:15:00"),
    scheduledAt: new Date("2026-09-01T10:00:00"),
  },
];
