const date = new Date();
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

$('#currentDay').html(daysOfWeek[date.getDay()]);

[7,8,9,10,11,12,13,14,15,16,17].forEach(currentItem => {
  let inputGroup = $('<div class="input-group mb-3"></div>');
  inputGroup.attr('style',`opacity: ${date.getHours() >= currentItem ? 0.3 : 1.0}`);
  
  let inputPrepend = $('<div class="input-group-prepend">');
  let inputSpan1 = $('<span class=input-group-text></span>');
  inputSpan1.attr('id','inputGroup-sizing-default');
  inputSpan1.attr('style','width: 100px');
  inputSpan1.html(`${currentItem < 13 ? currentItem : currentItem -12}:00 ${currentItem < 12 ? 'am' : 'pm'}`)
  inputPrepend.append(inputSpan1);

  let input = $('<input type="text" class="form-control"></input>');
  input.attr('aria-label','Sizing example input');
  input.attr('aria-describedby','inputGroup-sizing-default');

  let inputAppend = $('<div class="input-group-append"></div>');
  let inputTxt = $('<div class="input-group-text"></div>');
  let inputSpan2 = $('<span></span>').attr('style','margin-right: 8px');
  inputSpan2.text('Save?');
  let inputCheckbox = $('<input type="checkbox"></input>');
  inputCheckbox.attr('aria-label','Checkbox for following text input');
  inputTxt.append(inputSpan2,inputCheckbox);
  inputAppend.append(inputTxt);

  inputGroup.append(inputPrepend,input,inputAppend);
  $('.container').append(inputGroup);
});