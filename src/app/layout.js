import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Arslan's Portfolio",
  description:
    "I’m Arslan, a Full-Stack MERN Developer. I specialize in building responsive web apps using the MERN stack (MongoDB, Express, ReactJS, and NodeJS)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
