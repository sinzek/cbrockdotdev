"use client";

import { CDialog, CDialogContent, CDialogTrigger } from "@/components/c-dialog";
import { ArrowUpRightIcon, CalendarIcon, EyeIcon, StarIcon, VideoCameraIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function CalendarExpanded() {
	return (
		<CDialog>
			<CDialogTrigger variant="confirm">
				<EyeIcon className="mr-0.5 size-4" weight="duotone" />
				Read more
			</CDialogTrigger>
			<CDialogContent>
				<div className="flex flex-col-reverse gap-4 lg:gap-0 lg:grid lg:grid-cols-2">
					<div className="flex flex-col gap-3 lg:gap-4 max-h-[60vh] lg:max-h-[67vh] overflow-y-auto lg:pr-6 pb-24 lg:pb-0 text-base 4xl:text-lg font-light font-sans text-foreground/75">
						<h2 className="lg:text-3xl text-2xl font-semibold font-header text-foreground mb-1 lg:mb-3 bg-background/90 sticky top-0 pb-2 backdrop-blur-[2px]">
							<CalendarIcon className="inline mr-2.5 mb-1" weight="duotone" />
							The content calendar
						</h2>
						<p>
							When a filming or release date on an idea is set, it is added to the content calendar as an
							event. This allows the user to see their entire content schedule at a glance, making it
							easier to plan and manage their time effectively. Selecting an event will open its
							corresponding idea, which can then be edited or updated as needed. Events can be dragged,
							resized, and even created by selecting days on the calendar, which will create a new idea
							with filming dates of what was selected.
						</p>
						<p className="mt-4">Creating a calendar event attached to an idea is simple:</p>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
							<div className="flex flex-col gap-2">
								<p className="font-semibold text-base text-red">
									<VideoCameraIcon weight="duotone" className="inline mb-1 mr-1.5" />
									For filming dates
								</p>
								<Image
									src="/bpc/ideaFilmingDate-dark.png"
									alt="Filming date screenshot"
									width={400}
									height={225}
									className="rounded-lg border border-foreground/10"
								/>
								<p className="text-sm text-foreground/50 ">
									Select a single day or a range of days. To add another day, click the + icon next to
									the first date range field. Previously selected days will be grayed out, so you have
									a visual indicator of which days are already selected.
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-semibold text-base text-red">
									<StarIcon weight="duotone" className="inline mb-1 mr-1.5" />
									For a release date
								</p>
								<Image
									src="/bpc/ideaReleaseDate-dark.png"
									alt="Filming date screenshot"
									width={400}
									height={225}
									className="rounded-lg border border-foreground/10"
								/>
								<p className="text-sm text-foreground/50">
									Select a single day and time. There are provided presets for today, tomorrow, and
									next week. If a filming date is present, three more presets will appear: 1 week
									after filming, 2 weeks after filming, and 1 month after filming.
								</p>
							</div>
						</div>
						<p>
							Once date(s) are selected for either field, a corresponding calendar event will be created
							for one or both (depending on which fields are filled out), and subsequently added to the
							content calendar.
						</p>
						<p className="mt-4 lg:mt-6">
							Custom event colors are also supported, allowing users to visually distinguish between
							different types of events:
						</p>
						<div className="flex flex-col-reverse lg:flex-row items-center gap-6">
							<Image
								src="/bpc/colorPicker-dark.png"
								alt="Color picker screenshot"
								width={150}
								height={309}
								className="rounded-lg border border-foreground/10 shrink-0"
							/>
							<div className="flex-col gap-2 4xl:text-lg text-base font-light font-sans text-foreground/50">
								<p>
									Select a color for the event. The selected color will be used to highlight the event
									in the calendar. <br />
									<br />
								</p>
								<p>
									The color picker supports a wide range of colors, allowing users to choose a color
									that best fits their needs. It includes a saturation selector, a hue slider, a list
									of your saved colors, and a button to navigate to the settings page to manage your
									saved colors. <br />
									<br />
									The hue/saturation sliders are powered by{" "}
									<Link
										href="https://www.npmjs.com/package/@uiw/react-color-colorful"
										rel="noopener noreferrer"
										target="_blank"
										className="inline text-red hover:underline font-bold"
									>
										@uiw/react-color-colorful
										<ArrowUpRightIcon className="inline ml-1" weight="bold" />
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="w-full flex flex-col gap-6 lg:pl-6 py-4 lg:py-0 max-h-[30vh] lg:max-h-full overflow-y-auto">
						<Image
							src="/bpc/calendar-light.png"
							alt="Calendar screenshot light mode"
							width={1280}
							height={720}
							className="rounded-lg border border-foreground/10"
						/>
						<Image
							src="/bpc/calendar-dark.png"
							alt="Calendar screenshot dark mode"
							width={1280}
							height={720}
							className="rounded-lg border border-foreground/10"
						/>
					</div>
				</div>
			</CDialogContent>
		</CDialog>
	);
}
