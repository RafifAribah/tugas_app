import './globals.css'

export const metadata = {
  title: 'My Simple Website',
  description: 'A simple portfolio website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}