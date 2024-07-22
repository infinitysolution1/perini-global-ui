import create from "zustand";

const useStore = create((set) => ({
  alt: false,
  setAlt: (alt) => set({ alt }),
  sidebar: {
    show: false,
  },
  setShow: (sidebar) => set((state) => (state.sidebar = sidebar)),
}));

export default useStore;
