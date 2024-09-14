import React from "react";
import Header from "@/components/Header";
import "./global.css";

export const metadata = {
  title: "Pretty Queen Beauty Salon & Barber Shop",
  description:
    "Online ecommerce shop for Pretty Queen Beauty Salon & Barber Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
