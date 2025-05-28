export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#122118]">
      <div className="max-w-md mx-auto h-screen bg-[#1b3124]">{children}</div>
    </div>
  );
}
