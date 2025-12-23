"use client";
import AudioPlayer from "@/components/audio-player";
import { useEffect, useState } from "react";

export default function Layout({ layout, currentMonologIndex = 0 }: { layout: "one music" | "two music"; currentMonologIndex?: number }) {
  const listMusic = [
    "/audio/tulus.mp3",
    "/audio/niki.mp3",
    "/audio/sal-priadi.mp3",
    "/audio/jamrud.mp3",
  ];

  const [musicUrl, setMusicUrl] = useState<string[]>([]);

  useEffect(() => {
    if (layout === "one music") {
      const random =
        listMusic[Math.floor(Math.random() * listMusic.length)];
      setMusicUrl([random]);
    }

    if (layout === "two music") {
      setMusicUrl([
        "/audio/backsound-barasuara.mp3",
        "/audio/ucapan/part-1.mp3",
        "/audio/ucapan/part-2.mp3",
        "/audio/ucapan/part-3.mp3",
        "/audio/ucapan/part-4.mp3",
        "/audio/ucapan/part-5.mp3",
      ]);
    }
  }, [layout]);

  if (musicUrl.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 w-full">
      <AudioPlayer src={musicUrl[0]} variant="songs" labelMuted="Lagu nyala" labelUnmuted="Shh lagu"/>
      {layout === "two music" && (
        <AudioPlayer
          key={currentMonologIndex}
          src={musicUrl[currentMonologIndex + 1]}
          variant="monolog"
          labelMuted="Rofi Bicara"
            labelUnmuted="Shh Rofi!"
        />
      )}
    </div>
  );
}
