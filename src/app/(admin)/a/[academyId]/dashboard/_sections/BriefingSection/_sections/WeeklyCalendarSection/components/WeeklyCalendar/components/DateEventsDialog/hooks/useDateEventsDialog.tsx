import { getDashboardBriefing } from "@/api/setup";
import { SignalState } from "@/domain/signal/state";
import { GlobalConfig } from "@/global-config";
import { useSuspenseQuery } from "@tanstack/react-query";

export type DateEventsDialogItemModel = {
  id: string;
  type: "signal" | "todo" | "followUp";
  title: string;
  caption: string;
  label: {
    status: SignalState;
    text: string;
  };
  content: string;
};

export const useDateEventsDialog = (selectedDate: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["useDateEventsDialog", selectedDate],
    queryFn: async () => {
      return fetch(selectedDate);
    },
  });

  return {
    data,
  };
};

const fetch = async (
  selectedDate: string,
): Promise<DateEventsDialogItemModel[]> => {
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

      const items1: DateEventsDialogItemModel[] = data!.alerts.map((it) => {
        const status: SignalState = (() => {
          /**
           * signalType
           * acc_drop // 정답률 하락 (Danger)
           * submit_drop // 과제 제출 저하 (Danger)
           * volume_gap // 학습 활동량 감소 (Danger)
           * hidden_risk // 숨은 위험 신호 (Warning)
           * return_care // 복귀 케어 (Default)
           * type_bias // 유형별 취약 신호 (Warning)
           */
          switch (it.signalType) {
            case "acc_drop":
              return SignalState.Danger;
            case "submit_drop":
              return SignalState.Danger;
            case "volume_gap":
              return SignalState.Danger;
            case "hidden_risk":
              return SignalState.Warning;
            case "return_care":
              return SignalState.Default;
            case "type_bias":
              return SignalState.Warning;
            default:
              return SignalState.Default;
          }
        })();

        return {
          id: it.alertId,
          type: "signal",
          title: it.studentName ?? "",
          caption: it.createdAt,
          label: {
            status,
            text: it.displayLabel,
          },
          content: it.brief,
        };
      });

      const items2: DateEventsDialogItemModel[] = data!.todos.map((it) => {
        return {
          id: it.todoId,
          type: "todo",
          title: it.text,
          caption: it.createdAt,
          label: {
            status: SignalState.Default,
            text: it.displayLabel,
          },
          content: it.text,
        };
      });

      const items3: DateEventsDialogItemModel[] = data!.reminders.map((it) => {
        return {
          id: it.reminderId,
          type: "followUp",
          title: it.studentName ?? "",
          caption: it.latestIntervention.createdAt,
          label: {
            status: SignalState.Default,
            text: it.latestIntervention.type,
          },
          content: it.latestIntervention.summary,
        };
      });

      const models: DateEventsDialogItemModel[] = [
        ...items1,
        ...items2,
        ...items3,
      ];

      return models;
    } catch {
      return [];
    }
  }

  return mocks;
};

const mocks: DateEventsDialogItemModel[] = [];
