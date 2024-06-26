import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const SupplyTrendLine = () => {
    const initChart = () => {
        let element = document.getElementById('chart1');
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
                        color: '#003D6C' // 横坐标刻度线的颜色
                    }
                },
            },
            yAxis: {
                type: 'value',
                interval: 10,
                axisLine: {
                    lineStyle: {
                        color: '#003D6C'
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
                    data: [12, 23, 32, 23, 24, 13, 5, 42, 13, 50],
                    type: 'line',
                    smooth: false,
                    symbolSize: 0,   // 圆点大小
                    lineStyle: {
                        width: 1, // 线条宽度
                        color: '003D6C'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1, color: 'rgba(47,205,130,0)' // 0% 处的颜色
                        }, {
                            offset: 0, color: 'rgba(0,61,108,1)' // 100% 处的颜色
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
                    <div className='text-2-1'>USDT</div>
                    <div className='text-1-0 ml-0-4'>total amount</div>
                </div>
                <div id='chart1' className='' style={{ width: '100%', height: '150%', margin: '0', padding: '0' }}></div>
            </div>
        </div>
    )
}

export default SupplyTrendLine
