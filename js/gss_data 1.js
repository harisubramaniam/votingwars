/* Define for default load */
var data = null;
var answers_data = null;

/* Load default */
function start(){
  $.getJSON("data/gss_data.json",function(answers) {
    answers_data = answers;
    // console.log(answers_data);
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
  getAnswersByQuestion();
  // document.getElementById('subhed').style.display = 'block';
}

function getAnswersByQuestion() {
  var count = 0;
  var i = 0;
  var year_arr = [];
  var white_ans_1 = [];
  var white_ans_2 = [];
  var white_ans_3 = [];
  var white_ans_4 = [];
  var white_ans_5 = [];
  var black_ans_1 = [];
  var black_ans_2 = [];
  var black_ans_3 = [];
  var black_ans_4 = [];
  var black_ans_5 = [];
  var other_ans_1 = [];
  var other_ans_2 = [];
  var other_ans_3 = [];
  var other_ans_4 = [];
  var other_ans_5 = [];

  var temp_question = $('#question-select').val();
  if (temp_question=='q1') {
    var legend1 = 'A Great Deal';
    var legend2 = 'Only Some';
    var legend3 = 'Hardly Any';
  } else if (temp_question=='q2') {
    var legend1 = 'Satisfied';
    var legend2 = 'More or Less';
    var legend3 = 'Not at all';
  } else if (temp_question=='q3') {
    var legend1 = 'Better';
    var legend2 = 'Stayed same';
    var legend3 = 'Worse';
  } else if (temp_question=='q4') {
    var legend1 = 'None';
    var legend2 = 'A little';
    var legend3 = 'Some';
    var legend4 = 'Quite a bit';
    var legend5 = 'A great deal';
  } else if ((temp_question=='q5')||(temp_question=='q6')||(temp_question=='q8')) {
    var legend1 = 'Strongly Agree';
    var legend2 = 'Agree';
    var legend3 = 'Neither Agree or Disagree';
    var legend4 = 'Disagree';
    var legend5 = 'Strongly Disagree';
  } else {
    var legend1 = 'Increased a lot';
    var legend2 = 'Increased a little';
    var legend3 = 'Remain the same as it is';
    var legend4 = 'Reduced a little';
    var legend5 = 'Reduced a lot';
  }
  var data_count = answers_data[count]["dataset"].length;
  if (['q1','q2','q3'].indexOf(temp_question) >= 0 ) { // questions with three answers
    $.each(answers_data, function(){ 
      loop_question = answers_data[count].question;
      if(temp_question == loop_question) {
        for (i=0; i < answers_data[count]["dataset"].length; i++) {
          year_arr.push(answers_data[count]["dataset"][i]["year"]);
          white_ans_1.push(answers_data[count]["dataset"][i]["white_ans_1"]);
          white_ans_2.push(answers_data[count]["dataset"][i]["white_ans_2"]);
          white_ans_3.push(answers_data[count]["dataset"][i]["white_ans_3"]);
          black_ans_1.push(answers_data[count]["dataset"][i]["black_ans_1"]);
          black_ans_2.push(answers_data[count]["dataset"][i]["black_ans_2"]);
          black_ans_3.push(answers_data[count]["dataset"][i]["black_ans_3"]);
          other_ans_1.push(answers_data[count]["dataset"][i]["other_ans_1"]);
          other_ans_2.push(answers_data[count]["dataset"][i]["other_ans_2"]);
          other_ans_3.push(answers_data[count]["dataset"][i]["other_ans_3"]);
        }
      }
      count++;
    });

    Highcharts.setOptions({
      chart: {
        backgroundColor: '#efefef',
        style: {
          fontFamily: 'Roboto Condensed',
        },
      },
      lang: {
        thousandsSep: ','
      }
    });
    $('#white-container').highcharts({
      chart: {
        type: 'column',
        // backgroundColor: '#efefef',
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        style: {
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: '.1em'
        },
        text: "",
        x: -20
      },
      subtitle: 
      {
        text: "Source: University of Chicago General Social Survey",
        useHTML: true,
        style: {
          fontFamily: 'Roboto Condensed',
          fontWeight: '400',
          fontSize: '.8em'
        }
      },
      xAxis: {
        labels: {
          style: {
            fontFamily: 'Roboto Condensed',
            fontSize: '1em'
          }
        },
        categories: year_arr
      },
      yAxis: {
        labels: {
          format: '{value}%',
        },
        title: {
          enabled: false
        },
        min: 0
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent',
          events: {
            legendItemsClick: function() {
              return false;
            }
          }
        },
        series: {
          pointWidth: 50
        },
        allowPointSelect: false,
      },
      legend: {

      },
      series: [{
        name: legend1,
        color: '#364469',
        data: white_ans_1
      }, {
        name: legend2,
        color: '#818B8F',
        data: white_ans_2
      }, {
        name: legend3,
        color: '#9E2531',
        data: white_ans_3
      }]
    });
  } else { // questions with 5 answers
    $.each(answers_data, function(){ 
      loop_question = answers_data[count].question;
      if(temp_question == loop_question) {
        for (i=0; i < answers_data[count]["dataset"].length; i++) {
          year_arr.push(answers_data[count]["dataset"][i]["year"]);
          white_ans_1.push(answers_data[count]["dataset"][i]["white_ans_1"]);
          white_ans_2.push(answers_data[count]["dataset"][i]["white_ans_2"]);
          white_ans_3.push(answers_data[count]["dataset"][i]["white_ans_3"]);
          white_ans_4.push(answers_data[count]["dataset"][i]["white_ans_4"]);
          white_ans_5.push(answers_data[count]["dataset"][i]["white_ans_5"]);
          black_ans_1.push(answers_data[count]["dataset"][i]["black_ans_1"]);
          black_ans_2.push(answers_data[count]["dataset"][i]["black_ans_2"]);
          black_ans_3.push(answers_data[count]["dataset"][i]["black_ans_3"]);
          black_ans_4.push(answers_data[count]["dataset"][i]["black_ans_4"]);
          black_ans_5.push(answers_data[count]["dataset"][i]["black_ans_5"]);
          other_ans_1.push(answers_data[count]["dataset"][i]["other_ans_1"]);
          other_ans_2.push(answers_data[count]["dataset"][i]["other_ans_2"]);
          other_ans_3.push(answers_data[count]["dataset"][i]["other_ans_3"]);
          other_ans_4.push(answers_data[count]["dataset"][i]["other_ans_4"]);
          other_ans_5.push(answers_data[count]["dataset"][i]["other_ans_5"]);
        }
      }
      count++;
    });

    Highcharts.setOptions({
      chart: {
        style: {
          fontFamily: 'Roboto Condensed'
        },
        backgroundColor: '#efefef',

      },
      lang: {
        thousandsSep: ','
      }
    });
    $('#white-container').highcharts({
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        style: {
          fontFamily: 'Roboto',
          fontWeight: 'bold',
          fontSize: '.1em'
        },
        text: "",
        x: -20
      },
      subtitle: 
      {
        text: "Source: University of Chicago General Social Survey",
        useHTML: true,
        style: {
          fontFamily: 'Roboto Condensed',
          fontWeight: '400',
          fontSize: '.8em'
        }
      },  
      xAxis: {
        labels: {
          style: {
            fontFamily: 'Roboto Condensed',
            fontSize: '1em'
          }
        },
        categories: year_arr
      },
      yAxis: {
        labels: {
          format: '{value}%',
        },
        title: {
          enabled: false
        },
        min: 0
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.percentage:.0f}%<br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'percent',
          events: {
            legendItemsClick: function() {
              return false;
            }
          }
        },
        series: {
          pointWidth: 50
        },
        allowPointSelect: false,
      },
      legend: {

      },
      series: [{
        name: legend1,
        color: '#364469',
        data: white_ans_1
      }, {
        name: legend2,
        color: '#738DA8',
        data: white_ans_2
      }, {
        name: legend3,
        color: '#818B8F',
        data: white_ans_3
      }, {
        name: legend4,
        color: '#C7514F',
        data: white_ans_4
      }, {
        name: legend5,
        color: '#9E2531',
        data: white_ans_5
      }]
    });
  }

}
