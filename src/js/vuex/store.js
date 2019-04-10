const state = {
    showLoading: false,
    isAPIWork: false,
    appRoot: 700,
};
const mutations = {
    showLoading(state, value) {
        state.showLoading = value;
        console.log("store.ts mutations > showLoading", value);
    },
    setRoot(state, value) {
        state.appRoot = value;
    },
};

// dispatch
const actions = {
    showLoading: ({ commit }, value) => commit('showLoading', value),

    postAjax({ commit }, _object) {
        console.log('postAjax', _object);
        // state.showLoading = true;
        console.log(state.isAPIWork);
        if (!state.isAPIWork) {
            return new Promise((resolve, reject) => {
                state.isAPIWork = true;
                $.ajax({
                    url: '/customapi/' + _object.url,
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(_object.data),
                    success: function(res) {
                        // state.showLoading = false;
                        state.isAPIWork = false;
                        console.log(res);
                        resolve(res);
                    },
                    fail: function(err) {
                        // state.showLoading = false;
                        state.isAPIWork = false;
                        console.log(err);
                        reject(err);
                    },
                    down: function(err) {
                        // state.showLoading = false;
                        state.isAPIWork = false;
                    }
                })
            });
        }
    },

    getAjax({ commit }, _object) {
        console.log('postAjax', _object);
        // state.showLoading = true;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/customapi/' + _object.url,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(_object.data),
                success: function(res) {
                    // state.showLoading = false;
                    console.log(res);
                    resolve(res);
                },
                fail: function(err) {
                    // state.showLoading = false;
                    console.log(err);
                    reject(err);
                }
            })
        });

    },
};

const getters = {
    showLoading: stat => state.showLoading,
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});