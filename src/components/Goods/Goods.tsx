import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoodsState } from "../../app/goodsSlice";
import Product from "../Product/Product";

const Goods = () => {
    const [goods, setGoods] = useState<GoodsState[]>([]);
    let myGoods: GoodsState[] = JSON.parse(JSON.stringify(goods));
    useEffect(() => {
        axios.get('http://localhost:3000/posts').then(item => {
            setGoods(item.data);
        });
    }, []);

    const resetGoods = (index: number, value: any) => {
        myGoods[index].count = (value / 1);
        setGoods(myGoods);
    }

    return (<div style={{ marginTop: '50px', padding: "10px" }}>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around' }}>
            {
                goods.map((item: GoodsState, index: number) => {
                    return (
                        <Product key={item.id} prod={item} resetGoods={resetGoods} index={index} />                     
                    )
                })
            }
        </div>
        <div style={{ display: "flex", width: "100%", flexDirection: 'row', justifyContent: "flex-end" }}>
            <NavLink to="/Cart" style={{ padding: "30px" }}>Go to Cart</NavLink>
        </div>
    </div>
    );
};

export default Goods;