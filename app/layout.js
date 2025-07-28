import "./globals.css";



export const metadata = {
  title: "Tejas Gotarkar",
  description: "Yoga Instructor | Social Worker | Guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" foxified="">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </head>
      <body className="bg-[#FDF7E4] scroll-smooth">
        {children}
      </body>
    </html>
  );
}
