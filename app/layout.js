// import any font you want from google font.
import { Josefin_Sans } from "next/font/google";

// calling font function, this will return some information about the font including classnames which refrence the font.
const josefin = Josefin_Sans({
  subsets: ["latin"],
  // control how font will be displayed, swap means first display text in some default font and then when font downloaded display it.
  display: "swap",
  // select font weight if its not a variable font.
  // weight: ["400", "700"],
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "@/app/_components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabins hotel located in the heart of the italian dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // importing the font className.
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
