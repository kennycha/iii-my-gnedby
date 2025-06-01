import type { PropsWithChildren } from "react";
import Navigation from "./navigation";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-[#122118] h-dvh">
      <div className="max-w-md mx-auto h-full bg-[#1b3124] flex flex-col">
        <div className="flex-1 overflow-y-auto">{children}</div>
        <Navigation />
      </div>
    </div>
  );
}
