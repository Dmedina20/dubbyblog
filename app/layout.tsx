import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import {
  FooterGithub,
  FooterLinkedin,
  FooterLogo,
  FooterTwitter,
  FooterX,
} from "@/components/icons";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen  font-sans antialiased overflow-auto",
          fontSans.variable
        )}
      >
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            position: "fixed",
            zIndex: -1,
            display: "flex",
            justifyContent: "center",
            padding: "120px 24px 160px 24px",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%)",
              position: "absolute",
              content: '""',
              zIndex: 2,
              width: "100%",
              height: "100%",
              top: 0,
            }}
          ></div>
          <div
            style={{
              content: '""',
              backgroundImage:
                "url(https://d2vwwcvoksz7ty.cloudfront.net/grid.svg)",
              zIndex: 1,
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              opacity: 0.4,
              filter: "invert(1)",
            }}
          ></div>
          <div
            style={{
              zIndex: 3,
              width: "100%",
              maxWidth: "640px",
              backgroundImage: `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%),
                      radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
                      radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
                      radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
                      radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
                      radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
                      radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)`,
              position: "absolute",
              height: "100%",
              filter: "blur(100px) saturate(150%)",
              top: "80px",
              opacity: 0.15,
            }}
          ></div>
        </div>

        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className=" mx-auto w-full  flex-grow">{children}</main>
            <footer className="z-10 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
              <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pt-10">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                  <div className="space-y-8">
                    <FooterLogo />
                    <p className="max-w-xs text-sm text-gray-500">
                      Giving modern marketing teams superpowers with short links
                      that stand out.
                    </p>
                    <div className="flex items-center space-x-2">
                      {/* Logos */}
                      <a
                        className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
                        href="https://www.linkedin.com/in/dannymedina007/"
                      >
                        <div className="group">
                          <FooterTwitter /> <FooterX />
                        </div>
                      </a>
                      <div className="h-8 border-l border-gray-200" />
                      <a
                        className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
                        href="https://github.com/Dmedina20"
                      >
                        <div className="group">
                          <FooterGithub />
                        </div>
                      </a>
                      <div className="h-8 border-l border-gray-200" />
                      <a
                        className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
                        href="https://www.linkedin.com/in/dannymedina007/"
                      >
                        <div className="group">
                          <FooterLinkedin />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          Features
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Advanced Analytics
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Branded Links
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              QR Codes
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Personalization
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Team Collaboration
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              API
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-600">
                          Product
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Changelog
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Customer Stories
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Enterprise
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Help Center
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:grid md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-600">
                          Legal
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Privacy
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Terms
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Abuse
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-600">
                          Tools
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              ChatGPT Link Shortener
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Amazon Link Shortener
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Spotify Link Shortener
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Metatags API
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              QR Code Generator
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-sm text-gray-500 hover:text-gray-900"
                              href="/"
                            >
                              Link Inspector
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                  <p className="text-sm leading-5 text-gray-500">
                    @ 2024 Dub.co, Inc.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
