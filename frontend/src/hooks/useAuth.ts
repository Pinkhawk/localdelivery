// hooks/useAuth.ts

import { useAuthStore } from "@/store/authStore";

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  return {
    user,
    token,
    isAuthenticated: !!token,
  };
}