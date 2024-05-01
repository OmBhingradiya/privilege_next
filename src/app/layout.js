import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "Explore Thailand: Elite Privilege Residence Program",
    description:
      "Explore Thailand's Elite Privilege Residence Program: Long-term visas, exclusive benefits & seamless transition for investors, retirees & tourists seeking a privileged experience.",
    url: "https://goldenprivilege/home.com",
    siteName: "Golden Privilege",
    images: [
      {
        url: "/og_image.jpg",
        width: 800,
        height: 600,
        alt: "open graph image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://goldenprivilege/home.com",
    languages: {
      "en-US": "https://nextjs.org/en-US",
      "de-DE": "https://nextjs.org/de-DE",
    },
    title: "Privilege",
    description: "Golden Privilege",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
