var currentHour = dayjs().format("H");
var currentDay = dayjs().format("dddd, MMM D, YYYY");
currentHour = Number(currentHour);
$("#currentDay").text(currentDay);


function init() {
  var hourBlocks = document.querySelectorAll(".row");
  for (let i = 0; i < hourBlocks.length; i++) {
    var myCurrentBlock = hourBlocks[i];
    var id = myCurrentBlock.id;
    var storage = localStorage.getItem(id);
    var currentBlockTextArea = myCurrentBlock.children[1];
    currentBlockTextArea.value = storage;
    let blockHour = id.split("-")[1];
    blockHour = Number(blockHour)
    if (currentHour == blockHour) {
      myCurrentBlock.classList.add("present");
    } else if (currentHour < blockHour) {
      myCurrentBlock.classList.add("future");
    } else {
      myCurrentBlock.classList.add("past");
    }
  }
}

function saveEvent(event) {
  var parentId = event.target.parentElement.id;
  var textArea = event.target.previousElementSibling;
  localStorage.setItem(parentId, textArea.value);
}

$(function () {
  $(".btn").on("click", saveEvent);
});

init();
