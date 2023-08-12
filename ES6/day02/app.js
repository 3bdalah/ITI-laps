// assignemnt 01
const userDropdown = document.getElementById("userDropdown");
const showDetailsButton = document.getElementById("showDetailsButton");
const userDetailsDiv = document.getElementById("userDetails");
let users = [];

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users = data;
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      userDropdown.appendChild(option);
    });
    showDetailsButton.disabled = false;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();

showDetailsButton.addEventListener("click", () => {
  const selectedUserId = userDropdown.value;
  const selectedUser = users.find(
    (user) => user.id === parseInt(selectedUserId)
  );

  if (selectedUser) {
    userDetailsDiv.innerHTML = `
      <h2>User Details:</h2>
      <p>Name: ${selectedUser.name}</p>
      <p>Email: ${selectedUser.email}</p>
      <p>Phone: ${selectedUser.phone}</p>
      <!-- Add more user details as needed -->
    `;
  } else {
    userDetailsDiv.innerHTML = "";
  }
});

// assignemnt 03
const newPost = {
  title: "foo",
  body: "bar",
  userId: 1,
};

async function addNewPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();
    console.log("new post added:", data);
  } catch (error) {
    console.error("error adding new post:", error);
  }
}

addNewPost();

// assignment 04
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load image"));
    image.src = url;
  });
}

function showMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

showMessage("Welcome!", 3000)
  .then(() => loadImage("./assests/twitter.png"))
  .then((image) => {
    document.body.appendChild(image);
    return showMessage("Thanks!", 3000);
  })
  .then(() => {
    window.location.href = "another.html";
  })
  .catch((error) => {
    console.error(error);
  });
