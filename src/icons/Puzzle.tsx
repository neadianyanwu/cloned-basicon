import React from 'react'
import { IconConfig } from '../types'
const Puzzle: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        <svg
            width={`${size || 24}`}
            height={`${size || 24}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 22H18V16.8293C18.3128 16.9398 18.6494 17 19 17C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11C18.6494 11 18.3128 11.0602 18 11.1707V6H11.8293C11.9398 5.68722 12 5.35064 12 5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5C6 5.35064 6.06015 5.68722 6.17071 6H4C2.89543 6 2 6.89543 2 8V20C2 21.1046 2.89543 22 4 22Z"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Puzzle