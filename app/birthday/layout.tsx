import { redirect } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const now = new Date().setHours(0,0,0,0);
    const theDay = new Date(2025,11, 24).setHours(0,0,0,0);
    if (now > theDay) {
        redirect("/complete");
    }
  return (
    <>{children}</>
  );
}
