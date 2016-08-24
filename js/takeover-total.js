(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Roboto Condensed'
        },
        backgroundColor: "#efefef",
    },
    lang: {
        thousandsSep: ','
    }
});
$("#container").highcharts({
    chart: {
        type: 'line'
    },
    credits: {
        text: 'News21',
        href: 'http://blog.votingwars.news21.com'
    },
    exporting: {
        enabled: false
    },
    title: {
        style: {
            // display: 'none',
            fontSize: '30px',
            fontWeight: 700
        },
        text: 'Total number of residents affected by state takeover since 2010'
    },
    subtitle: {
        style: {
            // display: 'none',
            fontSize: '18px'
        },
        text: 'The number of Americans living in communities affected by state takeovers grew by 35 percent between 2010 and 2015.'
    },
    legend: {
        enabled: false,
        // align: 'center',
        // x: 0,
        // borderWidth: 0,
        // layout: 'horizontal',
        // verticalAlign: 'top',
        // backgroundColor: 'rgba(239, 239, 239, 0)',
        // borderColor: '#CCC',
        // shadow: false
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            year: '%Y'
        },
    },
    yAxis: {
        labels: {
            format: '{value:,.0f}'
        },
        title: {
            align: 'middle',
            text: 'Total residents covered under a "takeover"'
            // rotation: 0 
        },
        min: 3500000
    },
    tooltip: {
        headerFormat: '<b>{point.x:%B %e, %Y}</b><br>',
        pointFormat: '{point.myString}<br>{series.name}: <b>{point.y}</b><br />',
        shared: true,
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        },
        series: {
            animation: {
                duration: 3000
            },
            events: {
                legendItemClick: function() {
                    return false;
                }
            },
        }
    },
    series: [{
        name: 'Total under takeover',
        color: '#5383D1',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 1,
        },
        data: [
            {x: Date.UTC(2010, 1, 11), y: 3597516, myString: "Added Fayette County School District, West Virginia"},
            {x: Date.UTC(2010, 1, 24), y: 3643225, myString: "Added Okolona Separate School District, Mississippi"},
            {x: Date.UTC(2010, 3, 16), y: 3648222, myString: "Added Sunflower County School District, Mississippi"},
            {x: Date.UTC(2010, 4, 5), y: 3665031, myString: "Added Alisal Union Elementary School District, California"},
            {x: Date.UTC(2010, 6, 1), y: 3723017, myString: "Added Riverview Gardens School District, Missouri"},
            {x: Date.UTC(2010, 6, 13), y: 3761927, myString: "Added Coosa County School District, Alabama"},
            {x: Date.UTC(2010, 6, 13), y: 3773174, myString: "Added Sumter County School District, Alabama"},
            {x: Date.UTC(2010, 9, 1), y: 3786607, myString: "Removed Decatur School District, Arkansas"},
            {x: Date.UTC(2010, 9, 1), y: 3782968, myString: "Removed Greenland Public Schools, Arkansas"},
            {x: Date.UTC(2011, 0, 12), y: 3776474, myString: "Added Round Valley Unified School District, California"},
            {x: Date.UTC(2011, 4, 30), y: 3779042, myString: "Removed Roosevelt Union Free School District, New York"},
            {x: Date.UTC(2011, 5, 8), y: 3760855, myString: "Added Gilmer County School District, West Virginia"},
            {x: Date.UTC(2011, 5, 20), y: 3769561, myString: "Added Helena-West Helena School District, Arkansas"},
            {x: Date.UTC(2011, 5, 20), y: 3783036, myString: "Added Pulaski County Special School District, Arkansas"},
            {x: Date.UTC(2011, 5, 21), y: 3939720, myString: "Added Drew School District, Mississippi"},
            {x: Date.UTC(2011, 5, 30), y: 3941589, myString: "Removed West Fresno Elementary School District (now merged into another district), California"},
            {x: Date.UTC(2011, 6, 12), y: 3940062, myString: "Removed Sumter County School District, Alabama"},
            {x: Date.UTC(2011, 7, 1), y: 3926629, myString: "Added Emma Donnan Middle School, Indiana"},
            {x: Date.UTC(2011, 7, 1), y: 3926951, myString: "Added TC Howe High School, Indiana"},
            {x: Date.UTC(2011, 7, 1), y: 3927594, myString: "Added Emmerich Manual High School , Indiana"},
            {x: Date.UTC(2011, 7, 1), y: 3928149, myString: "Added Arlington Community High School , Indiana"},
            {x: Date.UTC(2011, 7, 1), y: 3928597, myString: "Added George Washington Community High School , Indiana"},
            {x: Date.UTC(2011, 7, 1), y: 3929172, myString: "Added Theodore Roosevelt High School , Indiana"},
            {x: Date.UTC(2011, 10, 29), y: 3929774, myString: "Added Lawrence School District, Massachusetts"},
            {x: Date.UTC(2012, 0, 1), y: 4007138, myString: "Removed Okolona Separate School District, Mississippi"},
            {x: Date.UTC(2012, 0, 26), y: 4002141, myString: "Added Midfield City School District, Alabama"},
            {x: Date.UTC(2012, 2, 2), y: 4007460, myString: "Added Highland Park City Schools, Michigan"},
            {x: Date.UTC(2012, 3, 19), y: 4018411, myString: "Added Muskegon Heights School District, Michigan"},
            {x: Date.UTC(2012, 3, 20), y: 4029218, myString: "Added Aberdeen School District, Mississippi"},
            {x: Date.UTC(2012, 4, 25), y: 4038889, myString: "Removed Alisal Union Elementary School District, California"},
            {x: Date.UTC(2012, 5, 14), y: 3980903, myString: "Added Birmingham City School District, Alabama"},
            {x: Date.UTC(2012, 5, 21), y: 4192608, myString: "Added North Chicago School District 187, Illinois"},
            {x: Date.UTC(2012, 8, 28), y: 4221651, myString: "Added Oktibbeha County School District, Mississippi"},
            {x: Date.UTC(2012, 9, 3), y: 4234328, myString: "Added Inglewood Unified School District, California"},
            {x: Date.UTC(2012, 11, 5), y: 4348501, myString: "Added Breathitt County School District, Kentucky"},
            {x: Date.UTC(2012, 11, 12), y: 4361148, myString: "Removed Lincoln County School District, West Virginia"},
            {x: Date.UTC(2012, 11, 13), y: 4339549, myString: "Added Chester-Upland School District, Pennsylvania"},
            {x: Date.UTC(2013, 0, 1), y: 4380873, myString: "Removed Round Valley Unified School District, California"},
            {x: Date.UTC(2013, 0, 1), y: 4378305, myString: "Removed Hazlehurst City School District, Mississippi"},
            {x: Date.UTC(2013, 0, 1), y: 4367803, myString: "Removed North Panola School District, Mississippi"},
            {x: Date.UTC(2013, 0, 1), y: 4356681, myString: "Removed Tate County School District, Mississippi"},
            {x: Date.UTC(2013, 2, 31), y: 4338117, myString: "Removed Vallejo City Unified School District, California"},
            {x: Date.UTC(2013, 3, 2), y: 4217264, myString: "Added Duquesne City School District, Pennsylvania"},
            {x: Date.UTC(2013, 4, 7), y: 4222822, myString: "Added El Paso Independent School District, Texas"},
            {x: Date.UTC(2013, 4, 8), y: 4551951, myString: "Removed McDowell County School District, West Virginia"},
            {x: Date.UTC(2013, 4, 16), y: 4530670, myString: "Added Mineral Springs School District, Arkansas"},
            {x: Date.UTC(2013, 8, 16), y: 4534361, myString: "Added Claiborne County School District, Mississippi"},
            {x: Date.UTC(2013, 8, 16), y: 4543757, myString: "Added Leflore County School District, Mississippi"},
            {x: Date.UTC(2013, 9, 10), y: 4559051, myString: "Removed Coosa County School District, Alabama"},
            {x: Date.UTC(2013, 9, 10), y: 4547804, myString: "Removed Midfield City School District, Alabama"},
            {x: Date.UTC(2014, 0, 1), y: 4542485, myString: "Removed Indianola School District, Mississippi"},
            {x: Date.UTC(2014, 0, 1), y: 4530980, myString: "Removed Sunflower County School District, Mississippi"},
            {x: Date.UTC(2014, 0, 1), y: 4514171, myString: "Removed Drew School District, Mississippi"},
            {x: Date.UTC(2014, 1, 1), y: 4512302, myString: "Added Glenwood Leadership Academy , Indiana"},
            {x: Date.UTC(2014, 1, 12), y: 4512785, myString: "Added Selma City School District, Alabama"},
            {x: Date.UTC(2014, 1, 25), y: 4533061, myString: "Added Scott County School District, Mississippi"},
            {x: Date.UTC(2014, 3, 10), y: 4552875, myString: "Added Lee County School District, Arkansas"},
            {x: Date.UTC(2014, 5, 5), y: 4563026, myString: "Added Camden City School District, New Jersey"},
            {x: Date.UTC(2014, 6, 1), y: 4563026, myString: "Added Normandy School District, Missouri"},
            {x: Date.UTC(2014, 6, 1), y: 4599276, myString: "Added Recovery School District, Louisiana"},
            {x: Date.UTC(2014, 6, 1), y: 4630007, myString: "Added Recovery School District, Louisiana"},
            {x: Date.UTC(2014, 6, 9), y: 4632053, myString: "Removed Preston County School District, West Virginia"},
            {x: Date.UTC(2014, 6, 14), y: 4598333, myString: "Added Beaumont Independent School District, Texas"},
            {x: Date.UTC(2014, 7, 4), y: 4731569, myString: "Added Achievement School District 2014-2015, Tennessee"},
            {x: Date.UTC(2014, 9, 1), y: 4738707, myString: "Removed Mineral Springs School District, Arkansas"},
            {x: Date.UTC(2014, 9, 15), y: 4735016, myString: "Removed Grant County School District, West Virginia"},
            {x: Date.UTC(2014, 10, 1), y: 4723187, myString: "Added Lincoln School, Indiana"},
            {x: Date.UTC(2014, 10, 1), y: 4723535, myString: "Added Dunbar Pulaski Middle School, Indiana"},
            {x: Date.UTC(2014, 11, 1), y: 4723932, myString: "Removed Mingo County School District, West Virginia"},
            {x: Date.UTC(2015, 0, 1), y: 4697703, myString: "Removed Oktibbeha County School District, Mississippi"},
            {x: Date.UTC(2015, 0, 1), y: 4685026, myString: "Removed Scott County School District, Mississippi"},
            {x: Date.UTC(2015, 0, 28), y: 4665212, myString: "Added Little Rock School District, Arkansas"},
            {x: Date.UTC(2015, 2, 12), y: 4844190, myString: "Removed Lee County School District, Arkansas"},
            {x: Date.UTC(2015, 3, 28), y: 4834039, myString: "Added Holyoke School District, Massachusetts"},
            {x: Date.UTC(2015, 4, 1), y: 4874118, myString: "Removed Dunbar Pulaski Middle School, Indiana"},
            {x: Date.UTC(2015, 4, 18), y: 4873721, myString: "Removed El Paso Independent School District, Texas"},
            {x: Date.UTC(2015, 4, 29), y: 4544592, myString: "Removed Achievement School District 2014-2015, Tennessee"},
            {x: Date.UTC(2015, 5, 11), y: 4537454, myString: "Removed Birmingham City School District, Alabama"},
            {x: Date.UTC(2015, 6, 9), y: 4325749, myString: "Added Tunica County School District, Mississippi"},
            {x: Date.UTC(2015, 6, 10), y: 4336332, myString: "Added Menifee County School District, Kentucky"},
            {x: Date.UTC(2015, 7, 1), y: 4342669, myString: "Added Winchester School District, Connecticut"},
            {x: Date.UTC(2015, 7, 1), y: 4353758, myString: "Added Recovery School District, Louisiana"},
            {x: Date.UTC(2015, 9, 15), y: 4354265, myString: "Added Youngstown City School District, Ohio"},
            {x: Date.UTC(2015, 11, 10), y: 4422124, myString: "Added Dollarway School District, Arkansas"},
            {x: Date.UTC(2015, 11, 18), y: 4435674, myString: "Added La Marque Independent School District, Texas"},
            {x: Date.UTC(2016, 0, 26), y: 4463858, myString: "Added Southbridge School District, Massachusetts"},
            {x: Date.UTC(2016, 2, 8), y: 4480633, myString: "Added Brockington Elementary School , South Carolina"},
            {x: Date.UTC(2016, 2, 8), y: 4481010, myString: "Added Johnson Middle School, South Carolina"},
            {x: Date.UTC(2016, 2, 10), y: 4481175, myString: "Removed Helena-West Helena School District, Arkansas"},
            {x: Date.UTC(2016, 2, 10), y: 4467700, myString: "Removed Pulaski County Special School District, Arkansas"},
            {x: Date.UTC(2016, 4, 24), y: 4311016, myString: "Added Edgewood Independent School District (Bexar County), Texas"},
            {x: Date.UTC(2016, 6, 1), y: 4369883, myString: "Removed King City Joint Union High School District, California"}
        ]
    }]
});