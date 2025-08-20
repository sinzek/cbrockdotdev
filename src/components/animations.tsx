"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimationWrapper({
	children,
	delay,
	direction,
	className,
	whenInView,
}: {
	children: ReactNode;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
	className?: string;
	whenInView?: boolean;
}) {
	const animationProps: Omit<HTMLMotionProps<"div">, "children"> = whenInView
		? {
				initial: {
					opacity: 0,
					y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
					x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
				},
				whileInView: { opacity: 1, y: 0, x: 0 },
				viewport: { once: true, amount: 0.1 },
				transition: {
					duration: 0.5,
					delay: delay || 0,
					type: "spring",
					stiffness: 100,
				},
		  }
		: {
				initial: {
					opacity: 0,
					y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
					x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
				},
				animate: { opacity: 1, y: 0, x: 0 },
				transition: {
					duration: 0.5,
					delay: delay || 0,
					type: "spring",
					stiffness: 100,
				},
		  };

	return (
		<motion.div {...animationProps} className={className}>
			{children}
		</motion.div>
	);
}
