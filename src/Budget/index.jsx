
import React from 'react'
import Footer from '../Footer/index'

const index = ({setloader,sethome,transaction,home,settransaction,setprofilecolored,profilecolored,loader, budgetcolored,setBudgetcolored}) => {
  return (
    <div>
      udfgufd

      <section className='w-full fixed bottom-0'>
        <Footer  budgetcolored={budgetcolored} setBudgetcolored={setBudgetcolored}  loader={loader} profilecolored={profilecolored} setprofilecolored={setprofilecolored} setloader={setloader} sethome={sethome} home={home} transaction={transaction} settransaction={settransaction}/>
      </section>
    </div>
  )
}

export default index
