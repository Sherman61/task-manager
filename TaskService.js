/* let taskApi = (function () {
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
 */

let taskApi = (function () {
  let greet = function (name) {
    console.log(`hello ${name}`);
  };

  let eat = function () {
    let audio = new Audio(
      "https://freesound.org/data/previews/511/511919_919187-lq.mp3"
    );
    audio.play();
  };
  return {
    greet: greet,
    eat: eat,
  };
})();
taskApi.greet("shiya");
// taskApi.eat();
