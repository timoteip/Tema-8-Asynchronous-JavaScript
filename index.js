// Get all Projects
async function getProject() {
  await fetch("https://app.paymoapp.com/api/projects/", {
    headers: {
      "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      projects = data;
    });
  return projects;
}

// Get all Tasklists
async function getTasklists() {
  await fetch("https://app.paymoapp.com/api/tasklists/", {
    headers: {
      "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tasklists = data;
    });
  return tasklists;
}

// Get all Tasks
async function getTasks() {
  await fetch("https://app.paymoapp.com/api/tasks/", {
    headers: {
      "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      tasks = data;
    });
  return tasks;
}

// Main
async function main() {
  let projects;
  let tasklists;
  let tasks;

  await getProject().then((res) => {
    projects = res.projects;
  });

  await getTasklists().then((res) => {
    tasklists = res.tasklists;
  });

  await getTasks().then((res) => {
    tasks = res.tasks;
  });

  var list = {};

  projects.forEach((element) => {
    element.tasklists = {};
    let shortList = { name: element.name, tasklists: {} };
    list[element.id] = shortList;
  });

  tasklists.forEach((element) => {
    element.tasks = {};
    let shortList = { name: element.name, tasks: {} };
    list[element.project_id].tasklists[element.id] = shortList;
  });

  tasks.forEach((element) => {
    list[element.project_id].tasklists[element.tasklist_id].tasks[element.id] =
      element.name;
  });

  console.log(list);
}

main();
