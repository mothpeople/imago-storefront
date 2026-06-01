import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'Imago OS | The Creative Master Prompt Matrix',
  description: 'A repository of 50 model-agnostic image prompt architectures engineered by Mothpeople.',
  icons: {
    icon: '/imago-logo.jpg', // This points to the file in your public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}