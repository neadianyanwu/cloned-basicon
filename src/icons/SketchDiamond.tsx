import React from 'react'
import { IconConfig } from '../types'
const SketchDiamond: React.FC<IconConfig> = ({
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
                d="M6.5 3.5L12 3L17.5 3.5M6.5 3.5L2 8M6.5 3.5L12 21M2 8L12 21M2 8H22M12 21L22 8M12 21L17.5 3.5M22 8L17.5 3.5"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SketchDiamond
