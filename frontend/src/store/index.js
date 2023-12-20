// store/index.js
import { createStore } from 'vuex';

    export default createStore({
    state: {
    isAuthenticated: false,
    user: null,
    },
    mutations: {
    setAuthenticated(state, value) {
        state.isAuthenticated = value;
    },
    setUser(state, user) {
        state.user = user;
    },
    },
    actions: {
    loginUser({ commit }, user) {
        // Perform any logic related to successful login
        commit('setAuthenticated', true);
        commit('setUser', user);

        // Store user information in localStorage
        localStorage.setItem('authUser', JSON.stringify(user));
    },
    logoutUser({ commit }) {
        // Perform logout logic and API request here
        // Upon successful logout, commit mutations to update state
        commit('setAuthenticated', false);
        commit('setUser', null);

        // Remove user information from localStorage
        localStorage.removeItem('authUser');
    },
    // ... other actions
    },
    modules: {},
    });
