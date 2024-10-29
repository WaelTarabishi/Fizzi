import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
}));
