(function () {
  try {
    var storageKey = 'theme'
    var root = document.documentElement
    function getTheme() {
      var saved = localStorage.getItem(storageKey)
      if (saved === 'light' || saved === 'dark') return saved
      return 'dark'
    }

    function applyTheme(theme) {
      root.classList.toggle('dark', theme === 'dark')
      root.dataset.theme = theme
    }

    function syncButtons() {
      var isDark = root.classList.contains('dark')
      document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
        button.setAttribute('aria-pressed', isDark ? 'true' : 'false')
        button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode')
        button.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode')
      })
    }

    function setTheme(theme, persist) {
      applyTheme(theme)
      if (persist) {
        localStorage.setItem(storageKey, theme)
      }
      syncButtons()
    }

    applyTheme(getTheme())
    document.addEventListener('DOMContentLoaded', syncButtons)
    document.addEventListener('click', function (event) {
      var button = event.target.closest('[data-theme-toggle]')
      if (!button) return
      event.preventDefault()
      setTheme(root.classList.contains('dark') ? 'light' : 'dark', true)
    })

    syncButtons()
  } catch (error) {
  }
})()
