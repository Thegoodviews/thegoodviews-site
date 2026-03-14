export const metadata = {
  title: "TheGoodViews",
  description: "Connection without conflict",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#ffffff", color: "#0f172a" }}>
        {children}
      </body>
    </html>
  );
}
