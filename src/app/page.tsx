"use client";

import { AnimationWrapper } from "@/components/animations";
import { GitHubLink } from "@/components/github-link";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/constants";
import { SmileyIcon } from "@phosphor-icons/react";
import {
	CodeIcon,
	GraduationCapIcon,
	HouseLineIcon,
	ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { useRef } from "react";
import { useSound } from "use-sound";

export default function Home() {
	const [scope, animate] = useAnimate();
	const imgOneRef = useRef<HTMLImageElement>(null);
	const imgTwoRef = useRef<HTMLImageElement>(null);
	const resetRef = useRef<HTMLDivElement>(null);

	const [playScrape, { stop, sound }] = useSound(
		"/sounds/concrete-scrape.mp3",
		{
			interrupt: true,
			volume: 0,
		}
	);
	const [playCrack] = useSound("/sounds/crack.mp3");

	const fadeVolume = (target: number, duration: number = 500) => {
		if (!sound) return;

		const startVolume = sound.volume();
		const volumeStep = (target - startVolume) / (duration / 50);

		const interval = setInterval(() => {
			const currentVolume = sound.volume();
			const newVolume = currentVolume + volumeStep;

			if (
				(volumeStep > 0 && newVolume >= target) ||
				(volumeStep < 0 && newVolume <= target)
			) {
				sound.volume(target);
				clearInterval(interval);
				if (target === 0) {
					stop();
					sound.volume(1); // Reset volume to 1 after stopping
				}
			} else {
				sound.volume(newVolume);
			}
		}, 50);
	};

	const handleSecretClick = () => {
		// 1. Show hand image 1 at state 1, then pan to state 2
		// 1.5. Hide main card
		// 2. Show hand image 2 at state 1, then pan to state 2
		// (like a hand grabbing the card and taking it away, revealing something behind it)
		if (!imgOneRef.current || !imgTwoRef.current || !resetRef.current)
			return;

		imgOneRef.current.style.opacity = "1";

		playScrape();
		setTimeout(() => fadeVolume(0.8, 300), 100);

		animate(
			imgOneRef.current,
			{
				x: ["120%", "28%"],
			},
			{
				duration: 3,
				delay: 0.2,
			}
		);

		setTimeout(() => {
			fadeVolume(0, 2500);

			playCrack();

			if (imgTwoRef.current && imgOneRef.current && scope.current) {
				imgOneRef.current.style.opacity = "0";
				scope.current.style.pointerEvents = "none";
				animate(
					scope.current,
					{
						scale: [1, 0.75],
						x: ["0%", "10%"],
					},
					{
						duration: 0.1,
					}
				);

				animate(
					scope.current,
					{
						opacity: [1, 0],
					},
					{
						duration: 0,
						delay: 0.1,
					}
				);
				imgTwoRef.current.style.opacity = "1";

				setTimeout(() => {
					playScrape();
					fadeVolume(0.8, 300);
				}, 1000);

				animate(
					imgTwoRef.current,
					{
						x: ["20%", "120%"],
					},
					{
						duration: 4,
						delay: 1,
					}
				);
			}
		}, 2500);

		resetRef.current.style.pointerEvents = "auto";
		resetRef.current.style.display = "flex";

		animate(
			resetRef.current,
			{
				opacity: [0, 1],
			},
			{
				duration: 2,
				delay: 6,
			}
		);
	};

	const resetAnimation = () => {
		if (
			!imgOneRef.current ||
			!imgTwoRef.current ||
			!scope.current ||
			!resetRef.current
		)
			return;
		imgOneRef.current.style.opacity = "0";
		imgTwoRef.current.style.opacity = "0";
		resetRef.current.style.opacity = "0";
		resetRef.current.style.pointerEvents = "none";
		resetRef.current.style.display = "none";
		scope.current.style.pointerEvents = "auto";

		animate(
			scope.current,
			{
				opacity: [0, 1],
				scale: [0.75, 1],
				x: ["0%", "0%"],
			},
			{
				duration: 0.5,
			}
		);
	};

	return (
		<main className="relative flex w-full h-full items-center justify-center">
			<Image
				src="/hand-1.png"
				alt="The evil hand"
				width={540}
				height={360}
				ref={imgOneRef}
				className="pointer-events-none absolute opacity-0 top-[45%] -translate-y-1/2 z-0 scale-300 will-change-transform"
			/>
			<Image
				src="/hand-2.png"
				alt="The evil hand part 2"
				width={612}
				height={372}
				ref={imgTwoRef}
				className="pointer-events-none absolute opacity-0 top-[45%] -translate-y-1/2 z-12 scale-300 will-change-transform"
			/>
			<div
				className="absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 z-20 flex items-center justify-center pointer-events-none"
				ref={resetRef}
			>
				<Button variant="confirm" onClick={resetAnimation}>
					<SmileyIcon weight="regular" size={20} />
					Reset
				</Button>
			</div>
			<div className="absolute bottom-2 lg:bottom-4 lg:right-4">
				<GitHubLink />
			</div>
			<div className="z-10">
				<AnimationWrapper direction="up">
					<div
						className="z-10 flex flex-col items-center lg:items-start justify-center lg:bg-gradient-to-b lg:from-accent/40 lg:to-accent/15 lg:to-10% px-3 py-4 lg:py-5 lg:pl-5 lg:pr-3 rounded-4xl lg:border border-accent/40 border-t-accent lg:shadow-md lg:shadow-black backdrop-blur-lg pointer-events-auto"
						ref={scope}
					>
						<div className="flex flex-row items-center gap-3 lg:gap-6 justify-start">
							<Image
								src="https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/ChaseBrock.jpg"
								alt="A picture of me"
								width={146}
								height={146}
								className="object-cover object-top rounded-4xl lg:rounded-5xl border border-foreground/20 border-t-foreground/40 dual-shadow-dark size-[100px] lg:size-[150px]"
							/>
							<div className="flex flex-col text-left gap-1">
								<h1 className="text-[45px]/13 lg:text-[64px]/18 font-semibold font-metal bg-clip-text text-transparent bg-gradient-to-b from-white from-25% to-white/70 to-60%">
									Chase Brock
								</h1>
								<div className="flex flex-row items-center space-x-1 lg:space-x-2 text-red text-xs lg:text-base font-medium font-sans whitespace-nowrap">
									<span className="pl-2 pr-3 py-0.5 rounded-md bg-gradient-to-b from-red/25 to-red/15 to-30% inline-flex w-fit flex-row items-center border border-red/15 border-t-red/40">
										<CodeIcon
											weight="regular"
											size={20}
											className="inline mr-1 lg:mr-2 size-[15px] lg:size-[20px]"
										/>
										<h2>Full-Stack Developer</h2>
									</span>
									<span className="pl-2 pr-3 py-0.5 rounded-md bg-gradient-to-b from-red/25 to-red/15 to-30% inline-flex w-fit flex-row items-center border border-red/15 border-t-red/40">
										<GraduationCapIcon
											weight="fill"
											size={20}
											className="inline mr-1 lg:mr-2 size-[15px] lg:size-[20px]"
										/>
										<h2>Student</h2>
									</span>
								</div>
								<div className="flex flex-row items-center gap-2 text-foreground/75">
									<HouseLineIcon
										weight="fill"
										size={20}
										className="size-[15px] lg:size-[20px] mt-0.4 lg:mt-0"
									/>
									<p className="text-sm lg:text-lg font-header font-semibold">
										Houston, TX
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-row max-w-lg flex-wrap items-center justify-center lg:justify-start gap-2 mt-4 lg:mt-6">
							{links.map((link, index) => {
								const Icon = link.icon;
								return (
									<AnimationWrapper
										key={`nav-${link.name}`}
										delay={index * 0.1}
										className="inline-block"
									>
										<Link
											href={link.href}
											target={
												link.externalLink
													? "_blank"
													: "_self"
											}
											rel={
												link.externalLink
													? "noopener noreferrer"
													: undefined
											}
										>
											<Button
												variant="default"
												className="dual-shadow-sm-dark"
												aria-label={link.name}
												title={link.name}
											>
												<Icon
													weight={"regular"}
													size={20}
													className="inline"
												/>
												{link.name}
												{link.externalLink && (
													<ArrowUpRightIcon
														weight="regular"
														size={16}
														className="inline ml-1"
													/>
												)}
											</Button>
										</Link>
									</AnimationWrapper>
								);
							})}
							<AnimationWrapper
								key={`nav-secret`}
								delay={links.length * 0.1}
								className="inline-block"
							>
								<Button
									variant="default"
									className="dual-shadow-sm-dark"
									onClick={handleSecretClick}
									title="Secret"
									aria-label="Secret"
								>
									<SmileyIcon
										weight={"regular"}
										size={20}
										className="inline"
									/>
									Secret
								</Button>
							</AnimationWrapper>
						</div>
					</div>
				</AnimationWrapper>
			</div>
		</main>
	);
}
