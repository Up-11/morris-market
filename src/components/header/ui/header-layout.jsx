'use client'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import logo from '../img/Morris Market.svg'
import { Menu } from 'lucide-react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import useScrollToTopOnResize from '@/components/shared/hooks/use-scroll-to-top-on-resize'

function HeaderLayout({ searchBar, themeButton, signUpButton, cartButton }) {
	useScrollToTopOnResize(768)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<header
			className={clsx(
				!isMenuOpen && 'rounded-bl-xl rounded-br-xl',
				'bg-background flex justify-between items-center gap-1 fixed top-0 left-0 right-0 md:relative px-4'
			)}
		>
			<Link href='/'>
				<Image
					priority={true}
					src={logo}
					className='m-6'
					width={196}
					height={70}
					alt='logo'
				/>
			</Link>
			<div className='mx-10 flex-1'> {searchBar}</div>
			<div className='flex md:hidden'>
				<button
					className='text-gray-700 p-2 focus:outline-none'
					onClick={toggleMenu}
				>
					<Menu size={29} />
				</button>
			</div>

			<div className='hidden md:flex justify-center items-center gap-2'>
				{themeButton}
				{signUpButton}
				{cartButton}
			</div>

			{isMenuOpen && (
				<motion.div
					className='absolute top-16 left-0 right-0 bg-background shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4 md:hidden'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={menuVariants}
				>
					<div className='flex flex-col items-center gap-2'>
						{signUpButton}
						{cartButton}
						{themeButton}
					</div>
				</motion.div>
			)}
		</header>
	)
}

export default HeaderLayout
