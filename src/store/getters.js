export default {
  filename: (state) => state.book.filename,
  menuVisible: (state) => state.book.menuVisible,
  settingVisible: (state) => state.book.settingVisible,
  defaultFontFamily: (state) => state.book.defaultFontFamily,
  defaultFontSize: (state) => state.book.defaultFontSize,
  currentBook: (state) => state.book.currentBook,
}
