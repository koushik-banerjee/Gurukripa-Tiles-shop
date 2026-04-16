import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistStore {
  wishlist: string[];
  addToWishlist: (tileId: string) => void;
  removeFromWishlist: (tileId: string) => void;
  isInWishlist: (tileId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (tileId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(tileId)
            ? state.wishlist
            : [...state.wishlist, tileId],
        })),
      removeFromWishlist: (tileId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((id) => id !== tileId),
        })),
      isInWishlist: (tileId) => get().wishlist.includes(tileId),
      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: 'gurukripa-tiles-wishlist',
    }
  )
);
