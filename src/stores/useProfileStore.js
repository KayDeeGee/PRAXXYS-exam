import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        profile: null,
    }),
    getters: {
        getFirstName(state) {
            return state.profile?.name.split(' ')[0] || '';
        }
    },
    actions: {
        async setProfile() {
            const response = await fetch('/data/user-profile.json');

            this.profile = await response.json();
        },
    },
});