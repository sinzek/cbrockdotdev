"use client";

import { AnimationWrapper } from "@/components/animations";
import { Technologies } from "@/components/technologies";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/context/project-context";
import { technologies } from "@/lib/constants";
import {
	ArrowDownIcon,
	ArrowUpRightIcon,
	CalendarIcon,
	ClipboardTextIcon,
	CodeIcon,
	GlobeIcon,
	LightbulbFilamentIcon,
	ScrollIcon,
	SparkleIcon,
	StackIcon as Stack,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import { CalendarExpanded } from "./components/calendar-expanded";
import { IdeaCatalogExpanded } from "./components/idea-catalog-expanded";
import { IdeaEditorExpanded } from "./components/idea-editor-expanded";
import { ScriptExpanded } from "./components/script-expanded";
import { technologyBreakdownList } from "./constants";

export default function BluprintCreativePage() {
	const { projects } = useProjects();

	const bpCreative = projects.find((project) => project.slug === "bluprint-creative");

	if (!bpCreative) {
		return (
			<div className="flex items-center justify-center w-full h-screen">
				<p className="text-2xl font-semibold text-foreground">Project not found.</p>
			</div>
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

	return (
		<>
			<div className="flex w-full flex-col gap-20 pb-12 items-center">
				<section
					id="header"
					className="w-screen bg-foreground/5 border-t border-b border-foreground/10 flex items-center flex-col pt-12 pb-16 px-5 lg:px-0"
				>
					<AnimationWrapper direction="right">
						<div className="flex flex-col lg:w-7xl gap-2">
							<Image
								src={bpCreative.photos[0]}
								alt={bpCreative.title}
								width={400}
								height={225}
								className="object-cover drop-shadow-md drop-shadow-black"
							/>
							<p className="text-xl font-sans text-foreground/75 w-full lg:w-2/3 text-balance">
								{bpCreative.description}
								<span className="text-base font-light text-foreground/50 block mt-4">
									*Due to this being a client project, I am unable to provide a full open-source copy
									of the application. However, I can provide code samples and screenshots of it in
									action. If you&apos;d like to try it out for free, click &quot;Check it out&quot;
									below.
								</span>
							</p>
							<div className="flex flex-row items-center gap-2 mt-4">
								{bpCreative.link && (
									<AnimationWrapper direction="up" delay={0.2}>
										<Link href={bpCreative.link} target="_blank" rel="noopener noreferrer">
											<Button variant="confirm" size="lg">
												Check it out
												<ArrowUpRightIcon weight="bold" />
											</Button>
										</Link>
									</AnimationWrapper>
								)}
								<AnimationWrapper direction="up" delay={0.4}>
									<Link href="#code">
										<Button size="lg">
											View code samples
											<ArrowDownIcon />
										</Button>
									</Link>
								</AnimationWrapper>
							</div>
						</div>
					</AnimationWrapper>
				</section>
				<div className="flex flex-col gap-24 lg:w-7xl pb-12 lg:py-16 px-5 lg:px-0">
					<AnimationWrapper direction="left">
						<section
							id="overview"
							className="relative grid grid-cols-1 lg:grid-cols-7 place-items-center w-full gap-y-5 lg:gap-26"
						>
							<div className="absolute left-0 -top-16 w-[600px] h-[600px] bg-red/10 rounded-full blur-3xl -z-1" />
							<div className="flex flex-col w-full lg:col-span-4 lg:pr-20 mx-auto">
								<Image
									src={bpCreative.photos[1]}
									alt={`${bpCreative.title} screenshot 1`}
									width={1280}
									height={720}
									className="object-cover scale-135 lg:scale-175 -translate-x-1 lg:translate-x-0"
								/>
							</div>
							<div className="flex flex-col gap-5 w-full col-span-3">
								<h2 className="text-4xl font-semibold font-header text-foreground">
									<GlobeIcon className="inline mr-2.5 mb-1" weight="duotone" />
									Overview
								</h2>
								<p className="font-sans font-light text-xl text-foreground/65">
									Bluprint Creative is a full-stack web application that I built independently, based
									on client feature requests and updates to the sales page. It features a modern,
									responsive design that works seamlessly on both mobile and desktop devices.
								</p>
								<div className="bg-gradient-to-b from-red/25 to-red/10 to-6% p-4 mt-4 border-l-6 border-t border-red/50 border-t-red/35 space-y-4 rounded-md ">
									<h3 className="text-xl font-header text-foreground font-normal">
										<CodeIcon className="inline mr-2 mb-1" weight="bold" />
										Technologies
									</h3>
									<Technologies technologies={bpCreativeTechnologies} mini />
								</div>
							</div>
						</section>
					</AnimationWrapper>
				</div>
				<section
					id="stack-breakdown"
					className="w-screen py-16 px-5 lg:px-0 flex items-center flex-col bg-foreground/5 border-t border-b border-foreground/10"
				>
					<AnimationWrapper direction="right" whenInView>
						<div className="lg:w-7xl flex flex-col gap-12">
							<h2 className="text-4xl font-semibold font-header text-foreground text-center">
								<Stack className="inline mr-2.5 mb-1" weight="duotone" />
								Stack breakdown
							</h2>
							<div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
								{technologyBreakdownList.map((tech, index) => (
									<div
										key={`technology-breakdown-${tech.name}-${index}`}
										className="group flex flex-col gap-3 w-full rounded-md p-4 lg:p-6 bg-gradient-to-b from-foreground/10 to-background/50 to-5% border border-foreground/10 border-t-foreground/25 hover:border-t-red/50 hover:border-red/25 transition-colors shadow-black/50 dual-shadow"
									>
										<span className="flex flex-row items-center gap-1.5 lg:gap-2">
											{tech.name === "Stripe" ? (
												<Image
													src={tech.icon}
													height={32}
													width={32}
													alt="stripe-icon"
													className="grayscale-50 group-hover:grayscale-0 transition-all shrink-0 object-cover size-6 lg:size-8 inline"
												/>
											) : (
												<StackIcon
													className="inline size-6 lg:size-8 grayscale-50 group-hover:grayscale-0 transition-all shrink-0"
													name={tech.icon}
												/>
											)}
											<div className="flex flex-row items-center justify-between w-full gap-2">
												<h4 className="text-lg lg:text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
													{tech.name}
												</h4>
											</div>
										</span>
										<p className="font-sans text-sm lg:text-lg font-light text-foreground/75">
											{tech.whyItsUsed}
										</p>
									</div>
								))}
							</div>
						</div>
					</AnimationWrapper>
				</section>
				<section id="features" className="lg:w-7xl flex flex-col gap-12 pb-16 px-5 lg:px-0">
					<AnimationWrapper direction="left" whenInView>
						<h2 className="text-4xl font-semibold font-header text-foreground text-center">
							<SparkleIcon className="inline mr-2.5 mb-1.5" weight="duotone" />
							Features
						</h2>
					</AnimationWrapper>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<AnimationWrapper whenInView>
							<div className="relative group flex flex-col gap-4 rounded-2xl p-6 bg-gradient-to-b from-foreground/17 to-foreground/5 to-2% border border-foreground/10 border-t-foreground/30 hover:border-red/25 hover:border-t-red/50 transition-colors dual-shadow-dark">
								<div className="absolute lg:top-4 lg:right-4 top-2 right-2">
									<CalendarExpanded />
								</div>
								<Image
									src="/bpc/fancy-calendars.png"
									alt="Calendar screenshots"
									width={1280}
									height={720}
									className="object-cover aspect-video rounded-lg pointer-events-none scale-145"
								/>
								<h3 className="text-xl lg:text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
									<CalendarIcon className="inline mr-2 mb-1" weight="duotone" />
									Content calendar
								</h3>
								<p className="font-sans text-base lg:text-lg font-light text-foreground/75">
									Users can create, edit, resize, and delete calendar events with a drag-and-drop
									interface. The calendar supports monthly, weekly, and daily views. Hovering an event
									will show a tooltip with the event details, such as the title, release platforms,
									and whether it is a release date or a filming date.
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
										<ArrowUpRightIcon className="inline ml-1" weight="bold" />
									</p>
								</Link>
							</div>
						</AnimationWrapper>
						<AnimationWrapper whenInView>
							<div className="relative group flex flex-col gap-4 rounded-2xl p-6 bg-gradient-to-b from-foreground/17 to-foreground/5 to-2% border border-foreground/10 border-t-foreground/30 hover:border-red/25 hover:border-t-red/50 transition-colors dual-shadow-dark">
								<div className="absolute top-2 right-2 lg:top-4 lg:right-4">
									<IdeaCatalogExpanded />
								</div>
								<Image
									src="/bpc/fancy-ideaGrid-dark-frame3.png"
									alt="Idea catalog screenshot"
									width={1280}
									height={720}
									className="object-cover aspect-video rounded-lg pointer-events-none scale-120"
								/>
								<h3 className="text-xl lg:text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
									<LightbulbFilamentIcon className="inline mr-2 mb-1" weight="duotone" />
									Idea catalog
								</h3>
								<p className="font-sans text-base lg:text-lg font-light text-foreground/75">
									Here, users can manage every idea in their current active collection. Advanced
									sorting and filtering is present, making finding a specific idea as fast as
									possible. Bulk actions are also possible, like adding a specified category or
									deleting a set of ideas at once. Not only that, but users can also duplicate an
									idea, quickly edit an idea with the quick-edit menu, pin an idea to their dashboard,
									and more.
								</p>
							</div>
						</AnimationWrapper>
						<AnimationWrapper whenInView>
							<div className="relative group flex flex-col gap-4 rounded-2xl p-6 bg-gradient-to-b from-foreground/17 to-foreground/5 to-2% border border-foreground/10 border-t-foreground/30 hover:border-red/25 hover:border-t-red/50 transition-colors dual-shadow-dark">
								<div className="absolute lg:top-4 lg:right-4 top-2 right-2">
									<IdeaEditorExpanded />
								</div>
								<Image
									src="/bpc/fancy-ideaEditor-dark.png"
									alt="Idea catalog screenshot"
									width={1920}
									height={1440}
									className="object-contain aspect-video rounded-lg pointer-events-none scale-120 -translate-y-3"
								/>
								<h3 className="text-xl lg:text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
									<ClipboardTextIcon className="inline mr-2 mb-1" weight="duotone" />
									Custom fields
								</h3>
								<p className="font-sans text-base lg:text-lg font-light text-foreground/75">
									From scratch (and with some help from radix-ui), I created a set of form fields, a
									task list, and a thumbnail grid that actually feel both nice to use and like a
									native application; all with a robust validation and an error handling system.
								</p>
								<Link href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer">
									<p className="group/poweredBy text-sm font-light text-foreground/50 hover:text-foreground transition-colors">
										With help from{" "}
										<span className="text-red/75 font-semibold group-hover/poweredBy:text-red transition-colors group-hover/poweredBy:underline">
											@radix-ui
										</span>
										<ArrowUpRightIcon className="inline ml-1" weight="bold" />
									</p>
								</Link>
							</div>
						</AnimationWrapper>
						<AnimationWrapper whenInView>
							<div className="relative group flex flex-col gap-4 rounded-2xl p-6 bg-gradient-to-b from-foreground/17 to-foreground/5 to-2% border border-foreground/10 border-t-foreground/30 hover:border-red/25 hover:border-t-red/50 transition-colors dual-shadow-dark">
								<div className="absolute lg:top-4 lg:right-4 top-2 right-2">
									<ScriptExpanded />
								</div>
								<Image
									src="/bpc/fancy-scriptEditor-light-expanded.png"
									alt="Script editor screenshot light mode"
									width={1920}
									height={1440}
									className="object-contain aspect-video rounded-lg pointer-events-none scale-135"
								/>
								<h3 className="text-xl lg:text-2xl font-semibold font-sans text-foreground group-hover:text-red transition-colors">
									<ScrollIcon className="inline mr-2 mb-1" weight="duotone" />
									WYSIWYG rich script editor
								</h3>
								<p className="font-sans text-base lg:text-lg font-light text-foreground/75">
									Using tiptap, I created a rich text editor that allows users to write scripts with
									formatting, headings, lists, images, and more, all from the idea editor. This way, a
									script is directly attached to an idea, mitigating the &quot;endless Google
									Docs&quot; problem entirely.
								</p>
								<Link
									href="https://tiptap.dev/docs/ui-components/templates/simple-editor"
									target="_blank"
									rel="noopener noreferrer"
								>
									<p className="group/poweredBy text-sm font-light text-foreground/50 hover:text-foreground transition-colors">
										Powered by{" "}
										<span className="text-red/75 font-semibold group-hover/poweredBy:text-red transition-colors group-hover/poweredBy:underline">
											@tiptap/simple-editor
										</span>
										<ArrowUpRightIcon className="inline ml-1" weight="bold" />
									</p>
								</Link>
							</div>
						</AnimationWrapper>
					</div>
				</section>
			</div>
		</>
	);
}
