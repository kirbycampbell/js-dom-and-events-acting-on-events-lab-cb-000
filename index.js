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
  let employeeName =  retrieveEmployeeInformation();
  let employeeList = document.querySelector('.employee-list');
  employeeList.insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}
