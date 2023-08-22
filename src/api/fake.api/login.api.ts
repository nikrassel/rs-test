const admin = {
  userName: "admin",
  password: "admin",
};

const login = (name: string, password: string) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      if (name === admin.userName && password === admin.password) {
        localStorage.setItem("status", "authorized");
        resolve("success");
      }
    }, 1000);
  });

const loginAPI = {
  login,
};
export default loginAPI;
