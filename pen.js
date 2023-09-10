
document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        btn.parentElement.remove();
      });
    } else {
      btn.parentElement.remove();
    }
  });
});
//# sourceURL=pen.js
    