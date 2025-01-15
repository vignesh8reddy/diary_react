import RestaurantCardComponent from "./RestaurantCardComponent";
import ResData from "../utils/mockData";
import { useState, useEffect } from "react";

const BodyComponent = () => {
    const [data, setData] = useState(ResData);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=> {
        fetchData();
    }, []
);

const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING", {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',  // Allow cross-origin requests from any origin
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data);
}

    return (
        <div className="body">
            
            <button className="filter-button" onClick={
                () => {
                        setFilteredData(data.filter((ob)=>(
                        ob.info.rating.aggregate_rating>4.3
                    )));
                }
            }>Filter Top Rated Restaurants</button>
            <div className="res-card-container">
                {
                    filteredData.map((item) => (
                        <RestaurantCardComponent key={item.info.resId} ResData={item}/>
                    ))
                }
            </div>
        </div>
    );
}

export default BodyComponent;