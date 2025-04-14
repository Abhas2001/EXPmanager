     
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const index = ({nsumarr, sumarr,expensehilight}) => {
    
 

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const[showbar,setshowbar] = useState(false);
    const[Numarr,setNumarr] = useState( nsumarr.map(Number))

    useEffect(()=>{
        if(!expensehilight){
              let arr = nsumarr.map(Number)
              setNumarr(arr);
        }
        else{
                 let arr1 = sumarr.map(Number);
                 setNumarr(arr1);
        }

    },[expensehilight])

    console.log(Numarr);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: !expensehilight?['Food','Shopping','Subscription','Transportation']: [ 'salary', 'others'],
            datasets: [
                {
                    data: Numarr || [],
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
    }, [Numarr,expensehilight]);


    
  return (
    <div>
      



        <div className="card flex justify-content-center">
         
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-10rem" />

        </div>
    

        
    </div>
  )
}

export default index
