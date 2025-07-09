import {
	CirclesThreeIcon,
	EyeIcon,
	LightbulbFilamentIcon,
	WrenchIcon,
} from "@phosphor-icons/react";
import React from "react";
import Image from "next/image";
import { CDialog, CDialogContent, CDialogTrigger } from "@/components/c-dialog";

export function IdeaEditorExpanded() {
	return (
		<CDialog>
			<CDialogTrigger variant="confirm">
				<EyeIcon className="mr-0.5 size-4" weight="fill" />
				Read more
			</CDialogTrigger>
			<CDialogContent>
				<div className="grid grid-cols-1 lg:grid-cols-5">
					<div className="w-full flex flex-col gap-6 pr-6 col-span-2">
						<Image
							src="/bpc/ideaEditor-dark.png"
							alt="Idea editor screenshot dark mode"
							width={1178}
							height={853}
							className="rounded-lg border border-foreground/10"
						/>
						<Image
							src="/bpc/ideaEditor-light.png"
							alt="Idea editor screenshot light mode"
							width={1178}
							height={853}
							className="rounded-lg border border-foreground/10"
						/>
					</div>
					<div className="col-span-3 flex flex-col gap-4 max-h-[75vh] overflow-y-auto pl-6 pr-2 text-base 4xl:text-lg font-light font-sans text-foreground/75">
						<h2 className="text-3xl font-semibold font-header text-foreground mb-3">
							<LightbulbFilamentIcon
								className="inline mr-2.5 mb-1"
								weight="fill"
							/>
							The idea editor
						</h2>
						<p>
							The idea editor is where all of the fields of an
							idea are viewed and edited. It also includes things
							like exporting the idea&apos;s script, viewing a
							thumbnail on a replica of the YouTube homepage, and
							more.
						</p>
						<p>
							The editor includes a bunch of useful QOL features
							that make it easy to work with ideas, such as
							autosaving, the ability to autofill an idea&apos;s
							fields (including the script and checklist items)
							from a template, and so much more.
						</p>
						<h3 className="text-xl font-semibold font-header text-foreground mt-6">
							The overview section
						</h3>
						<p>
							The overview section has the idea&apos;s primary
							fields:
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong className="font-bold text-red">
									Title:
								</strong>{" "}
								The title of the idea, which is used as the
								video&apos;s title as well as how it is
								identified in the app.
							</li>
							<li>
								<strong className="font-bold text-red">
									Description:
								</strong>{" "}
								The description of the idea, which can be used
								in a bunch of different ways. I&apos;ve found
								that users often use this to write out some
								rough notes, but it can also be used as the
								literal YouTube description or bio for the video
								when it is published.
							</li>
							<li>
								<strong className="font-bold text-red">
									Category:
								</strong>{" "}
								The category or folder that the idea is a part
								of. This can be used to group ideas together
								based on a specific theme, topic, or type of
								content. It can also be used to filter ideas in
								the idea catalog. This field supports as many
								categories as a user might want.
							</li>
							<li>
								<strong className="font-bold text-red">
									Status:
								</strong>{" "}
								Much like with categories, multiple statuses can
								be added to an idea. This is meant to be used to
								track the progress of an idea as it is developed
								/ worked on. For example, an idea might start as
								&apos;Planning&apos; or &apos;Draft&apos;, then
								later move to &apos;Filming&apos; or
								&apos;Scripting&apos;. This field can also be
								used to filter ideas in the idea catalog.
							</li>
							<li>
								<strong className="font-bold text-red">
									Filming date(s):
								</strong>{" "}
								The filming date(s) of the idea. This field is
								explained in depth in the content calendar popup
								in the Features section.
							</li>
							<li>
								<strong className="font-bold text-red">
									Release date:
								</strong>{" "}
								The release or publishing date of the idea,
								which includes a user&apos;s local time zone.
								This field is also explained in depth in the
								content calendar popup in the Features section.
							</li>
							<li>
								<strong className="font-bold text-red">
									Release platforms:
								</strong>{" "}
								The platforms that the idea are planned to be
								released or published onto. As of right now, the
								list includes all major social media platforms,
								but the list grows with user feedback.
							</li>
							<li>
								<strong className="font-bold text-red">
									Show release platform on calendar?:
								</strong>{" "}
								A toggle that determines whether or not the
								release platform&apos;s icon is shown on the
								release date event in the content calendar. This
								helps users visually distinguish between
								different calendar events at a glance. When more
								than one platform is selected, a{" "}
								<CirclesThreeIcon
									className="inline size-4 text-foreground mb-1"
									weight="fill"
								/>{" "}
								icon is shown, indicating that there are more
								than one platforms selected.
							</li>
						</ul>
						<h3 className="text-xl font-semibold font-header text-foreground mt-6">
							The thumbnails section
						</h3>
						<Image
							src="/bpc/thumbnailEditor-light.png"
							alt="Thumbnail editor screenshot light mode"
							width={685}
							height={442}
							className="max-w-[400px] mt-2 rounded-md"
						/>
						<p>
							The thumbnails section is where users can upload,
							share, and preview their thumbnails. It includes a
							few different features:
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong className="font-bold text-red">
									Fullscreen:
								</strong>{" "}
								Preview the thumbnail in full screen mode
								(includes image dimensions).
							</li>
							<li>
								<strong className="font-bold text-red">
									YouTube Preview:
								</strong>{" "}
								Preview the thumbnail on a replica of the
								YouTube homepage, which includes a video title
								and description. This is useful for seeing how
								the thumbnail will look in the context of a
								YouTube video.
							</li>
							<Image
								src="/bpc/youtubePreview-light.png"
								alt="YouTube preview screenshot light mode"
								width={685}
								height={442}
								className="max-w-[560px] mt-2 rounded-md"
							/>
							<li>
								<strong className="font-bold text-red">
									Share:
								</strong>{" "}
								Copy a shareable link to the thumbnail without
								the hassle of downloading it first.
							</li>
						</ul>
						<h3 className="text-xl font-semibold font-header text-yellow mt-6">
							The custom fields section (WIP)
						</h3>
						<p>
							The custom fields section is where users can define
							their own fields for ideas, allowing for greater
							flexibility and customization.
						</p>
						<h3 className="text-xl font-semibold font-header text-foreground mt-6">
							The checklist section
						</h3>
						<p>
							A checklist with drag and drop reordering that can
							be used to track the progress of an idea. This is
							especially useful for ideas that have a lot of steps
							or tasks that need to be completed before they can
							be considered finished.
						</p>
						<p className="text-foreground font-bold">
							<WrenchIcon
								className="inline mr-1 mb-0.5"
								weight="fill"
							/>
							WIP features
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong className="font-bold text-yellow">
									Due dates:
								</strong>{" "}
								Users will soon be able to set due dates for
								checklist items, which will be displayed in the
								content calendar.
							</li>
							<li>
								<strong className="font-bold text-yellow">
									Task assignment:
								</strong>{" "}
								With the release of team collaboration features,
								team members will be able to assign tasks to
								each other, making it easier to track who is
								responsible for what.
							</li>
						</ul>
						<h3 className="text-xl font-semibold font-header text-foreground mt-6">
							The script section
						</h3>
						<p>
							The script section features a full-fledged rich
							script editor, word and character counts,
							autosaving, and more. You can read more about it in
							the Script Editor feature section of the features
							list.
						</p>
						<p>
							On top of these features, users can also export a
							script to a txt, docx, or pdf file.
						</p>
					</div>
				</div>
			</CDialogContent>
		</CDialog>
	);
}
