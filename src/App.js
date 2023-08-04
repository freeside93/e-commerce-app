import { useEffect, useState } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import { data } from "./data.js/data";

function App() {
  const [itemCount, setItemCount] = useState(8);
  const [currentBrand, setCurrentBrand] = useState('all')
  const [isMoreData, setIsMoreData] = useState(true)
  const [filters, setFilters] = useState({})
  const [watchAddedSoon, setWatchAddedSoon] = useState(false)

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
  const watchData = categoryPicker()
  {/* Filter function */ }
  const filter = () => {
    let filteredData = watchData
    let iterationCounter = 0;
    for (let filter in filters) {
      if (filter !== "priceLow" && filter !== "priceHigh") {
        filteredData = filteredData.filter((watch) => {
          return watch[filter] === filters[filter]
        })
      } else if (filter === "priceLow") {
        filteredData = filteredData.filter((watch) => {
          return watch['price'] >= filters[filter]
        })
      } else if (filter === 'priceHigh') {
        filteredData = filteredData.filter((watch) => {
          console.log(watch['price'])
          return watch['price'] <= filters[filter]
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
  }, [])




  return (
    <div className="App">
      <Header watchAddedSoon={watchAddedSoon} categoryPicker={categoryPicker} setCurrentBrand={setCurrentBrand} currentBrand={currentBrand} />
      <Hero />
      <Main watchPopUpFunc={watchPopUpFunc} filters={filters} setFilters={setFilters} currentBrand={currentBrand} filteredData={filteredData} shownData={shownData} itemCount={itemCount} increaseCount={increaseCount} isMoreData={isMoreData} />
    </div>
  );
}

export default App;
