
import React, {useState} from 'react';

export const CalcTool = ({ result, history, onAdd, onSubtract, onMultiply, onDivide, onClear }) => { //two data props and 5 fun props

    const [ numInput, setNumInput] = useState(0);

    return <form>
        <div>
            <label> Result: {result} </label>
        </div>
        <div>
            Num: <input type="number"  value={numInput}
                        onChange={e => setNumInput(parseInt(e.target.value))} />
        </div>
        <div>
            <button type="button" onClick={() => onAdd(numInput)}>+</button>
            <button type="button" onClick={() => onSubtract(numInput)}>-</button>
            <button type="button" onClick={() => onMultiply(numInput)}>*</button>
            <button type="button" onClick={() => onDivide(numInput)}>/</button>
        </div>
        <tbody>
        <table>
            <tr>
                <td>
                    <label data-reactid="1">{history}</label>
                </td>
            </tr>
        </table>
        </tbody>
        <div>
            <button type="button" onClick={()=> onClear()}>Clear</button>
        </div>

    </form>;

};