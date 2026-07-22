import { GNB } from "./_components/GNB";
import { LNB } from "./_components/LNB";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ods__baselayout-bgcolor flex min-h-screen w-full flex-col">
      <div className="flex w-full flex-1">
        <LNB />

        <div className="flex w-full flex-col">
          <GNB />
          {children}
        </div>
      </div>
    </div>
  );
}
