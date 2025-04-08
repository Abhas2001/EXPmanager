import React,{useState,useEffect} from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { Chart } from 'primereact/chart';

const index = ({storedarr,storednegarr}) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let d= new Date();
    let m =d.getMonth();
   let Income=[0,0,0,0,0,0,0,0,0,0,0,0,0]
   let Expense=[0,0,0,0,0,0,0,0,0,0,0,0,0]
    let sum=0;
    let negatives = 0;
    for(let i=0;i<storedarr.length;i++){
        if(!isNaN(storedarr[i])){
        sum+= Number(storedarr[i]);
        }
    }
    Income[m]=sum;

    for(let i=0;i<storednegarr.length;i++){
        if(!isNaN(storednegarr[i])){
            negatives+= Number(storednegarr[i]);
        }
    }
    Expense[m]=negatives;
    const[showgraph,setShowgraph]  = useState(false);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('#00A86B');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
                {
                    label: 'Income',
                    backgroundColor: documentStyle.getPropertyValue('--#00A86B'),
                    borderColor: documentStyle.getPropertyValue('--#00A86B'),
                    data: Income
                },
                {
                    label: 'Expense',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: Expense
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

   

    useEffect(()=>{
      setShowgraph(true);
    },[chartData,chartOptions])
  return (
    <section className='mt-2 p-4 '>
        <span className='text-[#0D0E0F] text-[18px] font-medium opacity-100 '>Spend Frequency</span>
{showgraph&&

        <Chart type="bar" data={chartData} options={chartOptions} className="mt-4" />
}

    </section>
  )
}

export default index
