/// <reference path="./components/project-input.ts" />
/// <reference path="./components/project-list.ts" />

//Project type
namespace App {
    new ProjectInput();
    new ProjectList("active");
    new ProjectList("finished");
}
