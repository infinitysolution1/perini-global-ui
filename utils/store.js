import create from "zustand";

const useStore = create((set) => ({
  alt: false,
  setAlt: (alt) => set({ alt }),
}));

export default useStore;
