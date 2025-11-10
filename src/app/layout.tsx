export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout that wraps the entire app
  // The actual locale-specific layout is in [locale]/layout.tsx
  return children;
}
