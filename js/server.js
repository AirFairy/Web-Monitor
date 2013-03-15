if(!window.WebSocket){alert('error');}

        try {
            var Connection = new WebSocket("ws://localhost:8000/data");
        }
        catch (e){
            var Connection = new MozWebSocket("ws://localhost:8000/data");
        }

        var Data = {};
        Connection.onmessage = function(e){
             Data=JSON.parse(e.data);
         };
        

$(function () {
        Highcharts.setOptions(theme1);
        
        
        var chart1 = new Highcharts.Chart({
            chart: {
                renderTo: "Cpu1",
                type: 'area',
                marginRight: 10,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(); // current time
                            series.addPoint([x, Data['cpu'][0]], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'CPU1使用率'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Usage Percent'
                },
                labels:{formatter:function(){return this.value+'%'}},
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Data of the First CPU',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 10
                        });
                    }
                    return data;
                })()
            }]
        });
        var chart2 = new Highcharts.Chart({
            chart: {
                renderTo: "Cpu2",
                type: 'area',
                marginRight: 10,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(); // current time
                            series.addPoint([x, Data['cpu'][1]], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'CPU2使用率'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Usage Percent'
                },
                labels:{formatter:function(){return this.value+'%'}},
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Data of the Second CPU',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 10
                        });
                    }
                    return data;
                })()
            }]
        });

        var chart3 = new Highcharts.Chart({
            chart: {
                renderTo: "Memory",
                type: 'area',
                marginRight: 10,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(); // current time
                            series.addPoint([x, Data['memory']], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: '内存使用率'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Usage Percent'
                },
                labels:{formatter:function(){return this.value+'%'}},
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: '',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 10
                        });
                    }
                    return data;
                })()
            }]
        });

        var chart4 = new Highcharts.Chart({
            chart: {
                renderTo: 'Disk',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: true
            },
            title: {
                text: '磁盘使用量'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage}%</b>',
                percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        connectorColor: '#FFFFFF',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '磁盘使用情况',
                data: [
                    ['未使用',61.7],
                    {
                        name: '已使用',
                        y: 38.3,
                        sliced: true,
                        selected: true
                    }
                ]
            }]
        });

    });