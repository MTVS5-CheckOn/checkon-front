"use client";

import { Alert } from "@/ui/components/Alert";
import { cn } from "@/ui/utils/tailwind/cn";
import { AlertCircleIcon, CheckCircleIcon, InfoIcon } from "lucide-react";

export default function Page() {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-4 p-8",
      )}
    >
      <Alert
        icon={<InfoIcon />}
        title="Info"
        description="This is an info Alert with an informative title."
      />
      <Alert
        icon={<CheckCircleIcon />}
        variant="success"
        title="Success"
        description="This is a success Alert with a successful title."
      />
      <Alert
        icon={<AlertCircleIcon />}
        variant="warning"
        title="Warning"
        description="This is a warning Alert with a warning title."
      />
      <Alert
        icon={<AlertCircleIcon />}
        variant="error"
        title="Error"
        description="This is an error Alert with an error title."
      />
    </div>
  );
}
