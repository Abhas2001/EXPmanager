     
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const index = ({storednegarr}) => {
    
 

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    let Numarr = storednegarr.map(Number);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [...Numarr],
                    backgroundColor: ['#42A5F5', '#FFCA28', '#66BB6A'], // hardcoded test colors
                    hoverBackgroundColor: ['#64B5F6', '#FFD54F', '#81C784']
                }
            ]
        }
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.0,
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <div>
      



        <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-10rem" />
        </div>
    

        
    </div>
  )
}

export default index
