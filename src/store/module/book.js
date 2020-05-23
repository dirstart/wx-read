const book = {
  state: {
    filename: '',
    menuVisible: false,
    settingVisible: -1, // -1：不显示，0：字号，2：进度条，3：目录
    defaultFontFamily: 'default',
    defaultFontSize: 16,
    currentBook: null,
  },
  mutations: {
    SET_FILENAME: (state, filename) => {
      state.filename = filename
    },
    SET_MENUVISIBLE: (state, visible) => {
      state.menuVisible = visible
    },
    SET_SETTINGVISIBLE: (state, value) => {
      state.settingVisible = value
    },
    SET_DEFAULTFONTFAMILY: (state, value) => {
      state.defaultFontFamily = value
    },
    SET_DEFAULTFONTSIZE: (state, value) => {
      state.defaultFontSize = value
    },
    SET_CURRENT_BOOK: (state, value) => {
      state.currentBook = value
    },
  },
  actions: {
    setFilename: ({ commit }, filename) => commit('SET_FILENAME', filename),
    setMenuVisible: ({ commit }, visible) => commit('SET_MENUVISIBLE', visible),
    setSettingVisible: ({ commit }, visible) => commit('SET_SETTINGVISIBLE', visible),
    setDefaultFontFamily: ({ commit }, value) => commit('SET_DEFAULTFONTFAMILY', value),
    setDefaultFontSize: ({ commit }, value) => commit('SET_DEFAULTFONTSIZE', value),
    setCurrentBook: ({ commit }, value) => commit('SET_CURRENT_BOOK', value),
  }
}

export default book
