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
        backgroundColor: '#EFEFEF',
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
        text: '',
        href: 'http://blog.votingwars.news21.com'
    },
    exporting: {
        enabled: false
    },
    title: {
        style: {
            display: 'none',
        },
        // text: "Since the passage of the 1965 Voting Rights Act black representation in Congress has grown to near parity with America's racial composition, except in the South, where political representation still does not resemble the community."
    },
    subtitle: {
        style: {
            display: 'none',
        },
        text: null
    },
    legend: {
        align: 'center',
        x: 0,
        borderWidth: 0,
        layout: 'horizontal',
        verticalAlign: 'bottom',
        backgroundCOlor: '#EFEFEF',
        // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        shadow: false
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            year: '%Y'
        },
        plotLines: [{
            value: Date.UTC(1965, 8, 6),
            label: {
                useHTML: true,
                text: '<strong>Voting Rights Act of 1965</strong>',
                verticalAlign: 'top',
                textAlign: 'center',
                rotation: 360,
                x: 70,
                y: 15
            },
            width: 1,
            dashStyle: 'dash',
            color: '#9E2531',
        }]
    },
    yAxis: {
        labels: {
            format: '{value}'
        },
        title: {
            align: 'middle',
            text: '(per Ten Million Black Residents)'
            // rotation: 0 
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{point.x:%Y}</b><br>',
        pointFormat: '{series.name}: <b>{point.y}</b><br />',
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
        name: 'States in the "Black-Belt"',
        color: '#9E2531',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 1,
        },
        data: [
            [Date.UTC(1869, 5, 15), 7.6],
            [Date.UTC(1871, 5, 15), 12.7],
            [Date.UTC(1873, 5, 15), 17.8],
            [Date.UTC(1875, 5, 15), 20.3],
            [Date.UTC(1877, 5, 15), 10.2],
            [Date.UTC(1879, 5, 15), 2.5],
            [Date.UTC(1881, 5, 15), 3.7],
            [Date.UTC(1883, 5, 15), 3.7],
            [Date.UTC(1885, 5, 15), 0.0],
            [Date.UTC(1887, 5, 15), 5.6],
            [Date.UTC(1889, 5, 15), 1.6],
            [Date.UTC(1891, 5, 15), 1.6],
            [Date.UTC(1893, 5, 15), 1.6],
            [Date.UTC(1895, 5, 15), 1.6],
            [Date.UTC(1897, 5, 15), 1.6],
            [Date.UTC(1899, 5, 15), 0.0],
            [Date.UTC(1901, 5, 15), 0.0],
            [Date.UTC(1903, 5, 15), 0.0],
            [Date.UTC(1905, 5, 15), 0.0],
            [Date.UTC(1907, 5, 15), 0.0],
            [Date.UTC(1909, 5, 15), 0.0],
            [Date.UTC(1911, 5, 15), 0.0],
            [Date.UTC(1913, 5, 15), 0.0],
            [Date.UTC(1915, 5, 15), 0.0],
            [Date.UTC(1917, 5, 15), 0.0],
            [Date.UTC(1919, 5, 15), 0.0],
            [Date.UTC(1921, 5, 15), 0.0],
            [Date.UTC(1923, 5, 15), 0.0],
            [Date.UTC(1925, 5, 15), 0.0],
            [Date.UTC(1927, 5, 15), 0.0],
            [Date.UTC(1929, 5, 15), 0.0],
            [Date.UTC(1931, 5, 15), 0.0],
            [Date.UTC(1933, 5, 15), 0.0],
            [Date.UTC(1935, 5, 15), 0.0],
            [Date.UTC(1937, 5, 15), 0.0],
            [Date.UTC(1939, 5, 15), 0.0],
            [Date.UTC(1941, 5, 15), 0.0],
            [Date.UTC(1943, 5, 15), 0.0],
            [Date.UTC(1945, 5, 15), 0.0],
            [Date.UTC(1947, 5, 15), 0.0],
            [Date.UTC(1949, 5, 15), 0.0],
            [Date.UTC(1951, 5, 15), 0.0],
            [Date.UTC(1953, 5, 15), 0.0],
            [Date.UTC(1955, 5, 15), 0.0],
            [Date.UTC(1957, 5, 15), 0.0],
            [Date.UTC(1959, 5, 15), 0.0],
            [Date.UTC(1961, 5, 15), 0.0],
            [Date.UTC(1963, 5, 15), 0.0],
            [Date.UTC(1965, 5, 15), 0.0],
            [Date.UTC(1967, 5, 15), 0.0],
            [Date.UTC(1969, 5, 15), 0.0],
            [Date.UTC(1971, 5, 15), 0.0],
            [Date.UTC(1973, 5, 15), 2.0],
            [Date.UTC(1975, 5, 15), 2.9],
            [Date.UTC(1977, 5, 15), 2.9],
            [Date.UTC(1979, 5, 15), 2.0],
            [Date.UTC(1981, 5, 15), 1.7],
            [Date.UTC(1983, 5, 15), 1.7],
            [Date.UTC(1985, 5, 15), 1.7],
            [Date.UTC(1987, 5, 15), 3.3],
            [Date.UTC(1989, 5, 15), 4.2],
            [Date.UTC(1991, 5, 15), 4.4],
            [Date.UTC(1993, 5, 15), 13.3],
            [Date.UTC(1995, 5, 15), 12.5],
            [Date.UTC(1997, 5, 15), 11.8],
            [Date.UTC(1999, 5, 15), 11.8],
            [Date.UTC(2001, 5, 15), 9.8],
            [Date.UTC(2003, 5, 15), 11.0],
            [Date.UTC(2005, 5, 15), 11.0],
            [Date.UTC(2007, 5, 15), 10.4],
            [Date.UTC(2009, 5, 15), 9.8],
            [Date.UTC(2011, 5, 15), 9.9],
            [Date.UTC(2013, 5, 15), 10.5],
            [Date.UTC(2015, 5, 15), 10.5]
        ]
    }, {
        name: 'Non-"Black-Belt" states',
        color: '#545F8B',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 1
        },
        data: [
            [Date.UTC(1869, 5, 15), 0.0],
            [Date.UTC(1871, 5, 15), 0.0],
            [Date.UTC(1873, 5, 15), 0.0],
            [Date.UTC(1875, 5, 15), 0.0],
            [Date.UTC(1877, 5, 15), 0.0],
            [Date.UTC(1879, 5, 15), 0.0],
            [Date.UTC(1881, 5, 15), 0.0],
            [Date.UTC(1883, 5, 15), 0.0],
            [Date.UTC(1885, 5, 15), 0.0],
            [Date.UTC(1887, 5, 15), 0.0],
            [Date.UTC(1889, 5, 15), 0.0],
            [Date.UTC(1891, 5, 15), 0.0],
            [Date.UTC(1893, 5, 15), 0.0],
            [Date.UTC(1895, 5, 15), 0.0],
            [Date.UTC(1897, 5, 15), 0.0],
            [Date.UTC(1899, 5, 15), 0.0],
            [Date.UTC(1901, 5, 15), 0.0],
            [Date.UTC(1903, 5, 15), 0.0],
            [Date.UTC(1905, 5, 15), 0.0],
            [Date.UTC(1907, 5, 15), 0.0],
            [Date.UTC(1909, 5, 15), 0.0],
            [Date.UTC(1911, 5, 15), 0.0],
            [Date.UTC(1913, 5, 15), 0.0],
            [Date.UTC(1915, 5, 15), 0.0],
            [Date.UTC(1917, 5, 15), 0.0],
            [Date.UTC(1919, 5, 15), 0.0],
            [Date.UTC(1921, 5, 15), 0.0],
            [Date.UTC(1923, 5, 15), 0.0],
            [Date.UTC(1925, 5, 15), 0.0],
            [Date.UTC(1927, 5, 15), 0.0],
            [Date.UTC(1929, 5, 15), 4.2],
            [Date.UTC(1931, 5, 15), 2.9],
            [Date.UTC(1933, 5, 15), 2.9],
            [Date.UTC(1935, 5, 15), 2.9],
            [Date.UTC(1937, 5, 15), 2.9],
            [Date.UTC(1939, 5, 15), 2.9],
            [Date.UTC(1941, 5, 15), 2.5],
            [Date.UTC(1943, 5, 15), 2.5],
            [Date.UTC(1945, 5, 15), 5.0],
            [Date.UTC(1947, 5, 15), 5.0],
            [Date.UTC(1949, 5, 15), 5.0],
            [Date.UTC(1951, 5, 15), 3.3],
            [Date.UTC(1953, 5, 15), 3.3],
            [Date.UTC(1955, 5, 15), 5.0],
            [Date.UTC(1957, 5, 15), 6.7],
            [Date.UTC(1959, 5, 15), 6.7],
            [Date.UTC(1961, 5, 15), 4.4],
            [Date.UTC(1963, 5, 15), 5.6],
            [Date.UTC(1965, 5, 15), 6.7],
            [Date.UTC(1967, 5, 15), 7.8],
            [Date.UTC(1969, 5, 15), 12.2],
            [Date.UTC(1971, 5, 15), 11.3],
            [Date.UTC(1973, 5, 15), 12.1],
            [Date.UTC(1975, 5, 15), 12.1],
            [Date.UTC(1977, 5, 15), 12.1],
            [Date.UTC(1979, 5, 15), 12.9],
            [Date.UTC(1981, 5, 15), 11.7],
            [Date.UTC(1983, 5, 15), 13.8],
            [Date.UTC(1985, 5, 15), 13.1],
            [Date.UTC(1987, 5, 15), 13.1],
            [Date.UTC(1989, 5, 15), 13.8],
            [Date.UTC(1991, 5, 15), 13.4],
            [Date.UTC(1993, 5, 15), 14.0],
            [Date.UTC(1995, 5, 15), 16.5],
            [Date.UTC(1997, 5, 15), 15.9],
            [Date.UTC(1999, 5, 15), 14.0],
            [Date.UTC(2001, 5, 15), 12.6],
            [Date.UTC(2003, 5, 15), 12.0],
            [Date.UTC(2005, 5, 15), 13.7],
            [Date.UTC(2007, 5, 15), 16.4],
            [Date.UTC(2009, 5, 15), 14.2],
            [Date.UTC(2011, 5, 15), 13.1],
            [Date.UTC(2013, 5, 15), 10.5],
            [Date.UTC(2015, 5, 15), 10.5]
        ]
    }]
});