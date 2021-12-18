import Image from 'next/image'
import React from 'react'

interface Props {
    src: string
    circle?: boolean
    size: { x: number; y: number }
    center?: boolean
}

function PDAImage({ src, size, circle, center }: Props) {
    return (
        <>
            <style jsx>
                {`
                    div {
                        ${circle && 'border-radius: 64px;'}
                        overflow: hidden;
                        padding: 0;
                        margin: 0;
                        position: relative;
                        width: ${size.x}px;
                        height: ${size.y}px;
                        ${center && 'margin-left: auto; margin-right: auto;'}
                    }
                `}
            </style>
            <div>
                <Image
                    width={size.x}
                    height={size.y}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={src}
                    alt=""
                />
            </div>
        </>
    )
}

export default PDAImage
