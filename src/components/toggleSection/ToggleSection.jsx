import React, { use } from 'react';
import Models from '../Models/Models';
const ToggleSection = ({ aiDataPromise }) => {
    let [state, setState] = React.useState(true);
    const data = use(aiDataPromise);
    const clickModelHandler = () => {
        state = true;
        setState(state);
        console.log("models clicked", state);
    }
    const clickCartHandler = () => {
        state = false;
        setState(state);
        console.log("cart clicked", state);
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex gap-3 justify-center mt-5'>
                <div onClick={clickModelHandler} className={`badge px-15 py-5 rounded-2xl  ${state ? 'bg-gradient-to-r from-pink-400 to-red-400 text-white' : 'bg-white text-black'}`}>Models</div>
                <div onClick={clickCartHandler} className={`badge px-15 py-5 rounded-2xl  ${state ? 'bg-white text-black' : 'bg-gradient-to-r from-pink-400 to-red-400 text-white'}`}>Cart({data.length})</div>
            </div>
            {state ? <Models /> : <div>Cart</div>}
        </div>
    );
};

export default ToggleSection;