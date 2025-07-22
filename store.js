import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      darkMode: 'null', 
      setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({
        darkMode: state.darkMode,
      }),
    }
  )
);

export default useStore;