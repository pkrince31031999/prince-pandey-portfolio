const steps = [
  { label: "Client", detail: "Requests" },
  { label: "API", detail: "REST · SOAP" },
  { label: "Runtime", detail: "AWS · Redis" },
];

const lanes = [
  {
    name: "identity",
    detail: "Rekognition · liveness · compare",
    meta: "Telgoo5",
  },
  {
    name: "logistics",
    detail: "REST · SOAP · Redis",
    meta: "ParcelX · Apporio",
  },
  {
    name: "booking",
    detail: "Twilio · booking workflow",
    meta: "Shipmozo",
  },
];

export function ArchitecturePanel() {
  return (
    <aside className="hero-panel relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101217]/90 shadow-[0_40px_90px_-48px_rgba(0,0,0,0.85)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,182,255,0.16),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#a9b6ff]" aria-hidden="true" />
          <p className="font-mono text-xs text-[#b7b1a6]">surface.overview</p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b7b1a6]">Noida</p>
      </div>

      <div className="relative space-y-6 p-5 sm:p-6">
        <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
          {steps.map((step, index) => (
            <div key={step.label} className="contents">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a9b6ff]">
                  0{index + 1}
                </p>
                <p className="mt-1.5 text-sm text-[#f3efe6]">{step.label}</p>
                <p className="mt-0.5 text-xs text-[#b7b1a6]">{step.detail}</p>
              </div>
              {index < steps.length - 1 ? (
                <div className="hidden items-center text-[#a9b6ff]/70 sm:flex" aria-hidden="true">
                  <span className="block h-px w-4 bg-current" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <ul className="space-y-2.5">
          {lanes.map((lane) => (
            <li
              key={lane.name}
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#090a0d]/50 px-3.5 py-3"
            >
              <div className="min-w-0">
                <p className="font-mono text-sm text-[#f3efe6]">{lane.name}</p>
                <p className="mt-1 text-xs leading-5 text-[#b7b1a6]">{lane.detail}</p>
              </div>
              <p className="shrink-0 pt-0.5 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-[#a9b6ff]">
                {lane.meta}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p className="relative border-t border-white/10 px-5 py-3 font-mono text-[11px] text-[#b7b1a6]">
        Systems from recent roles — illustrative, not a live status board
      </p>
    </aside>
  );
}
