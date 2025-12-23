export const isReady = () => {
  return sessionStorage.getItem("persiapan") === "true";
};

export const setReady = () => {
  sessionStorage.setItem("persiapan", "true");
};