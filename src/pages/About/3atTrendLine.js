import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const ThreeATTrendLine = () => {
    const initChart = () => {
        let element = document.getElementById('chart2');
        let myChart = echarts.init(element);
        myChart.clear()
        let option;
        option = {
            backgroundColor: '#fff',
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisTick: {
                    show: false, // 隐藏刻度线
                },
                axisLabel: {
                    // show: false, // 隐藏刻度标签
                },
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                axisLine: {
                    lineStyle: {
                        color: '#EC652B' // 横坐标刻度线的颜色
                    }
                },
            },
            yAxis: {
                type: 'value',
                interval: 10,
                axisLine: {
                    lineStyle: {
                        color: '#EC652B'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#fff' // 纵坐标横线颜色
                    }
                }
            },
            series: [
                {
                    data: [2, 32, 43, 23, 21, 42, 50, 50, 13, 42],
                    type: 'line',
                    smooth: false,
                    symbolSize: 0,   // 圆点大小
                    lineStyle: {
                        width: 1, // 线条宽度
                        color: '#EC652B'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1, color: 'rgba(255,210,8,0)' // 0% 处的颜色
                        }, {
                            offset: 0, color: 'rgba(236,101,43,1)' // 100% 处的颜色
                        }])
                    },
                },
            ],
            grid: {
                top: 25,
                left: 25,
                right: 10,
                bottom: 25,
            },
        };
        option && myChart.setOption(option);

    }
    useEffect(() => {
        initChart()
    }, [])
    return (
        <div>
            <div className='px-1-3 py-0-8'>
                <div className='text-word-gray font-bold flex justify-start items-baseline'>
                    <div className='text-2-1'>USD3</div>
                    <div className='text-1-0 ml-0-4'>total amount</div>
                </div>
                <div id='chart2' className='' style={{ width: '100%', height: '150%', margin: '0', padding: '0' }}></div>
            </div>
        </div>
    )
}

export default ThreeATTrendLine
