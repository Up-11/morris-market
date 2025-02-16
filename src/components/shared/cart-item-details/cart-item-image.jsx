import Image from 'next/image'
import React from 'react'

function CartItemImage({ imageUrl }) {
	return (
		<div className='flex flex-col min-w-[35%] justify-center align-middle items-center'>
			<Image
				className='rounded-2xl  '
				width={80}
				height={45}
				src={imageUrl}
				alt='Logo'
			/>
		</div>
	)
}

export default CartItemImage
