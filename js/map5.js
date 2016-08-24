$(function() {
  // Setup common map params
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Roboto Condensed'
      }
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    }
  });

  // Default load params
  $.getJSON("data/2000_2012avg.json", function(dataset1) {
      // Initiate the chart
    $('#container').highcharts('Map', {

      legend: {
        enabled: false
      },
      chart: {
        backgroundColor: '#EFEFEF'
      },
      title : {
        text : '2000-2012 Hispanic turnout average',
        floating: true,
        verticalAlign: 'top',
        margin: 0
      },
      mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      tooltip: {
        enabled: true,
        useHTML: true,
        headerFormat: '',
        pointFormat: '<b>{point.name}</b> <br />{point.value}'
      },
      colorAxis: {
        stops: [
            // [0, '#EFEFEF'],
            [0.2, '#9E2531'],
            [0.30, '#EA909B'],
            [0.35, '#efefef'],
            [0.40, '#364469'],
            [0.50, '#262B3F'],
            
        ],
        min: 0
      },
      series : [{
        data : dataset1,
        mapData: Highcharts.maps['countries/us/us-all'],
        joinBy: 'hc-key',
        name: 'Voting Law Changes',
        states: {
          hover: {
            color: '#9E2531'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      },
      {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
      }]
    });
  });

  // Button 1 clicked
  $('#map1').click(function() {

    $.getJSON("data/2000.json", function(dataset1) {
      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : '2000 Hispanic turnout',
          floating: true,
          verticalAlign: 'top',
          margin: 0
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '',
          pointFormat: '<b>{point.name}</b> <br />Bills proposed: {point.value}'
        },
        colorAxis: {
          stops: [
            [0.2, '#9E2531'],
            [0.25, '#EA909B'],
            [0.28, '#efefef'],
            [0.38, '#364469'],
            [0.50, '#262B3F'],
          ],
          min: 0
        },
        series : [{
          data : dataset1,
          mapData: Highcharts.maps['countries/us/us-all'],
          joinBy: 'hc-key',
          name: 'Voting Law Changes',
          states: {
            hover: {
              color: '#9E2531'
            }
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}'
          }
        },
        {
          name: 'Separators',
          type: 'mapline',
          data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
          color: 'silver',
          showInLegend: false,
          enableMouseTracking: false
        }]
      });
    });
  });

  // Button 2 clicked
  $('#map2').click(function() {
    
    $.getJSON("data/2004.json", function(dataset2) {

      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : '2004 Hispanic turnout',
          floating: true,
          verticalAlign: 'top',
          margin: 0
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '',
          pointFormat: '<b>{point.name}</b> <br />Bills enacted: {point.value}'
        },
        colorAxis: {
          stops: [
            [0.2, '#9E2531'],
            [0.25, '#EA909B'],
            [0.28, '#efefef'],
            [0.38, '#364469'],
            [0.50, '#262B3F'],
          ],
          min: 0
        },
        series : [{
          data : dataset2,
          mapData: Highcharts.maps['countries/us/us-all'],
          joinBy: 'hc-key',
          name: 'Voting Law Changes',
          states: {
            hover: {
              color: '#9E2531'
            }
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}'
          }
        },
        {
          name: 'Separators',
          type: 'mapline',
          data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
          color: 'silver',
          showInLegend: false,
          enableMouseTracking: false
        }]
      });
    });
  });

// Button 3 clicked
  $('#map3').click(function() {
    
    $.getJSON("data/2008.json", function(dataset2) {

      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : '2008 Hispanic turnout',
          floating: true,
          verticalAlign: 'top',
          margin: 0
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '',
          pointFormat: '<b>{point.name}</b> <br />Bills enacted: {point.value}'
        },
        colorAxis: {
          stops: [
            [0.2, '#9E2531'],
            [0.25, '#EA909B'],
            [0.28, '#efefef'],
            [0.38, '#364469'],
            [0.50, '#262B3F'],
          ],
          min: 0
        },
        series : [{
          data : dataset2,
          mapData: Highcharts.maps['countries/us/us-all'],
          joinBy: 'hc-key',
          name: 'Voting Law Changes',
          states: {
            hover: {
              color: '#9E2531'
            }
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}'
          }
        },
        {
          name: 'Separators',
          type: 'mapline',
          data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
          color: 'silver',
          showInLegend: false,
          enableMouseTracking: false
        }]
      });
    });
  });

  // Button 3 clicked
  $('#map4').click(function() {
    
    $.getJSON("data/2012.json", function(dataset2) {

      // Initiate the chart
      $('#container').highcharts('Map', {

        legend: {
          enabled: false
        },
        chart: {
          backgroundColor: '#EFEFEF'
        },
        title : {
          text : '2012 Hispanic turnout',
          floating: true,
          verticalAlign: 'top',
          margin: 0
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '',
          pointFormat: '<b>{point.name}</b> <br />Bills enacted: {point.value}'
        },
        colorAxis: {
          stops: [
            [0.2, '#9E2531'],
            [0.25, '#EA909B'],
            [0.28, '#efefef'],
            [0.38, '#364469'],
            [0.50, '#262B3F'],
          ],
          min: 0
        },
        series : [{
          data : dataset2,
          mapData: Highcharts.maps['countries/us/us-all'],
          joinBy: 'hc-key',
          name: 'Voting Law Changes',
          states: {
            hover: {
              color: '#9E2531'
            }
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}'
          }
        },
        {
          name: 'Separators',
          type: 'mapline',
          data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
          color: 'silver',
          showInLegend: false,
          enableMouseTracking: false
        }]
      });
    });
  });



})
