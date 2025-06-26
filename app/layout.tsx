import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "FF BETA",
  description: "Unduh aplikasi Free Fire Beta secara gratis dan resmi. FF BETA adalah platform terpercaya untuk mengakses versi terbaru Free Fire sebelum dirilis ke publik. Dapatkan pembaruan lebih awal, uji fitur baru, dan nikmati pengalaman bermain yang lebih seru!",
  generator: "XEoms.dev",
  icons: {
    icon: "https://files.catbox.moe/o6tznl.ico",
    shortcut: "https://files.catbox.moe/o6tznl.ico",
    apple: "https://files.catbox.moe/dq3sr2.png",
  },
  openGraph: {
    images: [{ url: "https://files.catbox.moe/dq3sr2.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://files.catbox.moe/dq3sr2.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
      </Head>
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <AnimatedBackground variant="default" opacity={0.08} duration={30} />
          {children}
        </div>
      </body>
    </html>
  )
}
