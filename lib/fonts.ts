import { Inter, DM_Mono, Bowlby_One_SC } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
})

export const bowlbyOneSC = Bowlby_One_SC({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bowlby',
})

