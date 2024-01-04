let taskApi = (function () {
  let save = function (task) {
    console.log(`saving task ${task.name}`);
  };

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
