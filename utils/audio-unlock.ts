export const unlockAudio = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("audio-unlocked", "true");
  }
};

export const isAudioUnlocked = () => {
    if (typeof window === "undefined") return false;
  return sessionStorage.getItem("audio-unlocked") === "true";
};
