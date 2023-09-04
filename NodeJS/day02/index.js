const abdo = require("http");
let users = [
  { id: 1, name: "Abdallah", age: 12 },
  { id: 3, name: "zaki", age: 22 },
  { id: 2, name: "nour", age: 32 },
];

let posts = [
  { id: 1, content: "tooltest test bla bla bla bfkmf", likes: 2 },
  { id: 2, content: "fvfvknfvnfv vjfnjvnsdjv", likes: 12 },
];

const fs = require("fs");
const htmlContent = fs.readFileSync("index.html");
const newServ = abdo.createServer(function (req, res) {
  if (req.url == "/" && req.method == "GET") {
    res.end("HOME");
  } else if (req.url == "/getallposts" && req.method == "GET") {
    res.end(JSON.stringify(posts));
  } else if (req.url == "/getpostssorted" && req.method == "GET") {
    const usersPosts = posts.sort((a, b) => a.name.localeCompare(b.name));
    posts = usersPosts;
    res.end(JSON.stringify(posts));
  } else if (req.url == "/addpost" && req.method == "POST") {
    req.on("data", function (chunk) {
      posts.push(JSON.parse(chunk));
      res.end(JSON.stringify(posts));
    });
  } else if (req.url == "/deletepost" && req.method == "DELETE") {
    req.on("data", (chunk) => {
      const idParsed = JSON.parse(chunk);
      //   const flag =
      posts = posts.filter((post) => post.id != idParsed.id);
      res.end(JSON.stringify(posts));
      //   res.end("done detetl");
    });
  } else if (req.url == "/updatepost" && req.method == "PUT") {
    req.on("data", (chunk) => {
      const editePost = JSON.parse(chunk);
      const newPostsUpdated = posts.map((post) => {
        if (post.id == editePost.id) {
          return {
            ...post,
            age: editePost.age,
            name: editePost.name,
          };
        }
        return post;
      });
      posts = newPostsUpdated;
      res.end(JSON.stringify(posts));
    });
  } else if (req.url.startsWith("/getpostbyid") && req.method === "GET") {
    const params = req.url.split("?");
    if (params.length == 2) {
      const queryParams = new URLSearchParams(params[1]);
      const userId = queryParams.get("id");
      if (userId) {
        const post = posts.find((u) => u.id === parseInt(userId));
        if (post) {
          res.end(JSON.stringify(post));
        } else {
          res.end("NOT FOUND");
        }
      } else {
        res.end("Invalid post ID");
      }
    } else {
      res.end("Invalid URL");
    }
  } else if (req.url == "/getallusers" && req.method == "GET") {
    res.end(JSON.stringify(users));
  } else if (req.url == "/getuserssorted" && req.method == "GET") {
    const usersSorted = users.sort((a, b) => a.name.localeCompare(b.name));
    users = usersSorted;
    res.end(JSON.stringify(users));
  } else if (req.url == "/adduser" && req.method == "POST") {
    req.on("data", function (chunk) {
      users.push(JSON.parse(chunk));
      res.end(JSON.stringify(users));
    });
  } else if (req.url == "/deleteuser" && req.method == "DELETE") {
    req.on("data", (chunk) => {
      const idParsed = JSON.parse(chunk);
      //   const flag =
      users = users.filter((user) => user.id != idParsed.id);
      res.end(JSON.stringify(users));
      //   res.end("done detetl");
    });
  } else if (req.url == "/updateuser" && req.method == "PUT") {
    req.on("data", (chunk) => {
      const editeUser = JSON.parse(chunk);
      const newUsersUpdated = users.map((user) => {
        if (user.id == editeUser.id) {
          return {
            ...user,
            age: editeUser.age,
            name: editeUser.name,
          };
        }
        return user;
      });
      users = newUsersUpdated;
      res.end(JSON.stringify(users));
    });
  } else if (req.url.startsWith("/getuserbyid") && req.method === "GET") {
    const params = req.url.split("?");
    if (params.length == 2) {
      const queryParams = new URLSearchParams(params[1]);
      const userId = queryParams.get("id");
      if (userId) {
        const user = users.find((u) => u.id === parseInt(userId));
        if (user) {
          res.end(JSON.stringify(user));
        } else {
          res.end("NOT FOUND");
        }
      } else {
        res.end("Invalid user ID");
      }
    } else {
      res.end("Invalid URL");
    }
  } else {
    res.end("NOT FOUND");
  }
});
newServ.listen(4000);
