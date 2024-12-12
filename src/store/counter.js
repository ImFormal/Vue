import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
    },
// C'est ca qui utilise le plugin de persistance
    persist:true,
});