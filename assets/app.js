const date = new Date();
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

$('#currentDay').html(daysOfWeek[date.getDay()]);
[7,8,9,10,11,12,13,14,15,16,17].forEach(currentItem => {
  $('.container').append(`
    <div class="input-group mb-3" style="opacity: ${date.getHours() > currentItem ? 0.3 : 1.0}">
      <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default" style="width: 100px">
            ${currentItem < 13 ? currentItem : currentItem -12}:00 ${currentItem < 12 ? 'am' : 'pm'}
          </span>
      </div>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      <div class="input-group-append">
        <div class="input-group-text">
          <span style="margin-right: 8px">Save?</span>
          <input type="checkbox" aria-label="Checkbox for following text input">
        </div>
      </div>
    </div>`);
});