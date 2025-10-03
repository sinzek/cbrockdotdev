"use client";

import { AnimationWrapper } from "@/components/animations";
import { GitHubLink } from "@/components/github-link";
import { Button } from "@/components/ui/button";
import { externalLinks, mainLinks } from "@/lib/constants";
import { EyesIcon, SmileyIcon } from "@phosphor-icons/react";
import { ArrowUpRightIcon, CodeIcon, GraduationCapIcon, HouseLineIcon } from "@phosphor-icons/react/dist/ssr";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useSound } from "use-sound";

export default function Home() {
	const [scope, animate] = useAnimate();
	const imgOneRef = useRef<HTMLImageElement>(null);
	const imgTwoRef = useRef<HTMLImageElement>(null);
	const resetRef = useRef<HTMLDivElement>(null);

	const [imageLoading, setImageLoading] = useState(true);

	const [playScrape, { stop, sound }] = useSound("/sounds/concrete-scrape.mp3", {
		interrupt: true,
		volume: 0,
	});
	const [playCrack] = useSound("/sounds/crack.mp3");

	const fadeVolume = (target: number, duration: number = 500) => {
		if (!sound) return;

		const startVolume = sound.volume();
		const volumeStep = (target - startVolume) / (duration / 50);

		const interval = setInterval(() => {
			const currentVolume = sound.volume();
			const newVolume = currentVolume + volumeStep;

			if ((volumeStep > 0 && newVolume >= target) || (volumeStep < 0 && newVolume <= target)) {
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
		if (!imgOneRef.current || !imgTwoRef.current || !resetRef.current) return;

		imgOneRef.current.style.opacity = "1";

		playScrape();
		sound.volume(0);
		setTimeout(() => fadeVolume(0.7, 300), 100);

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
			fadeVolume(0, 100);

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
					fadeVolume(0, 2500);
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
		}, 4000);

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
		if (!imgOneRef.current || !imgTwoRef.current || !scope.current || !resetRef.current) return;
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
		<main className="relative flex w-screen h-screen overflow-hidden items-center justify-center">
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
				className="absolute right-1/2 -translate-y-1/2 opacity-0 z-20 flex items-center justify-center pointer-events-none"
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
						className="z-10 flex flex-col items-center justify-center bg-background p-6 lg:p-8 pointer-events-auto lg:rounded-2xl"
						ref={scope}
					>
						<div className="flex flex-row items-center gap-3 lg:gap-6 justify-center">
							<div className="relative">
								{imageLoading && (
									<div className="absolute inset-0 flex items-center justify-center bg-foreground rounded-4xl lg:rounded-5xl" />
								)}
								<Image
									src="https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/ChaseBrock.jpg"
									alt="A picture of me"
									width={146}
									height={146}
									onLoad={() => setImageLoading(false)}
									className="object-cover object-top rounded-md size-[100px] lg:size-[150px]"
								/>
							</div>
							<div className="flex flex-col justify-center text-left gap-1">
								<h1 className="text-5xl lg:text-7xl tracking-tight font-oswald origin-bottom text-yellow -mt-1">
									chase brock
								</h1>
								<div className="mt-2 flex flex-row items-center gap-1.5 text-xs lg:text-base font-semibold font-sans test-foreground whitespace-nowrap">
									<span className="bg-blue/75 rounded-xs lg:rounded-sm text-foreground flex flex-row items-center px-1.5">
										<CodeIcon
											weight="regular"
											size={20}
											className="inline mr-1 size-[15px] lg:size-[20px]"
										/>
										<h2>full-stack developer</h2>
									</span>
									<span className="bg-blue/75 rounded-xs lg:rounded-sm text-foreground flex flex-row items-center px-1.5">
										<GraduationCapIcon
											weight="regular"
											size={20}
											className="inline mr-1 size-[15px] lg:size-[20px]"
										/>
										<h2>student</h2>
									</span>
								</div>
								<div className="mt-1 lg:mt-2 flex flex-row items-center gap-2 text-foreground">
									<HouseLineIcon weight="fill" size={16} />
									<p className="text-sm font-sans font-semibold mt-0.5">HOUSTON, TX</p>
								</div>
							</div>
						</div>
						<div className="flex flex-row max-w-lg flex-wrap items-center justify-start w-full gap-2 mt-4 lg:mt-6">
							{[...mainLinks].map((link, index) => {
								const Icon = link.icon;
								return (
									<AnimationWrapper
										key={`nav-${link.name}`}
										delay={index * 0.1}
										className="inline-block"
									>
										<Link href={link.href}>
											<Button
												variant="danger"
												className="dual-shadow-sm-dark"
												aria-label={link.name}
												title={link.name}
											>
												<Icon weight="fill" size={16} className="inline" />
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
								delay={[...mainLinks].length * 0.1}
								className="inline-block"
							>
								<Button
									variant="danger"
									className="dual-shadow-sm-dark"
									onClick={handleSecretClick}
									title="Secret"
									aria-label="Secret"
								>
									<EyesIcon weight="fill" size={16} className="inline" />
									secret
								</Button>
							</AnimationWrapper>
						</div>
						<div className="flex flex-row max-w-lg flex-wrap items-center justify-start w-full gap-2 mt-2 lg:mt-3">
							{[...externalLinks].map((link, index) => {
								const Icon = link.icon;
								return (
									<AnimationWrapper
										key={`nav-${link.name}`}
										delay={index * 0.1}
										className="inline-block"
									>
										<Link href={link.href} target={"_blank"} rel={"noopener noreferrer"}>
											<Button
												variant="default"
												className="dual-shadow-sm-dark"
												aria-label={link.name}
												title={link.name}
											>
												<Icon weight="fill" size={16} className="inline" />
												{link.name}
												<ArrowUpRightIcon weight="regular" size={16} className="inline ml-1" />
											</Button>
										</Link>
									</AnimationWrapper>
								);
							})}
						</div>
					</div>
				</AnimationWrapper>
			</div>
		</main>
	);
}
