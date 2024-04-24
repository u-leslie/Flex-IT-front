import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@500&display=swap" rel="stylesheet"/>
      </head>
      <body style={{
        "fontFamily":"poppins,sans-serif"
      }}>{children}</body>
    </html>
  )
}
