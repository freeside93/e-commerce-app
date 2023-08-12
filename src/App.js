import { useEffect, useState } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Footer from './components/Footer'
import { data } from "./data.js/data";

function App() {
  const [itemCount, setItemCount] = useState(8);
  const [currentBrand, setCurrentBrand] = useState('all')
  const [isMoreData, setIsMoreData] = useState(true)
  const [filters, setFilters] = useState({priceLow:0, priceHigh:1000000})
  const [watchAddedSoon, setWatchAddedSoon] = useState(false)
  const [sorting, setSorting] = useState('a-z')
  
  {/* Category pick function */ }
  const categoryPicker = () => {
    if (currentBrand === 'all') {
      return data
    } else {
      const categoryData = data.filter((watch) => {
        return watch['brand'] === currentBrand
      })
      return categoryData

    }
  }
  {/*SORT WATCHES FUNCTION */}
  const sort = (data) =>{
    let sortedData;
    if(sorting === 'a-z'){
       sortedData = data.sort((a,b) =>(a.brand.toLowerCase() < b.brand.toLowerCase()) ? -1 : ((b.brand.toLowerCase() > a.brand.toLowerCase()) ? 1 : 0))
    }else if(sorting === 'z-a'){
      sortedData = data.sort((a,b) =>(a.brand.toLowerCase() > b.brand.toLowerCase()) ? -1 : ((b.brand.toLowerCase() < a.brand.toLowerCase()) ? 1 : 0)) 
    }else if(sorting === 'priceLow'){
      sortedData = data.sort((a,b) =>{       
       return (a.price < b.price) ? -1 : ((b.price < a.price) ? 1 : 0)
      })
    }else if(sorting === 'priceHigh'){
      sortedData = data.sort((a,b) =>{       
      return  (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0)
      })
    }
    return sortedData
  }
  const watchData = categoryPicker()
  {/* Filter function */ }
  
  const filter = () => {
    let filteredData = sort(watchData)
   
    let iterationCounter = 0;
    for (let filter in filters) {
      if (filter !== "priceLow" && filter !== "priceHigh") {
        filteredData = filteredData.filter((watch) => {
          return watch[filter] === filters[filter]
        })
      } else if (filter === "priceLow") {
        filteredData = filteredData.filter((watch) => {
          return (watch['price'] >= filters[filter] )
        })
      } else if (filter === 'priceHigh') {
        filteredData = filteredData.filter((watch) => {         
          return ( watch['price'] <= filters[filter] )
        })
      }
    }
    return filteredData
  }
  
  
  const filteredData = filter()
  const shownData = filteredData.slice(0, itemCount)
  {/* item count increase function */ }
  const increaseCount = () => {
    let length = 0;
    for (let x in filteredData) {
      length += 1;
    }
    if (length > itemCount + 8) {
      setItemCount(itemCount + 8)
    } else {
      let y = length - itemCount
      setItemCount(itemCount + y)
      setIsMoreData(false)
    }
  }
     {/* Watch added to cart POP UP FUNCTION */ }
     const watchPopUpFunc = () =>{
      setWatchAddedSoon(true)
      setTimeout(()=>{
        setWatchAddedSoon((prevValues)=>{
          return !prevValues
        });
      }, 1000)}

  useEffect(() => {
    if (filteredData.length <= itemCount) {
      setIsMoreData(false)
    } else {
      setIsMoreData(true)
    }
  }, [filters, filteredData.length , itemCount])




  return (
    <div className="App">
      <Header watchAddedSoon={watchAddedSoon} categoryPicker={categoryPicker} setCurrentBrand={setCurrentBrand} currentBrand={currentBrand} />
      <Hero />
      <Main watchPopUpFunc={watchPopUpFunc} filters={filters} setFilters={setFilters} currentBrand={currentBrand} 
      filteredData={filteredData} shownData={shownData} itemCount={itemCount} increaseCount={increaseCount} isMoreData={isMoreData}
      setSorting={setSorting} sorting={sorting}
       />
       <Footer />
    </div>
  );
}

export default App;
