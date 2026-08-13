import { XIcon } from "lucide-react";

import { Button } from "@/ui/components/Button";
import { Input } from "@/ui/components/Input";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

const SUGGESTION_CHIPS = [
  "선지 자연스럽게",
  "발문 간결하게",
  "차단되는 요청 예시",
];

const MOCK_USER_MESSAGE = `What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

const MOCK_AI_MESSAGE = `Where does it come from?

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

const MOCK_QUESTION = {
  statusLabel: "검증 통과",
  title: "Q1. 다음 중 음운 변동의 유형이 나머지와 다른것은?",
  choices: Array.from({ length: 5 }, (_, index) => ({
    label: "국물 → 궁물",
    isSelected: index === 0,
  })),
  rationale: "기준 자료의 비음화 탈락 항목",
};

const QuestionChoiceItem = ({
  label,
  isSelected = false,
}: {
  label: string;
  isSelected?: boolean;
}) => (
  <div
    data-variant={isSelected ? "Active" : "Default"}
    className={cn(
      // 1. Layout
      "flex h-12 w-full flex-col items-start justify-center px-3",
      // 3. Color
      isSelected ? "bg-ods__blue-40" : "bg-white",
      // 4. Shadow & Border
      "border-ods__border rounded-lg border",
      // 6. Utility
      "overflow-hidden",
    )}
  >
    <span
      className={cn(
        // 2. Typography
        "ods__typo__body-medium w-full",
        // 3. Color
        "text-ods__base-700",
      )}
    >
      {label}
    </span>
  </div>
);

export const QuestionUpdateDialog = () => {
  return (
    <div
      className={cn(
        // 1. Layout
        "flex h-256 w-360 flex-col items-start justify-start gap-6 p-6",
        // 3. Color
        "bg-white",
        // 6. Utility
        "overflow-hidden",
      )}
    >
      {/* Header Section */}
      <div
        className={cn(
          "flex w-full items-center justify-start gap-2",
          "overflow-hidden",
        )}
      >
        <div className={cn("flex flex-1 items-start justify-start")}>
          <span
            className={cn(
              // 2. Typography
              "ods__typo__title-large text-center",
              // 3. Color
              "text-ods__base-500",
            )}
          >
            AI로 문항 수정하기
          </span>
        </div>

        <button
          type="button"
          aria-label="닫기"
          className={cn(
            // 1. Layout
            "flex items-center justify-center p-1",
            // 3. Color
            "text-ods__base-400",
            // 4. Shadow & Border
            "rounded-full",
            // 5. Interaction
            "ods__animate__default hover:bg-ods__hover",
          )}
        >
          <XIcon className="size-6" />
        </button>
      </div>

      {/* Body Section */}
      <div
        className={cn(
          // 1. Layout
          "flex flex-1 items-center justify-start gap-6",
          "w-full",
        )}
      >
        {/* Chat Panel Section */}
        <div
          className={cn(
            // 1. Layout
            "flex flex-1 flex-col items-start justify-between",
            "w-full px-6 py-5",
            // 4. Shadow & Border
            "border-ods__border rounded-xl border",
          )}
        >
          {/* Messages Section */}
          <div
            className={cn(
              "flex w-full flex-1 flex-col items-start justify-start gap-6",
              "overflow-hidden",
            )}
          >
            <div className={cn("flex w-full items-start justify-end gap-2.5")}>
              <div
                className={cn(
                  // 1. Layout
                  "flex w-125 items-center justify-center px-4 py-3",
                  // 3. Color
                  "bg-ods__base-50",
                  // 4. Shadow & Border
                  "rounded-lg",
                  // 6. Utility
                  "overflow-hidden",
                )}
              >
                <p
                  className={cn(
                    // 2. Typography
                    "ods__typo__body-large flex-1 whitespace-pre-line",
                    // 3. Color
                    "text-ods__base-700",
                  )}
                >
                  {MOCK_USER_MESSAGE}
                </p>
              </div>
            </div>

            <div
              className={cn(
                "flex w-full items-center justify-center",
                "overflow-hidden rounded-lg",
              )}
            >
              <p
                className={cn(
                  // 2. Typography
                  "ods__typo__body-large flex-1 whitespace-pre-line",
                  // 3. Color
                  "text-ods__base-700",
                )}
              >
                {MOCK_AI_MESSAGE}
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div
            className={cn(
              "flex w-full flex-col items-start justify-start gap-2 pt-2",
            )}
          >
            <div className={cn("flex items-start justify-start gap-2")}>
              {SUGGESTION_CHIPS.map((chip) => (
                <StatusLabel key={chip} status="Default">
                  {chip}
                </StatusLabel>
              ))}
            </div>

            <div className={cn("flex w-full items-start justify-start gap-2")}>
              <div className={cn("flex-1")}>
                <Input defaultValue="문제 수정해줘" />
              </div>
              <Button type="button" color="blue">
                보내기
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Panel Section */}
        <div
          className={cn(
            // 1. Layout
            "flex w-141.5 flex-col items-start justify-start gap-6",
          )}
        >
          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col items-start justify-start gap-2.5 px-6 py-5",
              // 4. Shadow & Border
              "border-ods__border rounded-xl border",
            )}
          >
            <div
              className={cn(
                "flex w-full flex-col items-start justify-start gap-7",
                "overflow-hidden bg-white",
              )}
            >
              <div
                className={cn(
                  "flex w-full flex-col items-start justify-start gap-4",
                )}
              >
                <div
                  className={cn(
                    "flex w-full flex-col items-start justify-start gap-1",
                  )}
                >
                  <StatusLabel status="Positive">
                    {MOCK_QUESTION.statusLabel}
                  </StatusLabel>

                  <div
                    className={cn(
                      "flex h-8 w-full items-center justify-between",
                    )}
                  >
                    <span
                      className={cn(
                        // 2. Typography
                        "ods__typo__title-medium",
                        // 3. Color
                        "text-ods__base-600",
                      )}
                    >
                      {MOCK_QUESTION.title}
                    </span>
                  </div>
                </div>

                <div
                  className={cn(
                    "flex w-full flex-col items-start justify-start",
                  )}
                >
                  {MOCK_QUESTION.choices.map((choice, index) => (
                    <QuestionChoiceItem
                      key={`${choice.label}-${index}`}
                      label={choice.label}
                      isSelected={choice.isSelected}
                    />
                  ))}
                </div>
              </div>

              <div className={cn("flex w-full flex-col items-start gap-1")}>
                <span
                  className={cn(
                    // 2. Typography
                    "ods__typo__body-medium font-semibold",
                    // 3. Color
                    "text-ods__base-500",
                  )}
                >
                  출제 근거
                </span>
                <span
                  className={cn(
                    // 2. Typography
                    "ods__typo__body-medium",
                    // 3. Color
                    "text-ods__base-500",
                  )}
                >
                  {MOCK_QUESTION.rationale}
                </span>
              </div>
            </div>
          </div>

          <Button
            type="button"
            color="blue"
            size="large"
            className={cn("w-full")}
          >
            수정 완료
          </Button>
        </div>
      </div>
    </div>
  );
};
