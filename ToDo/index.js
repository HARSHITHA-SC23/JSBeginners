let popupOpen = document.getElementById("open");
let popupWindow = document.getElementById("modal");
let popupClose = document.getElementById("close");
let taskDelete = document.getElementById('delete');

const taskArray = []
popupOpen.addEventListener('click', function (e) {
    e.preventDefault();
    popupWindow.style.display = "block";
})

popupClose.addEventListener('click', function () {
    popupWindow.style.display = "none";
})

taskDelete.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
})

window.addEventListener('click', function (e) {
    if (e.target === popupWindow) {
        popupWindow.style.display = "none";
    }
})

const tBody = document.querySelector('tbody');

function updateTable() {
    const retrievedArray = JSON.parse(localStorage.getItem('todoList'));
    const tableData = retrievedArray
        .map((task) => {
            return `
                <tr>
                <td>${task.taskName}</td>
                <td>${task.taskPriority}</td>
                <td>${task.taskDue}</td>
                </tr>`;
        })
        .join('');

    tBody.innerHTML = tableData;
}

function taskForm(event) {
    event.preventDefault();
    let taskName = document.getElementById("taskName").value;
    let taskPriority = document.querySelector('input[name="priority"]:checked').value;
    let taskDue = document.getElementById("taskDue").value;
    document.getElementById("taskForm").value = null;
    popupWindow.style.display = "none";
    const newTask = {
        taskName: taskName,
        taskPriority: taskPriority,
        taskDue: taskDue
    };
    taskArray.push(newTask);
    localStorage.setItem('todoList', JSON.stringify(taskArray));
    updateTable();
    event.target.reset();
}


document.addEventListener("DOMContentLoaded", updateTable);