export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SetupClaw",
    applicationCategory: "BusinessApplication",
    description: "White-glove OpenClaw deployment for founders and exec teams. AI assistant that clears your inbox, manages your calendar, and does work.",
    url: "https://clawd.chiayong.com",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
