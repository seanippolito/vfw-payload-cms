// import './styles.css'
import '../globals.css'
import { Header } from '../../../header/Header' // Adjust path as needed
import { Footer } from '../../../footer/Footer' // Adjust path as needed

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-full">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8"> {/* Added container/padding */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
