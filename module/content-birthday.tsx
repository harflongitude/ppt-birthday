"use client";
import GreetingTemplate from "@/components/greetings";
import { useEffect, useState } from "react";
import Layout from "./layout";
import { useRouter } from "next/navigation";

export default function ContentBirthday() {
    const router = useRouter()
    const TEXT = ["Hari ini dunia kedatangan seorang manusia dengan keinginan yang sangat tinggi. Harap harap yakin keinginan itu bisa tercapai.", "Manusia dengan daya juang dan suasana ceria yang dia bawa. Harap harap yakin itu diiringinya selamanya.", "Manusia hebat dengan kekuatan dan pengetahuan yang super. Harap harap yakin kedewasaan dan keselamatan dibawanya.", "Sesosok makhluk yang indah sudah datang dalam arah yang tak diduga. Harapannya akan selalu ada sampai waktunya.", "Dia adalah manusia yang entah darimana selalu memiliki hal hal tak terduga, hal hal hebat, hal hal indah, hal hal istimewa. Harapan yang terbaik untuk segala hal tentang dirimu, selamat ulang tahun manusia dari bulan desember, putri eka desintha"];
    const [activeIndex, setActiveIndex] = useState(0);

    const onComplete = () => {
        if (activeIndex < TEXT.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            router.push('/complete');
        }
    };

    const changeAudio = () => {
        
    }

    useEffect(() => {

    }, [activeIndex])
    console.log("Text:", TEXT[activeIndex]);
    return (
        <>
            <GreetingTemplate text={TEXT[activeIndex]} onComplete={onComplete}/>
            <Layout layout={"two music"} currentMonologIndex={activeIndex}/>
        </>
    )
}