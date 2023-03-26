import { useState } from "react"
import {v4 as uuidv4} from 'uuid';

let MyTest = () => {
    let [val, setVal] = useState('');
    return <div>
        <input onChange={(e) => {
            setVal(e.currentTarget.value)
        }} />
       <div>this is value:<span role='lj'>{val}</span></div>
       <div>id:{uuidv4()}</div>
    </div>
}

export default MyTest;