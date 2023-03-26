import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { empty, goodsSelector, GoodsState, remove, updateCount } from "../../app/goodsSlice";

const Cart = () => {
    let [total, setTotal] = useState(0);

    const dispatch = useDispatch();
    const goods: GoodsState[] = useSelector(goodsSelector);

    useEffect(() => {
        total = 0;
        if (goods.length === 0) { setTotal(0); return; }
        goods.forEach((item: { count: number, price: number; }) => {
            total += item.count * item.price;
            setTotal(total);
        });
    }, [goods]);

    const changeCountByInput = (ele: any, itemId: number) => {
        if (ele.target.value === '0') {
            dispatch(remove(itemId));
            return;
        }
        const index = goods.findIndex(item => item.id === itemId);
        dispatch(updateCount({ index: index, count: ele.target.value }));
    };
    const changeCountByClick = (ele: any, currentItem: GoodsState) => {
        const index = goods.findIndex(item => item.id === currentItem.id);
        const count = ele.target.value === "+" ? currentItem.count + 1 : currentItem.count - 1;
        if (count === 0) {
            dispatch(remove(currentItem.id));
            return;
        }
        dispatch(updateCount({ index: index, count: count }));
    };

    return <div style={{ padding: "20px", marginTop: "50px" }}>
        <div style={{ display: "flex", flexDirection: 'row-reverse' }}><button onClick={() => dispatch(empty())}>Empty</button><NavLink to="/Goods" style={{ padding: "20px" }}>Back to Product</NavLink></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row", padding: "10px", justifyContent: "space-around", borderBottom:"1px solid black" }}>
                <div style={{ fontWeight: "bold", fontSize: "20px", width: "100px", textAlign:'center'}}>Image</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", width: "100px", textAlign:'center'}}>Title</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", width: "100px", textAlign:'center'}}>Price</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", width: "100px", textAlign:'center'}}>Count</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", width: "100px", textAlign:'center'}}>Subtotal</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", width: "100px", textAlign:'center'}}>Operation</div>
            </div>
            {
                goods.length===0?
                <div style={{fontSize:20, color:'red', paddingBottom:"10px", textAlign:'center', paddingTop:"10px"}}>No Data!</div>:
                goods.map((item: GoodsState) => {
                    return (
                        <div key={item.id} style={{ borderBottom: '1px solid black', padding: "10px", display: "flex", justifyContent: 'space-around', alignItems:'center' }}>
                            <img src={require(`../../assets/imgs/${item.src}`)} alt={item.description} style={{width:"100px"}} />
                            <div style={{ width:"100px", textAlign:'center' }}>{item.title}</div>
                            <div style={{ width:"100px", textAlign:'center' }}>{item.price}</div>
                            <div style={{ width:"100px", textAlign:'center' }}>
                                <button value={'-'} onClick={(ele) => changeCountByClick(ele, item)}>-</button>
                                <input type="number" style={{ width: "35px", textAlign: 'center' }} onChange={(ele) => changeCountByInput(ele, item.id)} value={item.count} min="1" />
                                <button value={'+'} onClick={(ele) => changeCountByClick(ele, item)}>+</button>
                            </div>
                            <div style={{ width:"100px", textAlign:'center' }}>{item.count * item.price}</div>
                            <div style={{ width:"100px", textAlign:'center' }}>
                            <button onClick={() => { dispatch(remove(item.id)) }}>Remove</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        <div style={{ display: "flex", flexDirection: 'row-reverse',paddingTop:"50px"}}><b>Total:{total}</b></div>
    </div>
};

export default Cart;
