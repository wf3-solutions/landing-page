"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"

export default function Header() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const heroHeight = document.getElementById("hero")?.offsetHeight || 0
			setScrolled(window.scrollY > heroHeight - 80)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			className={`
        fixed top-0 left-0 w-full z-50 
        px-4 lg:px-16 
        flex items-center justify-between
        transition-all duration-300
        ${scrolled ? "bg-primary shadow-lg py-2" : "bg-transparent py-6"}
      `}
		>
			<div className="flex items-center justify-center">
				<Image src="/assets/wf-white.png" alt="Logo" width={70} height={70} />
			</div>

			<DesktopMenu />
			<MobileMenu />
		</header>
	)
}
