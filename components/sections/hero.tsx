import { Button } from '../ui/button';
import { Eyebrow } from '../ui/eyebrow';

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Brand Copy */}
      <div className="lg:col-span-7 flex flex-col gap-6 text-left">
        <Eyebrow>INDEPENDENT SOFTWARE STUDIO</Eyebrow>
        <h1 className="font-display text-4xl md:text-display font-bold text-ink-900 leading-display tracking-tight">
          We build software that moves business forward.
        </h1>
        <p className="text-[17px] md:text-lead text-ink-600 leading-body max-w-[580px]">
          A small, senior, technically excellent software studio specializing in MERN stack development, custom SaaS platforms, and conversational AI integrations.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Button variant="primary" href="/contact">Let&apos;s build</Button>
          <Button variant="secondary" href="/work">View work</Button>
        </div>
      </div>

      {/* Right Column: Visual Mockup Slots */}
      <div className="lg:col-span-5 relative w-full h-[320px] md:h-[480px] bg-accent-soft border border-hairline rounded-card p-6 flex flex-col gap-4 overflow-hidden shadow-sm">
        {/* Mockup Window 1 */}
        <div className="w-full bg-canvas-white border border-hairline rounded-card shadow-sm overflow-hidden flex flex-col">
          <div className="h-6 bg-canvas border-b border-hairline px-3 flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-error/40" />
            <span className="w-2 h-2 rounded-full bg-accent/25" />
            <span className="w-2 h-2 rounded-full bg-success/40" />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="h-3 w-2/3 bg-ink-900/5 rounded-pill" />
            <div className="h-2 w-full bg-ink-900/5 rounded-pill" />
            <div className="h-2 w-4/5 bg-ink-900/5 rounded-pill" />
          </div>
        </div>

        {/* Mockup Window 2 (overlapping) */}
        <div className="w-4/5 self-end bg-canvas-white border border-hairline rounded-card shadow-md overflow-hidden flex flex-col translate-y-2">
          <div className="h-6 bg-canvas border-b border-hairline px-3 flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-error/40" />
            <span className="w-2 h-2 rounded-full bg-accent/25" />
            <span className="w-2 h-2 rounded-full bg-success/40" />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10" />
              <div className="h-3 w-1/2 bg-ink-900/5 rounded-pill" />
            </div>
            <div className="h-2 w-full bg-ink-900/5 rounded-pill" />
          </div>
        </div>
      </div>
    </section>
  );
}
