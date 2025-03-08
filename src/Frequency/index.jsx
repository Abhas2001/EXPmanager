import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const index = () => {
  return (
    <section className='p-3  '>
        <span className='text-[#0D0E0F] text-[18px] font-medium opacity-100'>Spend Frequency</span>
        <div className='mr-16' style={{ display: "flex", justifyContent: "flex-start", width: "110%"}}>
        <LineChart
      xAxis={[{ data: [ 0, 1, 2, 3, 4, 5, 6,7,8,9], display: "none" }]} // Matches series length
      yAxis={[{ display: "block" }]} // Hides Y-axis
      series={[
        {
          data: [1, 2, 1, 2, 1, 2, 1,2,1,2], // Creates a wave pattern
          area: true, // No filled area, only a line
          curve: "natural", // Makes the line smooth
          color: "#007bff", // Customize the wave color
        },
      ]}
      width={500}
      height={200}
      sx={{ "& .MuiChartsAxis-root": { display: "none" } }} // Ensures axes are hidden
    />
    </div>
    </section>
  )
}

export default index
