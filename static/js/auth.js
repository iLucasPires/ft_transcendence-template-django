export default (isAuth) => {
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  isAuth && modal.show();
};
