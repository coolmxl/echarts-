(function () {
  let nowTime = "00:00:00"
  let showTime = document.querySelector(".show-time")
  let t = null
  const getNowTime = () => {
    const date = new Date
    // const y = data.getfull
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    // let hours = date.getHours().toString().padStart(2,'0')  或者可以这样
    const mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    const secondes = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    nowTime = `${hours}:${mins}:${secondes}`
    return nowTime
  }
  setInterval(() => {
    let now = getNowTime()
    showTime.innerHTML = `现在的时间是 ${now}`
  })
})();
(() => {
  let myChart = echarts.init(document.querySelector(".bar .chart"))
  console.log(document.querySelector(".bar .chart"));
  let option = {
    color: "#2f89cf",
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },

    xAxis: [
      {
        type: 'category',
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          linestlye: {
            color: "rgba(255,255,255,.1)",
          }
        },
        //y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }

    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 柱状图2
(() => {
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  let myChart = echarts.init(document.querySelector(".bar2 .chart"))
  let option = {
    grid: {
      left: '22%',
      top: "10%",
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        inverse: true,
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // x y轴的线的样式
        axisLine: {
          show: false
        },
        // 刻度样式
        axisTick: {
          show: false
        },
        //刻度标签  轴上的字
        axisLabel: {
          color: 'white'
        }
      }, {
        inverse: true,

        data: [702, 350, 610, 793, 664],
        // x y轴的线的样式
        axisLine: {
          show: false
        },
        // 刻度样式
        axisTick: {
          show: false
        },
        //刻度标签  轴上的字
        axisLabel: {
          color: 'white'
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69],
        itemStyle: {
          barBorderRadius: 20,
          color: function (param) {
            return myColor[param.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        barWidth: 10,
        label: {
          show: true,
          position: 'inside',
          formatter: "{c}%"
        }
      },
      {
        name: '框',
        yAxisIndex: 1,
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        // 柱子之间的距离
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
      },
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//折线图1
(() => {
  let dataAll = [
    {
      year: "2020", data: [
        [123, 175, 112, 197, 121, 67, 98, 21, 54, 74, 38, 45],
        [143, 131, 165, 123, 178, 21, 82, 64, 42, 19, 34, 55]
      ]
    },
    {
      year: "2021", data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    }
  ];
  let data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  };
  let myChart = echarts.init(document.querySelector(".bar3 .chart"))
  let option = {
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisLabel: {
        color: "#4c9bfd"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      itemStyle: {
        color: 'white'
      },
      axisLabel: {
        color: "#4c9bfd"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    legend: {
      data: ['新增粉丝', '新增游客'],
      textStyle: {
        color: 'rgb(255,255,255,0.5)'
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        smooth: true,
        data: data.year[0]
      },
      {
        name: '新增游客',
        smooth: true,
        type: 'line',
        data: data.year[1]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  $(".bar3 h2").on('click', "a", function () {
    console.log($(this).index());
    option.series[0].data = dataAll[$(this).index()].data[0]
    option.series[1].data = dataAll[$(this).index()].data[1]
    myChart.setOption(option)

  })
})();
//折线图2
(() => {
  let myChart = echarts.init(document.querySelector(".line2 .chart"))

  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: 'rgb(255,255,255,0.5)'
      }
    },
    grid: {
      left: '10',
      top: "30",
      right: '10',
      bottom: '10',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: 'rgb(255,255,255,0.5)',
          fontSize: 12
        }
      },
      axisLine: {
        textStyle: {
          color: 'rgb(255,255,255,0.2)',
        }
      },
      boundaryGap: false,
      data: ["01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30"]
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgb(255,255,255,.1)',
        }
      },
      axisLabel: {
        textStyle: {
          color: 'rgb(255,255,255,0.5)',
          fontSize: 12
        }
      },
      axisLine: {
        textStyle: {
          color: 'rgb(255,255,255,.1)',
        }
      },
    },
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#0184d5',
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(211,220,107,.1)",
          borderWidth: 12
        },
        showSymbol: false,
        data: [30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          60,
          20,
          40,
          20,
          40]
      },
      {
        name: '转发量',
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        type: 'line',
        data: [50,
          30,
          50,
          60,
          10,
          50,
          30,
          50,
          60,
          40,
          60,
          40,
          80,
          30,
          50,
          60,
          10,
          50,
          30,
          70,
          20,
          50,
          10,
          40,
          50,
          30,
          70,
          20,
          50,
          10,
          40]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(() => {
  let myChart = echarts.init(document.querySelector(".bar4 .chart"))

  let option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      itemWidth: 10,
      itemHight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 12
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        // radius 第一个值是内圆的半径 第二个之是外院的半径
        top: 'middle',
        radius: ['40%', '60%'],
        center: ["50%", "42%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: '15',
        //     fontWeight: 'bold'
        //   }
        // },
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(() => {
  let myChart = echarts.init(document.querySelector(".pie2 .chart"))

  let option = {

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      bottom: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10
      },
      itemWidth: 12,
      itemHight: 12,
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ["10%", "70%"],
        center: ['50%', '50%'],
        roseType: 'radius',
        // itemStyle: {
        //   borderRadius: 5
        // },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "深圳" },
          { value: 42, name: "广东" }
        ],
        lable: {
          fontSize: 12
        },
        lableLine: {
          length: 6,
          length2: 8
        }
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()
