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
						src="https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/ChaseBrock.jpg"
						alt="A picture of me"
						width={146}
						height={146}
						className="object-cover object-top rounded-5xl border border-foreground/20 border-t-foreground/40 dual-shadow-dark"
					/>
					<div className="flex flex-col text-left gap-1">
						<h1 className="text-[64px]/18 font-semibold font-metal bg-clip-text text-transparent bg-gradient-to-b from-white from-25% to-white/50 to-60%">
							{"Chase Brock".split("").map((char, index) => (
								<span
									key={`chase-brock-${index}`}
									className={cn(
										"transition-colors duration-200",
										char === " "
											? ""
											: "hover:text-red hover:drop-shadow-red/50 hover:drop-shadow-lg"
									)}
								>
									{char}
								</span>
							))}
						</h1>
						<div className="fle flex-row items-center space-x-2 text-red text-base font-medium font-sans">
							<span className="pl-2 pr-3 py-0.5 rounded-md bg-gradient-to-b from-red/25 to-red/15 to-30% inline-flex w-fit flex-row items-center border border-red/15 border-t-red/40">
								<CodeIcon
									weight="regular"
									size={20}
									className="inline mr-2"
								/>
								<h2>Full-Stack Developer</h2>
							</span>
							<span className="pl-2 pr-3 py-0.5 rounded-md bg-gradient-to-b from-red/25 to-red/15 to-30% inline-flex w-fit flex-row items-center border border-red/15 border-t-red/40">
								<GraduationCapIcon
									weight="fill"
									size={20}
									className="inline mr-2"
								/>
								<h2>Student</h2>
							</span>
						</div>
						<div className="flex flex-row items-center gap-2 text-foreground/75">
							<HouseLineIcon weight="fill" size={20} />
							<p className="text-lg font-header font-semibold">
								Houston, TX
							</p>
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
								<Button
									variant="default"
									className="dual-shadow-sm-dark"
								>
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
