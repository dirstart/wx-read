export default {
  filename: (state) => state.book.filename,
  menuVisible: (state) => state.book.menuVisible,
  settingVisible: (state) => state.book.settingVisible,
  defaultFontFamily: (state) => state.book.defaultFontFamily,
  defaultFontSize: (state) => state.book.defaultFontSize,
  defaultTheme: (state) => state.book.defaultTheme,
  currentBook: (state) => state.book.currentBook,
  fontFamilyPopupVisible: (state) => state.book.fontFamilyPopupVisible,
}
