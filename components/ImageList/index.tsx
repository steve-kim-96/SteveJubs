import React from 'react'
import Image from 'next/image'

interface Props {
  absolute?: boolean,
  width: number,
  height: number,
  src: string,
  alt: string
}

const ImageList = ({ absolute, width, height, src, alt }: Props) => (
  <Image
  layout={absolute ? 'responsive' : 'intrinsic'}
  width={width}
  height={height} 
  src={src}
  alt={alt}
  />
)

export default ImageList
