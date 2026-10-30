/**
 * Fixed decorative backdrop: subtle lab-grid plus soft colour glows.
 * Purely visual, hidden from assistive tech.
 */
export default function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dark:bg-grid-dark" />
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-helix-400/20 blur-[120px] dark:bg-helix-500/15" />
      <div className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-[120px] dark:bg-cyan-500/10" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-400/10 blur-[120px] dark:bg-violet-500/10" />
    </div>
  );
}
