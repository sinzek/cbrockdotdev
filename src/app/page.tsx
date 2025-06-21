import { Button } from "@/components/ui/button";
import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
	CodeIcon,
	GraduationCapIcon,
	HouseLineIcon,
	ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex w-full h-full items-center justify-center">
			<div className="flex flex-col">
				<div className="flex flex-row items-center gap-6 justify-start">
					<Image
						src="https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos//ChaseBrock.jpg"
						alt="A picture of me"
						width={146}
						height={146}
						className="object-cover object-top rounded-5xl"
					/>
					<div className="flex flex-col text-left gap-1">
						<h1 className="text-[64px]/18 font-semibold font-metal">
							{"Chase Brock".split("").map((char, index) => (
								<span
									key={`chase-brock-${index}`}
									className={cn(
										"transition-colors duration-200",
										char === " " ? "" : "hover:text-red"
									)}
								>
									{char}
								</span>
							))}
						</h1>
						<div className="fle flex-row items-center">
							<span className="pl-2 pr-3 py-0.5 rounded-md text-foreground/75 bg-foreground/15 inline-flex w-fit flex-row items-center">
								<CodeIcon
									weight="bold"
									size={20}
									className="inline mr-2"
								/>
								<h2 className="text-base font-semibold font-sans">
									Full-Stack Developer
								</h2>
							</span>
							<span className="ml-2 pl-2 pr-3 py-0.5 text-foreground/75 rounded-md bg-foreground/15 inline-flex w-fit flex-row items-center">
								<GraduationCapIcon
									weight="fill"
									size={20}
									className="inline mr-2"
								/>
								<h2 className="text-base font-semibold font-sans">
									Student
								</h2>
							</span>
						</div>
						<div className="flex flex-row items-center gap-2">
							<HouseLineIcon weight="fill" size={20} />
							<p className="text-lg font-sans">Houston, TX</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row max-w-lg flex-wrap items-center justify-start gap-2 mt-6">
					{links.map((link) => {
						const Icon = link.icon;
						return (
							<Link
								href={link.href}
								key={`nav-${link.name}`}
								target={link.externalLink ? "_blank" : "_self"}
								rel={
									link.externalLink
										? "noopener noreferrer"
										: undefined
								}
							>
								<Button>
									<Icon
										weight={"fill"}
										size={20}
										className="hidden group-hover:inline"
									/>
									<Icon
										weight={"regular"}
										size={20}
										className="inline group-hover:hidden"
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
						);
					})}
				</div>
			</div>
		</main>
	);
}
