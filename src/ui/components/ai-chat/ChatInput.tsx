"use client";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { SignalState } from "@/domain/signal/state";
import { Button } from "@/ui/components/Button";
import { StatusLabel } from "@/ui/components/StatusLabel";
import { cn } from "@/ui/utils/tailwind/cn";

const DEFAULT_SUGGESTION_CHIPS = [
  "선지 자연스럽게",
  "발문 간결하게",
  "차단되는 요청 예시",
] as const;

export { DEFAULT_SUGGESTION_CHIPS };

export type ChatInputProps = {
  onSend: (message: string) => void;
  placeholder?: string;
  suggestionChips?: string[];
};

/**
 * AI 채팅 입력
 */
export const ChatInput = ({
  onSend,
  placeholder = "문항 수정을 요청해보세요.",
  suggestionChips,
}: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSend = (v: string) => {
    if (!v.trim()) {
      return;
    }

    onSend(v);
    setValue("");
  };

  const chips = suggestionChips ?? [];
  const hasSuggestionChips = chips.length > 0;

  return (
    <section
      className={cn(
        "flex w-full flex-col items-start justify-start gap-2 pt-2",
      )}
    >
      {hasSuggestionChips && (
        <div className={cn("flex items-start justify-start gap-2")}>
          {chips.map((chip) => (
            <button key={chip} type="button" onClick={() => handleSend(chip)}>
              <StatusLabel status={SignalState.Default}>{chip}</StatusLabel>
            </button>
          ))}
        </div>
      )}

      <div className={cn("flex w-full items-start justify-start gap-2")}>
        <div className={cn("flex-1")}>
          <div
            className={cn(
              // 1. Layout
              "flex w-full flex-col",
              // 4. Shadow & Border
              "border-ods__border rounded-sm border",
              // 6. Utility
              "overflow-hidden",
            )}
          >
            <TextareaAutosize
              placeholder={placeholder}
              maxRows={5}
              className={cn(
                // 1. Layout
                "w-full p-3",
                // 2. Typography
                "ods__typo__body-medium",
                // 3. Color
                "text-ods__base-600",
                // 4. Shadow & Border
                "rounded-[12px]",
                // 5. Interaction
                "ods__animate__default hover:opacity-80",
                // 6. Utility
                "resize-none focus:outline-none",
                "placeholder:text-ods__base-400 font-light",
              )}
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.nativeEvent.isComposing) {
                  return;
                }

                if (e.key === "Enter" && e.shiftKey) {
                  return;
                }

                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(value);
                }
              }}
            />

            <div
              className={cn(
                "flex w-full items-center justify-end px-3 pt-1 pb-3",
              )}
            >
              <Button
                size="small"
                color="blue"
                disabled={!value}
                onClick={() => handleSend(value)}
              >
                보내기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
