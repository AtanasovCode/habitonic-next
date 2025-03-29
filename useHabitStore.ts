import { create } from 'zustand'

interface HabitState {  
  // Hero Nav
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}

export const useHabitStore = create<HabitState>()((set) => ({
  showMobileNav: false,
  toggleMobileNav: () => set((state) => ({ showMobileNav: !state.showMobileNav })),
}))