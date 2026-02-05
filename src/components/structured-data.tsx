export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SimpleClaw",
    applicationCategory: "BusinessApplication",
    description: "Avoid all technical complexity and one click deploy your own 24/7 active OpenClaw instance under 1 minute.",
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
