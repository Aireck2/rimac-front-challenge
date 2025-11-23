import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getAge } from './common/utils/dates';
import { getUser } from './services/user';

interface User {
  documentType: string;
  documentNumber: string;
  phoneNumber: string;
  isTerms: boolean;
  isMarketing: boolean;
  forWho: string;
  plan: string;
  planNumber: string;
  planPrice: string;
  name: string;
  lastname: string;
  birthday: string;
  age: number;
}

interface UserState extends User {
  setUser: (data: Partial<User>) => void;
  clear: () => void;
  loadUser: () => Promise<void>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      documentType: '',
      documentNumber: '',
      phoneNumber: '',
      isTerms: false,
      isMarketing: false,
      forWho: '',
      plan: '',
      planNumber: '',
      planPrice: '',
      name: '',
      lastname: '',
      birthday: '',
      age: 0,

      setUser: (data) => set(data),
      loadUser: async () => {
        try {
          const data = await getUser();
          console.log(data);
          set({
            name: data.name,
            lastname: data.lastName,
            birthday: data.birthDay,
            age: getAge(data.birthDay),
          });
        } catch (error) {
          console.log(error);
        }
      },

      clear: () =>
        set({
          documentType: '',
          documentNumber: '',
          phoneNumber: '',
          isTerms: false,
          isMarketing: false,
          forWho: '',
          plan: '',
          planNumber: '',
          planPrice: '',
        }),
    }),
    {
      name: 'user-storage',
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) =>
          sessionStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    },
  ),
);
