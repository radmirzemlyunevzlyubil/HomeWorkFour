////////////////////TASK_1////////////////////

function getTextFromFirstLi() {
    const firstLi = document.querySelector('li');
    return firstLi.textContent;
  }
  
  console.log(getTextFromFirstLi()); 
  
////////////////////TASK_2////////////////////

function getTextArrayFromLiTags() {
    const liTags = document.querySelectorAll('li');
    const textArray = Array.from(liTags).map(li => li.textContent);
    return textArray;
  }
  
  console.log(getTextArrayFromLiTags());

////////////////////TASK_3////////////////////

function getTextArrayFromClassListItems() {
  const listItems = document.querySelectorAll('.list-item');
  const textArray = Array.from(listItems).map(item => item.textContent);
  return textArray;
}

console.log(getTextArrayFromClassListItems()); 

////////////////////TASK_4////////////////////

function getClassArrayFromClassListItems() {
  const listItems = document.querySelectorAll('.list-item');
  const classArray = Array.from(listItems).map(item => item.getAttribute('class'));
  return classArray;
}

console.log(getClassArrayFromClassListItems());

////////////////////TASK_5////////////////////

function getDataTestIdArrayFromClassListItems() {
  const listItems = document.querySelectorAll('.list-item');
  const dataTestIdArray = Array.from(listItems).map(item => item.getAttribute('data-test-id'));
  return dataTestIdArray;
}

console.log(getDataTestIdArrayFromClassListItems());

////////////////////TASK_6////////////////////

function getBrokenDataTestIdArray() {
  const listItems = document.querySelectorAll('.list-item');
  const brokenDataTestIdArray = Array.from(listItems).filter(item => !item.getAttribute('class').includes(item.textContent)).map(item => item.getAttribute('data-test-id'));
  return brokenDataTestIdArray;
}

console.log(getBrokenDataTestIdArray()); 

////////////////////TASK_7////////////////////

function updateListItemsText() {
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach(item => {
    const dataTestId = item.getAttribute('data-test-id');
    item.textContent = `${dataTestId} ${item.textContent}`;
  });
}

updateListItemsText();

////////////////////TASK_8////////////////////

function hackSecretLogin() {
  const secretLoginInput = document.getElementById('secret-login');
  secretLoginInput.value = 'You were hacked, LMAO';
}

hackSecretLogin();