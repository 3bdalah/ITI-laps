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

//  ===============================================================================================================
// Express Setup:
const express = require("express");
const app = express();
const port = 4000;

let users = [
  { id: 1, name: "Abdallah", age: 12 },
  { id: 3, name: "zaki", age: 22 },
  { id: 2, name: "nour", age: 32 },
];

let posts = [
  { id: 1, content: "tooltest test bla bla bla bfkmf", likes: 2 },
  { id: 2, content: "fvfvknfvnfv vjfnjvnsdjv", likes: 12 },
];
// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME");
});

// START USERS
app.get("/getallusers", (req, res) => {
  res.json(users);
});

app.get("/getuserssorted", (req, res) => {
  const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
  users = sortedUsers;
  res.json(users);
});

app.post("/adduser", (req, res) => {
  const newUser = req.body;
  posts.push(newUser);
  res.json(users);
});

app.delete("/deleteuser", (req, res) => {
  const idToDelete = req.body.id;
  users = users.filter((user) => user.id !== idToDelete);
  res.json(users);
});

app.put("/updateuser", (req, res) => {
  const updatedUser = req.body;
  users = users.map((user) => {
    if (user.id === updatedPost.id) {
      return {
        ...user,
        age: updatedUser.age,
        name: updatedUser.name,
      };
    }
    return user;
  });
  res.json(users);
});
// wait aminute just try another method ok :)
app.get("/getusertbyid", (req, res) => {
  const userId = req.query.id;
  const user = posts.find((u) => u.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("NOT FOUND");
  }
});
//  another method to get user by id  ok
app.get("/:iduser", (req, res) => {
  let { iduser } = req.params;
  const user = posts.find((user) => user.id == iduser);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("NOT FOUND");
  }
});
// START POSTS
app.get("/getallposts", (req, res) => {
  res.json(posts);
});

app.get("/getpostssorted", (req, res) => {
  const sortedPosts = posts.sort((a, b) => a.name.localeCompare(b.name));
  posts = sortedPosts;
  res.json(posts);
});

app.post("/addpost", (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.json(posts);
});

app.delete("/deletepost", (req, res) => {
  const idToDelete = req.body.id;
  posts = posts.filter((post) => post.id !== idToDelete);
  res.json(posts);
});

app.put("/updatepost", (req, res) => {
  const updatedPost = req.body;
  posts = posts.map((post) => {
    if (post.id === updatedPost.id) {
      return {
        ...post,
        age: updatedPost.age,
        name: updatedPost.name,
      };
    }
    return post;
  });
  res.json(posts);
});

app.get("/getpostbyid", (req, res) => {
  const userId = req.query.id;
  const post = posts.find((u) => u.id === parseInt(userId));
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("NOT FOUND");
  }
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
