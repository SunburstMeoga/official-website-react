import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

const SupplyTrendLine = () => {
    const [dates, setDates] = useState([]);
    const [values, setValues] = useState([]);
    let [balance, setBalance] = useState(0)
    const fetchData = async () => {
        try {
            // const response = await axios.get('https://api.blocksafer.com/api/bridges/in-volumn?to_token_id=71204&to_chain_id=703&days=7');
            const response = await axios.get('https://api.blocksafer.com/api/hah/total-supply?token_address=0xcc201Ea56965D7c107C02CE0C2C4CF9A022D1119');
            // const data = response.data.bsc_bridgess;
            console.log(response.data)
            let number = response.data.total_supply.match(/\d+(\.\d+)?/)[0];
            console.log(number); // 793922.37312
            setBalance(balance = number)
            // 假设返回的数据格式类似于 { "2024-08-01": 100, "2024-08-02": 150, ... }
            // 将对象的键和值分别保存到两个数组中
            // const keys = Object.keys(data);
            // const values = Object.values(data);
            // setDates(keys);
            // setValues(values);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const initChart = () => {
        let element = document.getElementById('chart1');
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
                    lineStyle: { color: '#003D6C' }
                },
                data: dates // 使用从API获取的键作为横坐标数据
            },
            yAxis: {
                type: 'value',
                min: minValue > 0 ? minValue / 2 : 0, // 设置最小值，避免显示零
                axisLine: {
                    lineStyle: { color: '#003D6C' }
                },
                splitLine: {
                    lineStyle: { color: '#fff' }
                },
                axisLabel: {
                    formatter: (value) => {
                        if (value === 0) return ''; // 隐藏零值
                        return value;
                    }
                }
            },
            series: [
                {
                    data: values, // 使用从API获取的值作为纵坐标数据
                    type: 'line',
                    smooth: false,
                    symbolSize: 0, // 圆点大小
                    lineStyle: {
                        width: 1, // 线条宽度
                        color: '#003D6C'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 1, color: 'rgba(47,205,130,0)' },
                            { offset: 0, color: 'rgba(0,61,108,1)' }
                        ])
                    }
                }
            ],
            grid: {
                top: 25,
                left: 45,
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
            // initChart(); // 在数据加载完成后初始化图表
        }
    }, [dates, values]);

    return (
        <div>
            <div className='px-1-3 py-0-8'>
                <div className='text-word-gray font-bold flex justify-start items-baseline mb-1-0'>
                    {/* <div className='text-2-1'>USDT</div> */}
                    <div className='text-1-0 ml-0-4'>Total USD3 on HAH</div>
                </div>
                <div className='text-word-gray font-bold flex flex-row justify-start items-baseline px-0-3'>
                    <div className='text-2-0'>{balance}</div>
                    <div className='text-0-8 ml-0-4'>USD3</div>
                </div>
                {/* <div
                    id='chart1'
                    className=''
                    style={{ width: '100%', height: '150%', margin: '0', padding: '0' }}
                ></div> */}
            </div>
        </div>
    );
};

export default SupplyTrendLine;
