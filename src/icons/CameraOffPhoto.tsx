import React from 'react'
import { IconConfig } from '../types'
const CameraOffPhoto: React.FC<IconConfig> = ({
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
                d="M21 21H4C2.89543 21 2 20.1046 2 19V8.6C2 7.49543 2.89543 6.6 4 6.6L6 6.6M9.5 3H14.5L17 6.6L20 6.6C21.1046 6.6 22 7.49543 22 8.6V16"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.66498 9.75195C8.65655 10.4782 8 11.6624 8 13C8 15.2092 9.79086 17 12 17C13.2632 17 14.3896 16.4145 15.1227 15.5"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 2L22 22"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CameraOffPhoto