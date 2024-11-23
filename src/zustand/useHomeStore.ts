import { create } from "zustand";

interface IHomeStore {
  count: number;
  Increment: (count: number) => void;
}

export const useHomeStore = create<IHomeStore>((set) => ({
  count: 0,
  Increment: () => set((state) => ({ count: state.count + 1 })),
}));
