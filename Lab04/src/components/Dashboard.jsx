import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Item from "./Item";

const Dashboard = () => {

    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const res = await axios.get ("https://67c83ce10acf98d070858b34.mockapi.io/api/data/item");
                setFoodItems(res.data);
                setLoading(false);
            } catch (e) {
                console.error(e);
                setLoading(false);
            }
        }
        fetchFoodItems();
    },  [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {foodItems.map((item) => {
                   return (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <Item item={item}/>
                        </div>
                   )
                })}
            </div>
        </div>
    );
}

export default Dashboard;