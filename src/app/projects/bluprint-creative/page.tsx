"use client";

import { Technologies } from "@/components/technologies";
import { technologies } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/context/project-context";
import {
	ArrowDownIcon,
	ArrowUpRightIcon,
	GlobeIcon,
	CodeIcon,
	StackIcon as Stack,
	SparkleIcon,
	CalendarIcon,
	LightbulbFilamentIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import {
	CalendarExpandedButton,
	CalendarExpandedModal,
} from "./components/calendar-expanded";
import { useState } from "react";

export default function BluprintCreativePage() {
	const { projects } = useProjects();
	const [modalStates, setModalStates] = useState({
		calendarExpanded: false,
	});

	const bpCreative = projects.find(
		(project) => project.slug === "bluprint-creative"
	);

	if (!bpCreative) {
		return (
			<div className="text-center text-red-500">Project not found.</div>
		);
	}

	const bpCreativeTechnologies = technologies
		.map((tech) => {
			if (bpCreative.technologies.includes(tech.name)) {
				return {
					name: tech.name,
					icon: tech.icon,
				};
			}
		})
		.filter((tech) => tech !== undefined);

	const technologyBreakdown = [
		{
			name: "Next.js",
			icon: "nextjs2",
			whyItsUsed:
				"Server-side rendering, API and page routing, and static site generation",
		},
		{
			name: "React",
			icon: "react",
			whyItsUsed: "Component-based architecture for building UI",
		},
		{
			name: "Tailwind CSS",
			icon: "tailwindcss",
			whyItsUsed:
				"Fast and efficient styling, theming, and support for responsive design",
		},
		{
			name: "TypeScript",
			icon: "typescript",
			whyItsUsed:
				"Strong types for better developer experience, maintainability, and safety",
		},
		{
			name: "Supabase",
			icon: "supabase",
			whyItsUsed:
				"Catch-all database for users, data storage, subscription management, etc.",
		},
		{
			name: "Vercel",
			icon: "vercel",
			whyItsUsed:
				"Hosting, deployment, speed insights, file storage, and Next.js integration",
		},
		{
			name: "Git",
			icon: "git",
			whyItsUsed:
				"Version control for tracking changes and deployment management",
		},
		{
			name: "Stripe",
			icon: "/icons/stripe-icon.svg",
			whyItsUsed: "Payment processing and management for subscriptions",
		},
	];

	return (
		<>
			<CalendarExpandedModal
				open={modalStates.calendarExpanded}
				setOpen={(open) =>
					setModalStates({ ...modalStates, calendarExpanded: open })
				}
			/>
			<div className="flex w-full flex-col gap-20 items-center">
				<section
					id="header"
					className="w-screen bg-foreground/5 border-t border-b border-foreground/10 flex items-center flex-col pt-12 pb-16"
				>
					<div className="flex flex-col w-7xl gap-2">
						<Image
							src={bpCreative.photos[0]}
							alt={bpCreative.title}
							width={400}
							height={225}
							className="object-cover drop-shadow-md drop-shadow-black"
						/>
						<p className="text-xl font-sans text-foreground/75 w-2/3 text-balance">
							{bpCreative.description}
							<br />
							<br />
							<span className="text-base font-light text-foreground/50">
								*Due to this being a client project, I am unable
								to provide a live demo of the application.
								However, I can provide code samples and
								screenshots of it in action.
							</span>
						</p>
						<div className="flex flex-row items-center gap-2 mt-4">
							{bpCreative.link && (
								<Link
									href={bpCreative.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button variant="confirm" size="lg">
										Check it out
										<ArrowUpRightIcon weight="bold" />
									</Button>
								</Link>
							)}
							<Link href="#code">
								<Button size="lg">
									View code samples
									<ArrowDownIcon />
								</Button>
							</Link>
						</div>
					</div>
				</section>
				<div className="flex flex-col gap-24 w-7xl py-16">
					<section
						id="overview"
						className="relative grid grid-cols-7 w-full gap-26"
					>
						<div className="absolute left-0 -top-16 w-[600px] h-[600px] bg-red/10 rounded-full blur-3xl -z-1" />
						<div className="flex flex-col w-full col-span-4 pr-20">
							<Image
								src={bpCreative.photos[1]}
								alt={`${bpCreative.title} screenshot 1`}
								width={1280}
								height={720}
								className="object-cover rounded-lg shadow-lg scale-175"
							/>
						</div>
						<div className="flex flex-col gap-5 w-full col-span-3">
							<h2 className="text-4xl font-semibold font-header text-foreground">
								<GlobeIcon
									className="inline mr-2.5 mb-1"
									weight="fill"
								/>
								Overview
							</h2>
							<p className="font-sans font-light text-xl text-foreground/50">
								Bluprint Creative is a full-stack web
								application that I was contracted to build
								entirely on my own with client feature requests
								and sales page tweaks. It features a modern,
								responsive design that supports both mobile and
								desktop.
							</p>
							<div className="bg-red/15 p-4 mt-4 border-l-6 border-red/25 space-y-4 rounded-md z-10">
								<h3 className="text-xl font-header text-foreground/75 font-normal">
									<CodeIcon
										className="inline mr-2 mb-1"
										weight="bold"
									/>
									Technologies
								</h3>
								<Technologies
									technologies={bpCreativeTechnologies}
									mini
								/>
							</div>
						</div>
					</section>
				</div>
				<section
					id="stack-breakdown"
					className="w-screen py-16 flex items-center flex-col bg-foreground/5 border-t border-b border-foreground/10"
				>
					<div className="w-7xl flex flex-col gap-12">
						<h2 className="text-4xl font-semibold font-header text-foreground text-center">
							<Stack
								className="inline mr-2.5 mb-1"
								weight="fill"
							/>
							Stack breakdown
						</h2>
						<div className="w-full grid grid-cols-4 gap-8">
							{technologyBreakdown.map((tech, index) => (
								<div
									key={`technology-breakdown-${tech.name}-${index}`}
									className="group flex flex-col gap-3 w-full rounded-md p-6 bg-background/50 border border-foreground/10 hover:border-red/25 transition-colors"
								>
									<span className="flex flex-row items-center gap-2">
										{tech.name === "Stripe" ? (
											<Image
												src={tech.icon}
												height={32}
												width={32}
												alt="stripe-icon"
												className="group-hover:grayscale transition-all shrink-0 object-cover size-8 inline"
											/>
										) : (
											<StackIcon
												className="inline w-8 group-hover:grayscale transition-all shrink-0"
												name={tech.icon}
											/>
										)}
										<div className="flex flex-row items-center justify-between w-full gap-2">
											<h4 className="text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
												{tech.name}
											</h4>
										</div>
									</span>
									<p className="font-sans text-lg font-light text-foreground/75">
										{tech.whyItsUsed}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
				<section
					id="features"
					className="w-7xl flex flex-col gap-12 pb-16"
				>
					<h2 className="text-4xl font-semibold font-header text-foreground text-center">
						<SparkleIcon
							className="inline mr-2.5 mb-1.5"
							weight="fill"
						/>
						Features
					</h2>
					<div className="grid grid-cols-2 gap-8">
						<div className="relative group flex flex-col gap-4 rounded-lg p-6 bg-foreground/5 border border-foreground/10 hover:border-red/25 transition-colors">
							<div className="absolute top-4 right-4">
								<CalendarExpandedButton
									setOpen={(open) =>
										setModalStates({
											...modalStates,
											calendarExpanded: open,
										})
									}
								/>
							</div>
							<Image
								src="/bpc/calendar-screenshots.png"
								alt="Calendar screenshots"
								width={1280}
								height={720}
								className="object-cover aspect-video rounded-lg pointer-events-none scale-145"
							/>
							<h3 className="text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
								<CalendarIcon
									className="inline mr-2.5 mb-1"
									weight="fill"
								/>
								Fully-featured content calendar
							</h3>
							<p className="font-sans text-lg font-light text-foreground/75">
								Users can create, edit, resize, and delete
								calendar events with a drag-and-drop interface.
								The calendar supports monthly, weekly, and daily
								views. Hovering an event will show a tooltip
								with the event details (e.g., whether it is a
								filming or release date, the platforms it will
								be posted on, etc.).
							</p>
							<Link
								href="https://fullcalendar.io/docs/react"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="group/poweredBy text-sm font-light text-foreground/50 hover:text-foreground transition-colors">
									Powered by{" "}
									<span className="text-red/75 font-semibold group-hover/poweredBy:text-red transition-colors group-hover/poweredBy:underline">
										@fullcalendar/react
									</span>
									<ArrowUpRightIcon
										className="inline ml-1"
										weight="bold"
									/>
								</p>
							</Link>
						</div>
						<div className="relative group flex flex-col gap-4 rounded-lg p-6 bg-foreground/5 border border-foreground/10 hover:border-red/25 transition-colors">
							<div className="absolute top-4 right-4">
								<CalendarExpandedButton
									setOpen={(open) =>
										setModalStates({
											...modalStates,
											calendarExpanded: open,
										})
									}
								/>
							</div>
							<Image
								src="/bpc/idea-grid.png"
								alt="Idea catalog screenshot"
								width={1280}
								height={720}
								className="object-cover aspect-video rounded-lg pointer-events-none scale-120"
							/>
							<h3 className="text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
								<LightbulbFilamentIcon
									className="inline mr-2.5 mb-1"
									weight="fill"
								/>
								Idea catalog
							</h3>
							<p className="font-sans text-lg font-light text-foreground/75">
								Here, users can manage every idea in their
								current active collection. Ideas can be sorted
								and filtered by category, status, archive
								status, and the current search term. Multiple
								ideas can be selected at once, and bulk actions
								can be performed on them, such as adding a
								specified category or status, archiving, or
								deleting them. Categories are displayed at the
								top, and selecting one will show only the ideas
								within that category.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
