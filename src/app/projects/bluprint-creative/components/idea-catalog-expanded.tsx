import { CDialog, CDialogContent, CDialogTrigger } from "@/components/c-dialog";
import { EyeIcon, LightbulbFilamentIcon, WrenchIcon } from "@phosphor-icons/react";
import Image from "next/image";

export function IdeaCatalogExpanded() {
	return (
		<CDialog>
			<CDialogTrigger variant="confirm">
				<EyeIcon className="mr-0.5 size-4" weight="duotone" />
				Read more
			</CDialogTrigger>
			<CDialogContent>
				<div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-2">
					<div className="w-full flex flex-col gap-6 lg:pr-6 lg:py-0 py-2 lg:max-h-full max-h-[30vh] overflow-y-auto">
						<Image
							src="/bpc/ideaGrid-dark.png"
							alt="Idea catalog screenshot dark mode"
							width={1280}
							height={720}
							className="rounded-lg border border-foreground/10"
						/>
						<Image
							src="/bpc/ideaGrid-light.png"
							alt="Idea catalog screenshot light mode"
							width={1280}
							height={720}
							className="rounded-lg border border-foreground/10"
						/>
					</div>
					<div className="flex flex-col gap-4 max-h-[60vh] lg:max-h-[71vh] overflow-y-auto lg:pl-6 pr-2 pb-12 lg:pb-0 text-base 4xl:text-lg font-light font-sans text-foreground/75">
						<h2 className="text-2xl lg:text-3xl font-semibold font-header text-foreground lg:mb-3 bg-background/90 sticky top-0 pb-2 backdrop-blur-[2px]">
							<LightbulbFilamentIcon className="inline mr-2.5 mb-1" weight="duotone" />
							The idea catalog
						</h2>
						<p>
							The idea catalog is meant to be the central hub for all of a user&apos;s ideas in the
							currently active collection. It has the following capabilities:
						</p>
						<ul className="list-disc pl-4.5 lg:pl-6 space-y-2">
							<li>
								<strong className="text-yellow font-bold">Filtering:</strong> Ideas can be filtered by
								their status, category, whether they are marked as archived, and whether the title
								includes the current search term entered into the search bar. These filters can be
								combined to narrow down the list of displayed ideas.
								<p className="text-sm text-foreground/50 mt-2">
									Here&apos;s an example of search filtering:
								</p>
								<Image
									src="/bpc/searchFiltering-dark.png"
									alt="Search filtering screenshot dark mode"
									width={685}
									height={442}
									className="w-full lg:max-w-[560px] mt-2 rounded-md lg:w-3/4"
								/>
							</li>
							<li>
								<strong className="text-yellow font-bold">Sorting:</strong> Ideas can be sorted by the
								date they were last updated (by default), the date they were created, or by their title,
								all in both ascending and descending order. Combined with filters, this allows users to
								quickly find the ideas they are looking for.
							</li>
							<li>
								<strong className="text-yellow font-bold">Bulk actions:</strong> Multiple ideas can be
								selected at once, and bulk actions can be performed on them. These include adding a
								specified category or status, archiving, or deleting them.
								<iframe
									width="560"
									height="315"
									className="mt-2 rounded-md w-full lg:w-3/4"
									src="https://www.youtube-nocookie.com/embed/MZcfGmeLj_Y?si=F6NbqbK_Ug4pXvUV"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								/>
							</li>
							<li>
								<strong className="text-yellow font-bold">Categories:</strong> Categories are displayed
								at the top of the catalog, and selecting one will show only the ideas within that
								category. This allows users to quickly find ideas related to a specific topic or theme.
							</li>
							<li>
								<strong className="text-yellow font-bold">Quick-edit:</strong> When you hover over an
								idea in the grid view, three dots will appear on the top right corner. Clicking on these
								dots will open a quick-edit menu of of the idea&apos;s attributes that are changed most
								frequently (according to user/client feedback). At the top right of the quick edit menu,
								there is a button to open the full idea as well as one to pin the idea to the dashboard.
								<Image
									src="/bpc/quickEdit-dark.png"
									alt="Quick edit menu dark mode"
									width={685}
									height={442}
									className="w-full lg:max-w-[560px] mt-2 rounded-md lg:w-3/4"
								/>
							</li>
							<li>
								<strong className="text-yellow font-bold">Pinning:</strong> Ideas can be pinned to the
								&quot;Pinned ideas&quot; section of the dashboard for quick access and easy separation.
							</li>
						</ul>
						<p className="mt-4 text-xl font-semibold text-foreground">
							<WrenchIcon weight="duotone" className="inline mr-1 mb-0.5" />
							WIP features
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong className="text-yellow font-bold">Table and Kanban views:</strong> The idea
								catalog will soon support table and kanban views to make switching from another service
								that supports these views easier.
							</li>
						</ul>
					</div>
				</div>
			</CDialogContent>
		</CDialog>
	);
}
