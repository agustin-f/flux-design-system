"use client"

import { CopyButton } from "./copy-button"

const desktopHierarchy = [
  { name: "Heading 1", size: "48px / 3rem", weight: "Bold", className: "text-3xl font-bold" },
  { name: "Heading 2", size: "32px / 2rem", weight: "Semibold", className: "text-2xl font-semibold" },
  { name: "Heading 3", size: "24px / 1.5rem", weight: "Medium", className: "text-xl font-medium" },
  { name: "Subtitle 1", size: "16px / 1rem", weight: "Regular", className: "text-base" },
]

const responsiveHierarchy = [
  { name: "Heading 1", size: "32px / 2rem", weight: "Bold", className: "text-2xl font-bold" },
  { name: "Heading 2", size: "24px / 1.5rem", weight: "Semibold", className: "text-xl font-semibold" },
  { name: "Heading 3", size: "20px / 1.25rem", weight: "Medium", className: "text-lg font-medium" },
  { name: "Subtitle 1", size: "14px / 0.875rem", weight: "Regular", className: "text-sm" },
]

export function TypographySection() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Typography</h2>

      {/* Font Info */}
      <div className="bg-card p-4 rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-sans">Aa</div>
            <div>
              <p className="font-semibold">Fira Sans</p>
              <p className="text-sm text-muted-foreground">A type-system available</p>
            </div>
          </div>
          <CopyButton value="Fira Sans" label="font family" />
        </div>
      </div>

      {/* Base Body Size */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">Base Body Size</p>
        <div className="bg-card p-4 rounded-lg border border-border flex items-center justify-between">
          <p className="text-sm">1 rem = 16px</p>
          <CopyButton value="16px" label="base size" />
        </div>
      </div>

      {/* Headings Hierarchy */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Desktop Hierarchy</p>
          <div className="space-y-3">
            {desktopHierarchy.map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className={item.className}>{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.size} - {item.weight}
                  </p>
                </div>
                <CopyButton value={item.size} label={item.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Responsive Hierarchy</p>
          <div className="space-y-3">
            {responsiveHierarchy.map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className={item.className}>{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.size} - {item.weight}
                  </p>
                </div>
                <CopyButton value={item.size} label={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
