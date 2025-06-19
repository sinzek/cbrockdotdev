"use client";
import { links } from "@/lib/constants";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const Tabs = () => {
	const pathname = usePathname();

	return (
		<>
			{pathname !== "/" && (
				<div className="flex flex-col items-center justify-center gap-1 mb-12 max-w-6xl w-full pt-18">
					<div className="flex flex-row items-center justify-center gap-4 max-w-5xl w-full">
						<Link href="/">
							<button className="text-lg font-sans font-light flex flex-row items-center justify-between gap-1 px-2 py-0.5 rounded-full cursor-pointer hover:text-red transition-all duration-200">
								<ArrowLeftIcon weight="regular" size={20} />
							</button>
						</Link>
						{links.map((link) => {
							const Icon = link.icon;

							return (
								<Link
									href={link.href}
									key={`tab-${link.name}`}
									target={
										link.externalLink ? "_blank" : "_self"
									}
									rel={
										link.externalLink
											? "noopener noreferrer"
											: undefined
									}
									className={cn(
										pathname === link.href
											? "pointer-events-none"
											: "cursor-pointer"
									)}
								>
									<span
										className={cn(
											"relative text-lg transition-all duration-200 font-sans font-light flex flex-row items-center gap-1 px-2 py-0.5 rounded-full",
											pathname === link.href
												? "text-red"
												: "text-foreground hover:text-red"
										)}
									>
										<Icon
											weight={
												pathname === link.href
													? "fill"
													: "regular"
											}
											size={20}
										/>
										{link.name}
										{link.externalLink && (
											<ArrowUpRightIcon
												weight="regular"
												size={16}
												className="inline ml-1"
											/>
										)}
										<AnimatePresence mode="wait">
											{pathname === link.href && (
												<motion.div
													initial={{
														scaleX: 0,
														opacity: 0.5,
													}}
													animate={{
														scaleX: 1,
														opacity: 1,
													}}
													exit={{
														scaleX: 0,
														opacity: 0.5,
													}}
													transition={{
														type: "spring",
														stiffness: 300,
														damping: 30,
														duration: 0.2,
													}}
													key={`underline-${link.name}`}
													className="absolute -bottom-[5px] w-[90%] h-px bg-red"
												/>
											)}
										</AnimatePresence>
									</span>
								</Link>
							);
						})}
					</div>
					<div className="h-px bg-foreground/10 w-full" />
				</div>
			)}
		</>
	);
};
