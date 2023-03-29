export const metadata = {
    title: 'About',
    description: 'Testing lang',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  }
  