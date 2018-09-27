function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation(){
  return input.value;
}

function addNewElementAsLi(){
  let ul = document.getElementById("#employee-list");
  let li = document.createElement("li");
  let employeeName =  retrieveEmployeeInformation();
  li.appendChild(document.createTextNode('employeeName'));
  ul.appendChild(li);
}
