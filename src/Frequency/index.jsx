import React,{useState,useEffect} from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { Chart } from 'primereact/chart';

const index = ({storedarr}) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      const data = {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [
        
              {
                  label: 'expense',
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--green-500'),
                  yAxisID: 'y1',
                  tension: 0.1,
                  data: storedarr
              }
          ]
      };
      const options = {
          stacked: false,
          maintainAspectRatio: false,
          aspectRatio: 0.9,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: surfaceBorder
                  }
              }
          }
      };

      setChartData(data);
      setChartOptions(options);
  }, []);


  return (
    <section className='p-5 '>
        <span className='text-[#0D0E0F] text-[18px] font-medium opacity-100 mb-3'>Spend Frequency</span>

        <Chart type="line" data={chartData} options={chartOptions} />

    </section>
  )
}

export default index
