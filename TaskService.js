let taskApi = (function () {
  let save = function (task) {
    console.log(`saving task ${task.name}`);
    let taskArray = JSON.parse(localStorage.getItem('tasks'));

    if(!taskArray){
      taskArray = [];
    }

    taskArray.push(task);
    let str  = JSON.stringify(taskArray);
    localStorage.setItem('tasks',str);s
  };

  function getTasksFromLocalStorage(){

  }

  let del = function (task) {
    console.log(`deleting task ${task.name}`);
  };

  let getTaskByName = function (name) {
    console.log("returning task by name");
  };

  let getTaskById = function (id) {
    console.log("returning task by id");
  };

  return {
    save: save,
    del: del,
    getTaskByName: getTaskByName,
    getTaskById: getTaskById,
  };
})();
