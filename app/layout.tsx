import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Imago OS | The Creative Master Prompt Matrix',
  description: 'A repository of 50 model-agnostic image prompt architectures engineered by Mothpeople.',
  icons: {
    icon: '/imago-logo.jpg', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Replace the content string below with your exact Pinterest code */}
        <meta name="p:domain_verify" content="800cf677ccae99af16186ba0d27f7e96" />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}