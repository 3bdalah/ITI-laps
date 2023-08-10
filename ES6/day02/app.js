const userDropdown = document.getElementById('userDropdown');
    const showDetailsButton = document.getElementById('showDetailsButton');
    const userDetailsDiv = document.getElementById('userDetails');
    let users = [];

    // Fetch user data and populate dropdown
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        users = data;
        users.forEach(user => {
          const option = document.createElement('option');
          option.value = user.id;
          option.textContent = user.name;
          userDropdown.appendChild(option);
        });
        showDetailsButton.disabled = false;
      })
      .catch(error => console.error('Error fetching users:', error));

    // Show user details on button click
    showDetailsButton.addEventListener('click', () => {
      const selectedUserId = userDropdown.value;
      const selectedUser = users.find(user => user.id === parseInt(selectedUserId));

      if (selectedUser) {
        userDetailsDiv.innerHTML = `
          <h2>User Details:</h2>
          <p>Name: ${selectedUser.name}</p>
          <p>Email: ${selectedUser.email}</p>
          <p>Phone: ${selectedUser.phone}</p>
          <!-- Add more user details as needed -->
        `;
      } else {
        userDetailsDiv.innerHTML = '';
      }
    });