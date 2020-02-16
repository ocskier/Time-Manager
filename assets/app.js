const date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

$('#currentDay').html(daysOfWeek[date.getDay()]);
let startTime = 6;
let storedData = JSON.parse(localStorage.getItem('storedData')) || Array.from(new Array(11), s => {
  startTime++;
  return {
    time: startTime,
    todo: ''
  }
});

const printSlots = () => {
  $('.container').empty();
  storedData.forEach(currentItem => {
    let inputGroup = $('<div class="input-group mb-3"></div>');
    inputGroup.attr('style', `opacity: ${date.getHours() >= currentItem.time ? 0.3 : 1.0}`);

    let inputPrepend = $('<div class="input-group-prepend">');
    let inputSpan1 = $('<span class=input-group-text></span>');
    inputSpan1.attr('id', 'inputGroup-sizing-default');
    inputSpan1.attr('style', 'width: 100px');
    inputSpan1.attr('data-time', currentItem.time);
    inputSpan1.html(`${currentItem.time < 13 ? currentItem.time : currentItem.time -12}:00 ${currentItem.time < 12 ? 'am' : 'pm'}`)
    inputPrepend.append(inputSpan1);

    let input = $(`<input type="text" style="text-align: center;" class="form-control" ${date.getHours() >= currentItem.time ? "disabled" : null}></input>`);
    input.val(currentItem.todo);
    input.attr('aria-label', 'Sizing example input');
    input.attr('aria-describedby', 'inputGroup-sizing-default');

    let inputAppend = $('<div class="input-group-append"></div>');
    let inputTxt = $('<div class="input-group-text"></div>');
    let inputSpan2 = $('<span></span>').attr('style', 'margin-right: 8px');
    inputSpan2.text('Save?');
    let inputCheckbox = $(`<input type="checkbox" ${date.getHours() >= currentItem.time ? "disabled" : null}></input>`);
    inputCheckbox.attr('aria-label', 'Checkbox for following text input');
    inputTxt.append(inputSpan2, inputCheckbox);
    inputAppend.append(inputTxt);

    inputGroup.append(inputPrepend, input, inputAppend);
    $('.container').append(inputGroup);
  });
}

printSlots();

$('input[type=checkbox]').click(event => {
  console.log(event);
  if (event.target.checked) {
    const inputText = event.target.parentNode.parentNode.parentNode.children[1].value;
    const timeInput = event.target.parentNode.parentNode.parentNode.children[0].children[0].getAttribute('data-time');
    storedData = Array.from(storedData, s => {
      if (
        s.time === parseInt(timeInput)
      )
        return {
          time: s.time,
          todo: inputText
        }
      else return s
    });
    localStorage.setItem('storedData', JSON.stringify(storedData));
  };
});