import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export function GitHubLink() {
	return (
		<Link
			href="https://github.com/sinzek/cbrockdotdev"
			target="_blank"
			rel="noopener noreferrer"
			className="hover:text-foreground text-foreground/75 group transition-all"
		>
			<div className="flex flex-row items-center lg:gap-2 gap-1.5">
				<Image
					src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
					alt="GitHub Logo White"
					width={64}
					height={64}
					className="size-6 lg:size-7 opacity-75 group-hover:opacity-100 transition-all"
				/>
				<span className="text-base lg:text-lg">source code</span>
				<ArrowUpRightIcon className=" size-4 mt-0.5" />
			</div>
		</Link>
	);
}
