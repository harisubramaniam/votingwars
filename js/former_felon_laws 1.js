/* Define for default load */
var former_felon_laws_data = null

/* Load default */
function start(){
  $.getJSON("data/felon_voting_laws.json",function(former_felon_laws) {
    former_felon_laws_data = former_felon_laws;
  })
  .error(function(jqXHR, textStatus, errorThrown) {
    console.log("error " + textStatus);
    console.log(errorThrown);
  })
}

start();

$(document).ready(function() {
  //getDataByState(state); 
});

function update_charts() {
  getFactsByState();
}

function getFactsByState() {
    var count = 0;
    var laws = '';
    var selected_state = $('#select-state').val();

    $.each(former_felon_laws_data, function() {
        loop_state = former_felon_laws_data[count].state;
        if(selected_state == loop_state) {
          // laws = "<div class=\"row\" style=\"padding:5px\">";
          // laws += "<div class=\"col-xs-8\">Section of the Criminal Code:</div><div class=\"col-xs-4\"> " + former_felon_laws_data[count]["criminal_code"] + "</div></div>";
          // laws += "<div class=\"row\" style=\"padding:5px\">";
          // laws += "<div class=\"col-xs-8\">Under the Influence Law:</div><div class=\"col-xs-4\"> " + former_felon_laws_data[count]["former_felon_law"] + "</div></div>";
          laws += "<div class=\"row\" style=\"padding:5px\">";
          laws += "<div class=\"col-xs-12\"> " + former_felon_laws_data[count]["felon_voting_law"] + "</div>";
        } 
        count++;
        $('#textbox').html(laws).fadeIn(3000);
    });

}