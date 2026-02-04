import type { PricingTier } from "@/lib/content"

interface PricingTableProps {
  tiers: PricingTier[]
}

export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02]">
      {tiers.map((tier, index) => (
        <div
          key={tier.name}
          className={`flex items-center justify-between py-4 px-5 ${
            index < tiers.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          <div className="space-y-0.5">
            <div className="font-medium text-white">{tier.name}</div>
            <div className="text-sm text-zinc-500">{tier.description}</div>
            {tier.note && (
              <div className="text-xs text-zinc-600">{tier.note}</div>
            )}
          </div>
          <div className="text-lg font-semibold text-white tabular-nums">
            {tier.price}
          </div>
        </div>
      ))}
    </div>
  )
}
