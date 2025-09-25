import "./globals.css";
import Script from "next/script";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Parco Auto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      {/* script che imposta il tema PRIMA che React venga eseguito */}
      <Script id="theme-init" strategy="beforeInteractive">
        {`(function(){
          try {
            var t = localStorage.getItem('theme');
            if (t === 'dark') {
              document.documentElement.classList.add('dark');
            } else if (t === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              var prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              document.documentElement.classList.toggle('dark', prefers);
            }
          } catch (e) { /* ignore */ }
        })();`}
      </Script>

      <body>
        <header className="p-4 border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="font-bold">🏎️ Parco Auto</h1>
            <ThemeToggle />
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
