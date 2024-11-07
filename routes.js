exports.routes = [
  {
    method: "GET",
    path: "/users/{name?}",
    handler: (request, h) => {
      const { name = "Stranger" } = request.params;
      const { lang = "id" } = request.query;
      const response = h.response(
        JSON.stringify({
          name,
          lang,
        })
      );
      response.type("application/json");
      return response;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "POST",
    path: "/about",
    handler: (request, h) => {
      const { username = "", password = "" } = request.payload;
      return `Hi Your username: ${username}, pass: ${password}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];
