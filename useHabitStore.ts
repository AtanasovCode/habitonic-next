import { create } from 'zustand'

interface HabitState {  
  showMobileNav: boolean;
  toggleMobileNav: () => void;
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

export const useHabitStore = create<HabitState>()((set) => ({
  showMobileNav: false,
  toggleMobileNav: () => set((state) => ({ showMobileNav: !state.showMobileNav })),
  currentTheme: 'system',
  setCurrentTheme: (currentTheme) => set({ currentTheme }),
}))