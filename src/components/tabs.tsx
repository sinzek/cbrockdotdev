"use client";
import { useMobile } from "@/hooks/useMobile";
import { externalLinks, mainLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { AnimationWrapper } from "./animations";

export const Tabs = () => {
	const pathname = usePathname();
	const isMobile = useMobile();
	const router = useRouter();

	const goBack = () => {
		if (pathname === "/projects" || pathname === "/about-me") {
			router.push("/");
		} else if (pathname.startsWith("/projects")) {
			router.push("/projects");
		} else {
			router.back();
		}
	};

	if (isMobile) {
		return (
			<>
				{pathname !== "/" && (
					<AnimationWrapper className="fixed bottom-8 z-50">
						<div className="px-4 rounded-full bg-background border border-accent  shadow-md shadow-black/75 will-change-transform">
							<div className="flex flex-row items-center justify-center gap-2">
								<button
									type="button"
									title="Go back"
									onClick={goBack}
									onTouchStart={(e) => {
										e.currentTarget.style.transform = "scale(0.85)";
									}}
									onTouchEnd={(e) => {
										e.currentTarget.style.transform = "scale(1)";
									}}
									onTouchCancel={(e) => {
										e.currentTarget.style.transform = "scale(1)";
									}}
									aria-label="Go back"
									className="flex items-center justify-center p-1.5 rounded-full cursor-pointer hover:text-yellow transition-all duration-200"
								>
									<ArrowLeftIcon weight="regular" size={20} />
								</button>
								{[...mainLinks, ...externalLinks].map((link, index) => {
									const Icon = link.icon;
									return (
										<Fragment key={`mobile-tab-${link.name}`}>
											<Link
												href={link.href}
												className={cn(
													"relative p-1.5 rounded-full text-foreground/75 my-1 transition-all",
													pathname.startsWith(link.href) && "bg-yellow/30 text-foreground"
												)}
												onTouchStart={(e) => {
													e.currentTarget.style.transform = "scale(0.85)";
												}}
												onTouchEnd={(e) => {
													e.currentTarget.style.transform = "scale(1)";
												}}
												onTouchCancel={(e) => {
													e.currentTarget.style.transform = "scale(1)";
												}}
											>
												<Icon
													weight={pathname.startsWith(link.href) ? "duotone" : "regular"}
													size={24}
												/>
											</Link>
											{index === [...mainLinks, ...externalLinks].length / 2 - 1 && (
												<div
													className="w-[0.5px] h-11 bg-accent"
													key={`mobile-tab-separator-${index}`}
												/>
											)}
										</Fragment>
									);
								})}
							</div>
						</div>
					</AnimationWrapper>
				)}
			</>
		);
	}

	return (
		<>
			{pathname !== "/" && (
				<div className="hidden lg:flex flex-col items-center justify-center gap-1 mb-12 max-w-5xl w-full pt-18 whitespace-nowrap">
					<div className="flex flex-row items-center justify-center gap-4 w-full">
						<button
							type="button"
							title="Go back"
							onClick={goBack}
							aria-label="Go back"
							className="text-lg font-sans font-light flex flex-row items-center justify-between gap-1 px-2 py-0.5 rounded-full cursor-pointer hover:text-yellow transition-all duration-200"
						>
							<ArrowLeftIcon weight="regular" size={20} />
						</button>
						{[...mainLinks, ...externalLinks].map((link) => {
							const Icon = link.icon;

							return (
								<Link
									href={link.href}
									key={`tab-${link.name}`}
									target={link.externalLink ? "_blank" : "_self"}
									rel={link.externalLink ? "noopener noreferrer" : undefined}
									title={link.name}
								>
									<span
										className={cn(
											"relative text-lg transition-all duration-200 font-sans font-light flex flex-row items-center gap-1 px-2 py-0.5 rounded-full",
											pathname.startsWith(link.href)
												? "text-yellow"
												: "text-foreground hover:text-yellow"
										)}
									>
										<Icon
											weight={pathname.startsWith(link.href) ? "duotone" : "regular"}
											size={20}
										/>
										{link.name}
										{link.externalLink && (
											<ArrowUpRightIcon weight="regular" size={16} className="inline ml-1" />
										)}
										<AnimatePresence mode="wait">
											{pathname.startsWith(link.href) && (
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
													className="absolute -bottom-[5px] w-[90%] h-px bg-yellow"
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
