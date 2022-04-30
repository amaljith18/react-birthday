import React from 'react'
import { useState } from 'react'

function Birthdaylist() {

  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);

  function submit(e: any) {
    e.preventDefault();
   

  }
  const filterddata = data.filter((item: string) => item =="birthday}")
  console.log(filterddata)


  function update(filterddata: string | number | Date) {
    var today = new Date();
    var birthDate = new Date(filterddata);
    var birthday = today.getFullYear() - birthDate.getFullYear();
    
    }
    
    
}
  console.log(data)
  return (
    <div>
      <form onSubmit={submit} >
        <div className='container'>
          <textarea name="user" value={data} onChange={(e) => setData(e.target.value)}></textarea>
        </div>

        <div>
          selected={startDate}
          onChange={(date: React.SetStateAction<Date>) => setStartDate(date)}
          showYearPicker
          dateFormat="yyyy"
          yearItemNumber={50}
        </div> 

        <button onClick={update}  >update </button>


      </form>
    </div>
  )
}

export default Birthdaylist

