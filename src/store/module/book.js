const book = {
  state: {
    filename: '',
    menuVisible: false,
  },
  mutations: {
    SET_FILENAME: (state, filename) => {
      state.filename = filename
    },
    SET_MENUVISIBLE: (state, visible) => {
      state.menuVisible = visible
    }
  },
  actions: {
    setFilename: ({ commit }, filename) => commit('SET_FILENAME', filename),
    setMenuVisible: ({ commit }, visible) => commit('SET_MENUVISIBLE', visible),
  }
}

export default book
