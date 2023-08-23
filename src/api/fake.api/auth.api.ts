const admin = {
  userName: "admin",
  password: "admin",
};

const login = (name: string, password: string) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      if (name === admin.userName && password === admin.password) {
        localStorage.setItem("status", "authorized");
        resolve("authorized");
      } else {
        resolve("error");
      }
    }, 1000);
  });

const logout = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      localStorage.removeItem("status");
      resolve("unauthorized");
    }, 1000);
  });

const loginAPI = {
  login,
  logout,
};
export default loginAPI;
