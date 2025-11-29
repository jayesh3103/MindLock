"use client";

export default function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00F0FF]/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00F0FF]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "4s" }} />
    </div>
  );
}
