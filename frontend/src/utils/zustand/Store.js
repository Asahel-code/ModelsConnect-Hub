import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: {
          token: null,
          isAdmin: false,
          isModel: false,
          isClient: false,
          isVerified: false
        },
        setToken: (response) =>
          set((state) => ({ user: { ...state.user, token: response?.accessToken, isAdmin: response?.isAdmin, isModel: response.isModel, isClient: response.isClient, isVerified: response.isVerified } })),
        removeToken: () =>
          set((state) => ({ user: { ...state.user, token: null, isAdmin: false, isModel: false, isClient: false, isVerified: false, } })),
      }),
      { name: "models_connect_hub" }
    )
  )
);

export const useSignUpFlowStore = create(
  devtools(
    persist(
      (set) => ({
        persona: {
         role: null
        },
        setPersona: (response) =>
          set((state) => ({ persona: { ...state.persona, role: response } })),
        removePersona: () =>
          set((state) => ({ persona: { ...state.persona, role: null } })),
      }),
      { name: "user_signup_flow" }
    )
  )
);


export default useUserStore;