import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

const HAHTrendLine = () => {
    const [dates, setDates] = useState([]);
    const [values, setValues] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.blocksafer.com/api/volumns/hah');
            const data = response.data.daily_transaction_volumes;

            // 将对象的键和值分别保存到两个数组中
            const keys = Object.keys(data);
            const values = Object.values(data);

            setDates(keys);
            setValues(values);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const initChart = () => {
        let element = document.getElementById('chart3');
        let myChart = echarts.init(element);
        myChart.clear();

        // 计算最小正值以避免显示零
        const minValue = Math.min(...values.filter(v => v > 0));

        let option = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#2FCD82' }
                },
                data: dates // 使用从API获取的键作为横坐标数据
            },
            yAxis: {
                type: 'value',
                min: minValue > 0 ? minValue / 2 : 0, // 设置最小值，避免显示零
                axisLine: {
                    lineStyle: { color: '#2FCD82' }
                },
                splitLine: {
                    lineStyle: { color: '#fff' }
                }
            },
            series: [
                {
                    data: values, // 使用从API获取的值作为纵坐标数据
                    type: 'line',
                    smooth: false,
                    symbolSize: 0,
                    lineStyle: {
                        width: 1,
                        color: '#2FCD82'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 1, color: 'rgba(255,210,130,0)' },
                            { offset: 0, color: 'rgba(47,205,130,1)' }
                        ])
                    }
                }
            ],
            grid: {
                top: 25,
                left: 60,
                right: 0,
                bottom: 25
            }
        };

        option && myChart.setOption(option);
    };

    useEffect(() => {
        fetchData(); // 获取数据
    }, []);

    useEffect(() => {
        if (dates.length > 0 && values.length > 0) {
            initChart(); // 在数据加载完成后初始化图表
        }
    }, [dates, values]);

    return (
        <div>
            <div className='px-1-3 py-0-8'>
                <div className='text-word-gray font-bold flex justify-start items-baseline'>
                    <div className='text-2-1'>HAH</div>
                    {/* <div className='text-1-0 ml-0-4'>total amount</div> */}
                </div>
                <div
                    id='chart3'
                    className=''
                    style={{ width: '100%', height: '150%', margin: '0', padding: '0' }}
                ></div>
            </div>
        </div>
    );
};

export default HAHTrendLine;
