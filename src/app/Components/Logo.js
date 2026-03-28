export default function Logo({ size = 32, className, color = '#000' }) {
    return (

        <div className={' ' + className}>
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 426 425"
                className={`max-w-${size} max-h-${size} aspect-square nuxt-icon--fill gsap:logo block duration-500 `}
                style={{ opacity: 1, visibility: "inherit", maxHeight: `calc(var(--spacing) * ${size})`, maxWidth: `calc(var(--spacing) * ${size})` }}>
                <g className='will-change-transform' fill={color}>
                    <path d="M163.661.102H87.848v424.796h75.813V.102Z"></path>
                    <path d="M75.814.102H0v211.796h75.814V.102Z"></path>
                    <path d="M75.814 319H0v105.898h75.814V319Z"></path>
                </g>
                <g className='will-change-transform'>
                    <path fill={color}
                        d="M212.398 211.898c22.264 0 40.313-18.049 40.313-40.313 0-22.265-18.049-40.314-40.313-40.314-22.265 0-40.314 18.049-40.314 40.314 0 22.264 18.049 40.313 40.314 40.313Z">
                    </path>
                    <path fill={color}
                        d="M212.398 424.898c22.264 0 40.313-18.049 40.313-40.313 0-22.265-18.049-40.314-40.313-40.314-22.265 0-40.314 18.049-40.314 40.314 0 22.264 18.049 40.313 40.314 40.313Z">
                    </path>
                </g>
                <g className='will-change-transform' fill={color}>
                    <path d="M338.153.102H262.34v211.796h75.813V.102Z"></path>
                    <path d="M425.999 211.898h-75.813v213h75.813v-213Z"></path>
                    <path d="M425.999.102h-75.813V106h75.813V.102Z"></path>
                    <path d="M338.153 319H262.34v105.898h75.813V319Z"></path>
                </g>
            </svg>
        </div>
    )
}
