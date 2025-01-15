const RestaurantCardComponent = (props) => {
    const {ResData} = props;
    return (
        <div className="res-card">
            <img className="res-logo" src={ResData.info.image.url} alt="restaurant"/>
            <h3>{ResData.info.name}</h3>
            <h3>{ResData.info.locality.name}</h3>
            <h5>{ResData.info.cuisine.map((item) => item.name).join(", ")}</h5>
            <h6>{ResData.info.rating.aggregate_rating}/5</h6>
        </div>
    );
}

export default RestaurantCardComponent;