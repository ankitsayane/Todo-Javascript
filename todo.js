//global declaration
var arr = [];
var str = "";

//delete function
function deleteData(index) {
  arr.splice(index, 1);
  display();
}

//modify function
function modify(index) {
  arr[index].status = "Completed";
  display();
}

//display function
function display() {
  str = "";
  str += `<table class="table"><tr><th scope="col">Name</th><th scope="col">Description</th><th scope="col">Date</th><th scope="col">Status</th><th scope="col">Action</th></tr>`;
  for (let i = 0; i < arr.length; i++) {
    let statusColor =
      arr[i].status === "Completed" ? "text-success" : "text-danger";
    str += `<tr><th scope="row">${arr[i].name}</th><td>${arr[i].description}</td><td>${arr[i].date}</td><td class="${statusColor}">${arr[i].status}</td><td><button type="button" class="btn btn-danger" id="${i}" onclick="deleteData(${i})">Remove</button>&nbsp;<button type="button" class="btn btn-success" id="comp${i}" onclick="modify(${i})">Completed</button></td></tr>`;
  }
  str += `</table>`;
  document.getElementById("result").innerHTML = str;
}

//add todo's funtion
function todoList() {
  var nm = document.getElementById("name").value;
  var des = document.getElementById("description").value;
  var dt = document.getElementById("date").value;
  var obj = {
    name: nm,
    description: des,
    date: dt,
    status: "Pending",
  };

  arr.push(obj);
  display();
  console.log(arr);
}
