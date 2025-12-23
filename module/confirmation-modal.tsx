"use client";

import { useEffect, useState } from "react";
import { unlockAudio } from "@/utils/audio-unlock";
import { isReady, setReady } from "@/utils/ready-state";
import { useRouter } from "next/navigation";

export default function ReadyModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isReady()) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  const handleStart = () => {
    unlockAudio();     // gesture user → audio unlocked
    setReady();        // simpan flag
    setOpen(false);    // tutup modal
    router.push("/main"); // NAVIGASI SEKALI KLIK
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white/10 text-white p-8 rounded-2xl max-w-md text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Apakah kamu Betulan puput?
        </h2>
        <p className="text-sm text-white/80">
          Kalo bukan langsung keluar aja ya.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleStart}
            className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Mulai
          </button>

          <button
            onClick={() => window.close()}
            className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Bukan, keluar aja deh
          </button>
        </div>
      </div>
    </div>
  );
}
