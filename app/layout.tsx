import type { Metadata } from 'next'
import { Bowlby_One_SC, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import { SVGFilters } from '@/components/SVGFilters'
import './globals.css'

const bowlby = Bowlby_One_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bowlby-sc',
  weight: '400',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
  weight: '500',
})

export const metadata: Metadata = {
  title: 'Zeotap CDP - Data-Driven Retail Solutions',
  description: 'Effective CDP for Data-Driven Retail',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 min-h-screen`}
      >
        <main>{children}</main>
        <SVGFilters />
        <Script
          id="voiceflow-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '67838d175b843c00ceda92c1' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </body>
    </html>
  )

