import React from 'react'
import { IconConfig } from '../types'
const ThumbsDown: React.FC<IconConfig> = ({
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
                d="M16.9159 13.3371L13.6607 20.7609C13.21 21.7888 12.0001 22.3199 11.0189 21.7944C9.4919 20.9766 9.79819 20.2101 9.79819 15.3984H4.03407C2.78769 15.3984 1.83456 14.2723 2.02408 13.0237L3.43199 3.74785C3.58461 2.74229 4.43823 2 5.44198 2H16.9159M16.9159 13.3371V2M16.9159 13.3371H19.9664C21.0895 13.3371 22 12.4143 22 11.2758V4.06132C22 2.9229 21.0895 2.00003 19.9664 2.00003L16.9159 2"
                stroke={color}
                strokeWidth={`${weight || 1.5}`}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ThumbsDown