import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface HabitState {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

export const useHabitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      showMobileNav: false,
      toggleMobileNav: () => set((state) => ({ showMobileNav: !state.showMobileNav })),
      currentTheme: 'system',
      setCurrentTheme: (currentTheme) => set({ currentTheme }),
    }),
    {
      name: 'habit-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({
        currentTheme: state.currentTheme,
      })
    },
  ),
)
