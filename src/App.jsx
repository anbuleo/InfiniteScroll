// import { useEffect } from "react"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
function App() {

  let [data,setData] = useState(Array.from({length:20}))
  let [more , setMore] = useState(true)
  const handleAddData = ()=>{
    if(data.length >=1000){
      setMore(false)
    } else{
      setTimeout(() => {
        setData(data.concat(Array.from({length:20})))
      }, 1000);
      

    }
    
  }
 

  return (
    <>
    <div className="container">
            <div className="htag">
              <h1>The Endless Scroll</h1>
            </div>
            <InfiniteScroll dataLength={data} next={handleAddData} loader={<p>Loading....</p>} hasMore={more}>
              {data?.map((e,i)=><div key={i} className="divCon">This is div {i+1} and Infinite Scroll</div>)}
            </InfiniteScroll>
    </div>

     
    </>
  )
}

export default App
