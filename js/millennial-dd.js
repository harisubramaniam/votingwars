/* Define for default load */
var mm_data = null

/* Load default */
function start(){
  $.getJSON("data/millennial-data.json",function(mm_laws) {
    mm_data = mm_laws;
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {

});

function update_charts() {
  getFactsByState();
}

function getFactsByState() {
    var count = 0;
    var laws = '';
    var selected_state = $('#select-state').val();

    $.each(mm_data, function() {
        loop_state = mm_data[count].state;
        if(selected_state == loop_state) {
          laws = "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Online Registration:</div><div class=\"col-xs-4\"> " + mm_data[count]["online-registration"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Excuse-free absentee voting:</div><div class=\"col-xs-4\"> " + mm_data[count]["absentee-voting"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">"; 
          laws += "<div class=\"col-xs-8\">Election-day registration:</div><div class=\"col-xs-4\"> " + mm_data[count]["election-day-registration"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-8\">Early voting:</div><div class=\"col-xs-4\"> " + mm_data[count]["early-voting"] + "</div></div>";
        } 
        count++;
        $('#textbox').html(laws).fadeIn(3000);
    });

}