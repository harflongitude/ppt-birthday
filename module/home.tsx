import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
    const now = new Date().setHours(0,0,0,0);
    const theDay = new Date(2025,11, 24).setHours(0,0,0,0);

    let TITLE = "Belum sampai hari ulang tahun mu ya puput?";
    let UCAPAN = ""
    if (now === theDay) {
        TITLE = "DEAR PEMBALAP F1 GODEAN."
        UCAPAN  = "Hari ini salah seorang superstar, penggiat ilmu, pembalap, dan apapun sosok imut itu lahir. Maaf kalau pemberianku tidak se istimewa itu, tidak semeriah itu, dan mungkin apa yang kupersiapkan ini kayak anak SMA baru puber kali ya. Tapi gapapa kalo begitu aku bakalan puber terus dah hehe. Oiya aku ada sedikit ucapan mungkin aku ga pintar ngerangkai katanya tapi semoga maksud dan doa ku tersampaikan."
    } else if (now > theDay) {
        TITLE = "Hallo puput f1, hari ulang tahun mu sudah lewat ya? Semoga harimu tetap menyenangkan!"
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