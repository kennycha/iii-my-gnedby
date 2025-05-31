import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-[#122118] h-dvh">
      <div className="max-w-md mx-auto h-full bg-[#1b3124]">{children}</div>
    </div>
  );
}
