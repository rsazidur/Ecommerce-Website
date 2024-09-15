import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        }

        fetchData();
    }, []);

    console.log(products);
  return (
    <div className="w-full mx-auto xl:px-28 px-4 py-28">
      <h2 className="title">Or Just Play These And Die</h2>

      {/* product cards */}

      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          
          {/* all btn */}

          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button>All Product</button>
            <button>PC Games</button>
            <button>PS4 Games</button>
            <button>XBOX Games</button>
          </div>

          {/* sorting option */}

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={products}/>
        
      </div>
    </div>
  );
};

export default Products;