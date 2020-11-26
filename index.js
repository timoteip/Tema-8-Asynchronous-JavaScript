// Get all Projects
fetch("https://app.paymoapp.com/api/projects/", {
  headers: {
    "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
  },
})
.then(res => res.json())
.then(data => console.log(data))


// Get all Tasklists
fetch("https://app.paymoapp.com/api/tasklists/", {
  headers: {
    "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
  },
})
.then(res => res.json())
.then(data => console.log(data))

// Get all Tasks
fetch("https://app.paymoapp.com/api/tasks/", {
  headers: {
    "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
  },
})
.then(res => res.json())
.then(data => console.log(data))