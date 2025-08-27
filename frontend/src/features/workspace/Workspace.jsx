import * as React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const fakeWorkspaces = [
  { id: 1, name: "Workspace 1" },
  { id: 2, name: "Workspace 2" },
  { id: 3, name: "Workspace 3" },
];

export default function Workspace() {
  const [selectedId, setSelectedId] = React.useState(1);

  return (
    <div className="h-screen bg-dark1 text-white flex">
      {/* Drawer trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed top-4 left-4 z-20 rounded-md bg-blue2 hover:bg-blue1 px-3 py-2">
            {/* Hamburger */}
            <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          </button>
        </SheetTrigger>

        {/* Drawer */}
        <SheetContent
          side="left"
          className="
            w-72 p-0
            !bg-dark2 !bg-opacity-100
            border-r border-white/10
          ">
          <div className="flex h-full flex-col">
            {/* Brand header */}
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center gap-3">
                <div className="grid size-8 place-items-center rounded-md bg-blue2 font-bold">A</div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Astra</div>
                  <div className="text-[11px] text-gray1 leading-none mt-0.5">Process Mining Platform</div>
                </div>
              </div>
            </div>
            <div className="h-px bg-white/10" />

            {/* Section title */}
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-gray1">WORKSPACES</span>
              <button className="rounded-md text-xs px-2 py-1 bg-blue2 hover:bg-blue1">+ New</button>
            </div>

            {/* Workspace list (scrolls) */}
            <div className="flex-1 overflow-y-auto px-2 pb-2">
              <ul className="space-y-1">
                {fakeWorkspaces.map((ws) => {
                  const active = ws.id === selectedId;
                  return (
                    <li key={ws.id}>
                      <button
                        onClick={() => setSelectedId(ws.id)}
                        className={[
                          "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition",
                          active
                            ? "bg-blue2 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]"
                            : "text-gray1 hover:bg-blue1/25 hover:text-white"
                        ].join(" ")}
                      >
                        <span className={["inline-block size-2 rounded-full", active ? "bg-white" : "bg-white/40"].join(" ")} />
                        <span className="truncate">{ws.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sidebar divider + dashboard */}
            <div className="h-px bg-white/10" />
            <div className="px-3 py-3">
              <button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray1 hover:text-white hover:bg-blue1/25">
                <span className="inline-block size-2 rounded-[2px] bg-white/40" />
                Dashboard
              </button>
            </div>

            {/* Pinned footer button */}
            <div className="mt-auto px-3 pb-4">
              <button className="w-full rounded-lg bg-blue2 hover:bg-blue1 px-4 py-2 font-semibold">
                + Add Workspace
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main area */}
      <main className="flex-1 bg-dark1">
        <div className="mx-auto max-w-5xl px-8 py-10">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Astra Process Mining Platform</h1>
            <p className="text-gray1 mt-1">
              {fakeWorkspaces.find((w) => w.id === selectedId)?.name} • Scalable algorithm execution
            </p>
          </header>

          {/* Example card so it feels “tight” */}
          <section className="rounded-xl border border-white/10 bg-dark2 p-6">
            <h2 className="text-xl font-semibold">Workspace Content Area</h2>
            <p className="text-gray1 mt-1">
              Selected workspace: {fakeWorkspaces.find((w) => w.id === selectedId)?.name}
            </p>
            <div className="mt-6 rounded-lg border border-white/10 bg-dark1/40 p-6 text-center">
              <p className="text-gray1">Upload or select an event log to begin…</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
