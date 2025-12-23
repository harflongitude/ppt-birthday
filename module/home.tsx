import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
    const todayWIB = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Jakarta",
});

const birthday = "2025-12-24";

let TITLE = "Belum sampai hari ulang tahun mu ya puput?";
let UCAPAN = "";

if (todayWIB === birthday) {
  TITLE = "DEAR PEMBALAP F1 GODEAN.";
  UCAPAN =
    "Hari ini salah seorang superstar, penggiat ilmu, pembalap, dan apapun sosok imut itu lahir...";
} else if (todayWIB > birthday) {
  TITLE =
    "Hallo puput f1, hari ulang tahun mu sudah lewat ya? Semoga harimu tetap menyenangkan!";
}

  return (
    <div className=" absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold text-white text-shadow-sm text-center">{TITLE}</h1>
        <p className="mt-4 text-lg text-white text-shadow-sm text-center max-w-2xl px-4">{UCAPAN}</p>
        <span className=" animate-bounce text-[#C9A7B8] text-shadow-2xs absolute bottom-0">Click ya kalau mau lanjut</span>
        <Link href="/birthday" className="absolute inset-0"></Link>
        <Button label="Malas langsung saja" type="link" src="/complete" className="absolute bottom-10 right-10"/>
    </div>
)
}
