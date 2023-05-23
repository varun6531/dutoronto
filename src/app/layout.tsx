import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Delta Upsilon Toronto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Navbar></Navbar>{children}</body>
    </html>
  )
}
