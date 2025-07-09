import { EyeIcon, ScrollIcon, WrenchIcon } from "@phosphor-icons/react";
import React from "react";
import Image from "next/image";
import { CDialog, CDialogContent, CDialogTrigger } from "@/components/c-dialog";

export function ScriptExpanded() {
	return (
		<CDialog>
			<CDialogTrigger variant="confirm">
				<EyeIcon className="mr-0.5 size-4" weight="fill" />
				Read more
			</CDialogTrigger>
			<CDialogContent>
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="col-span-2 flex flex-col gap-4 max-h-[71vh] overflow-y-auto pr-2 text-base 4xl:text-lg font-light font-sans text-foreground/75">
						<h2 className="text-3xl font-semibold font-header text-foreground mb-3">
							<ScrollIcon
								className="inline mr-2.5 mb-1"
								weight="fill"
							/>
							The script editor
						</h2>
						<p>
							The script editor is where the script of an idea is
							created and edited. It includes a variety of
							features to make writing scripts easier, such as
							autosaving, the ability to autofill an outline from
							a template, and a distraction-free mode that makes
							the script full-screen.
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong className="text-red font-bold">
									Markdown support:
								</strong>{" "}
								The script editor supports Markdown syntax,
								allowing users to format their scripts with
								headings, lists, and other elements easily.
							</li>
							<li>
								<strong className="text-red font-bold">
									Distraction-free mode:
								</strong>{" "}
								The script editor includes a distraction-free
								mode that makes the script full-screen.
							</li>
							<li>
								<strong className="text-red font-bold">
									Autosaving:
								</strong>{" "}
								The script editor automatically saves changes as
								users type, ensuring that no work is lost. This
								option can be toggled on and off in the
								settings.
							</li>
							<li>
								<strong className="text-red font-bold">
									Template autofill:
								</strong>{" "}
								Users can autofill the script from a template,
								which can include pre-defined sections and
								formatting.
							</li>
							<li>
								<strong className="text-red font-bold">
									Exporting:
								</strong>{" "}
								Users can export their scripts in various
								formats, such as PDF or Word, to share with
								others or for printing.
							</li>
							<li>
								<strong className="text-red font-bold">
									Rich text formatting:
								</strong>{" "}
								The script editor supports rich text formatting,
								allowing users to apply styles to make their
								scripts more readable. It includes the following
								options:
								<ul className="list-disc pl-6 space-y-1 mt-2">
									<li>Bold</li>
									<li>Italic</li>
									<li>Underline</li>
									<li>Strikethrough</li>
									<li>Highlight (multiple colors)</li>
									<li>Code blocks</li>
									<li>Blockquotes</li>
									<li>Headings (H1, H2, H3, H4, H5)</li>
									<li>
										Lists (bulleted, numbered, sub-lists,
										etc.)
									</li>
									<li>Links</li>
									<li>Images</li>
									<li>Text alignment</li>
								</ul>
							</li>
						</ul>
						<p className="mt-4 text-xl font-semibold text-foreground">
							<WrenchIcon
								weight="fill"
								className="inline mr-1 mb-0.5"
							/>
							WIP features
						</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong className="text-yellow font-bold">
									Table and Kanban views:
								</strong>{" "}
								The idea catalog will soon support table and
								kanban views to make switching from another
								service that supports these views easier.
							</li>
						</ul>
					</div>
					<div className="w-full flex flex-col gap-6 pl-2">
						<Image
							src="/bpc/scriptEditorShowcase-light.png"
							alt="Script editor screenshot light mode"
							width={1280}
							height={720}
							className="rounded-lg border border-foreground/10"
						/>
						<Image
							src="/bpc/scriptEditorShowcase-dark.png"
							alt="Script editor screenshot dark mode"
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
