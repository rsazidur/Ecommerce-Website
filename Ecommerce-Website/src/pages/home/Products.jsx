import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();

                setProducts(data);
                setFilteredItems(data);
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        }

        fetchData();
    }, []);

    // Filtering function
    const filterItems = (platform) => {
      const filtered = platform === "all" ? products : products.filter((item) => item.category === platform);
      setFilteredItems(filtered);
      setSelectedCategory(platform);
    }
    
    // Show all products
    const showAll = () => {
      setFilteredItems(products);
      setSelectedCategory("all");
    }

    // Sorting function
    const handleSortChange = (option) => {
      setSortOption(option);

      // Sort the items based on the selected option
      let sortedItems = [...filteredItems];

      switch (option) {
        case "A-Z":
          sortedItems.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Z-A":
          sortedItems.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "low-to-high":
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        case "high-to-low":
          sortedItems.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      setFilteredItems(sortedItems);
    }

  return (
    <div className="w-full mx-auto xl:px-28 px-4 py-28">
      <h2 className="title">Or Just Play These And Die</h2>

      {/* Product cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          
          {/* All buttons */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("PC")}>PC Games</button>
            <button onClick={() => filterItems("PS4")}>PS4 Games</button>
            <button onClick={() => filterItems("Xbox")}>XBOX Games</button>
          </div>

          {/* Sorting option */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              className="bg-black text-white px-2 py-1 rounded-sm"
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems}/>
        
      </div>
    </div>
  );
};

export default Products;