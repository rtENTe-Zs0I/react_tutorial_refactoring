import React from 'react';
import {ISquare} from '../interface';

interface SquareProps {
    value: ISquare;
    onClick: () => void;
}

// ==== React.FC format component without props ====
const Square: React.FC<SquareProps> = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

// ==== React.FC format component with using props ====
// const Square: React.FC<SquareProps> = (props) => {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

// ==== Function Component ====
// function Square(props: SquareProps) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

export default Square;