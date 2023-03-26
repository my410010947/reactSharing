import { useDispatch } from "react-redux";
import { addAsync } from "../../app/goodsSlice";

const Product = ({prod,index,resetGoods}: any) => {
    const dispatch = useDispatch();
    return <div style={{ border: '1px solid black', width: "250px", padding: "10px" }}>
        <div style={{ textAlign: 'center' }}><img style={{ width: "100%", height: "100%" }} src={require(`../../assets/imgs/${prod.src}`)} alt={prod.description} /></div>
        <div style={{ textAlign: 'center' }}><b>{prod.title}</b></div>
        <div style={{ textAlign: 'center' }}>￥{prod.price}</div>
        <div style={{ textAlign: 'center' }}>
            <input style={{ width: "20px", textAlign: 'center' }} type="text" defaultValue={prod.count} onChange={(e)=>resetGoods(index, e.target.value)}/>
        </div>
        <div style={{ textAlign: 'center', marginTop: "20px" }}><button onClick={() => {
            dispatch((addAsync(prod) as any));
        }}>Add to Cart</button></div>
    </div>
}

export default Product;