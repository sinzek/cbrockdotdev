import { AnimationWrapper } from "@/components/animations";
import { GitHubLink } from "@/components/github-link";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/constants";
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
		<main className="relative flex w-full h-full items-center justify-center">
			<div className="absolute bottom-2 lg:bottom-4 lg:right-4">
				<GitHubLink />
			</div>
			<AnimationWrapper direction="up">
				<div className="flex flex-col items-center lg:items-start justify-center lg:bg-gradient-to-b lg:from-accent/40 lg:to-accent/15 lg:to-10% px-3 py-4 lg:py-5 lg:pl-5 lg:pr-3 rounded-4xl lg:border border-accent/40 border-t-accent lg:shadow-md lg:shadow-black">
					<div className="flex flex-row items-center gap-3 lg:gap-6 justify-start">
						<Image
							src="https://koslznrbedvicaugmxxi.supabase.co/storage/v1/object/public/photos/ChaseBrock.jpg"
							alt="A picture of me"
							width={146}
							height={146}
							className="object-cover object-top rounded-4xl lg:rounded-5xl border border-foreground/20 border-t-foreground/40 dual-shadow-dark size-[100px] lg:size-[150px]"
						/>
						<div className="flex flex-col text-left gap-1">
							<h1 className="text-[45px]/13 lg:text-[64px]/18 font-semibold font-metal bg-clip-text text-transparent bg-gradient-to-b from-white from-25% to-white/70 to-60%">
								Chase Brock
							</h1>
							<div className="flex flex-row items-center space-x-1 lg:space-x-2 text-red text-xs lg:text-base font-medium font-sans whitespace-nowrap">
								<span className="pl-2 pr-3 py-0.5 rounded-md bg-gradient-to-b from-red/25 to-red/15 to-30% inline-flex w-fit flex-row items-center border border-red/15 border-t-red/40">
									<CodeIcon
										weight="regular"
										size={20}
										className="inline mr-1 lg:mr-2 size-[15px] lg:size-[20px]"
									/>
									<h2>Full-Stack Developer</h2>
								</span>
								<span className="pl-2 pr-3 py-0.5 rounded-md bg-gradient-to-b from-red/25 to-red/15 to-30% inline-flex w-fit flex-row items-center border border-red/15 border-t-red/40">
									<GraduationCapIcon
										weight="fill"
										size={20}
										className="inline mr-1 lg:mr-2 size-[15px] lg:size-[20px]"
									/>
									<h2>Student</h2>
								</span>
							</div>
							<div className="flex flex-row items-center gap-2 text-foreground/75">
								<HouseLineIcon
									weight="fill"
									size={20}
									className="size-[15px] lg:size-[20px] mt-0.4 lg:mt-0"
								/>
								<p className="text-sm lg:text-lg font-header font-semibold">
									Houston, TX
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-row max-w-lg flex-wrap items-center justify-center lg:justify-start gap-2 mt-4 lg:mt-6">
						{links.map((link, index) => {
							const Icon = link.icon;
							return (
								<AnimationWrapper
									key={`nav-${link.name}`}
									delay={index * 0.1}
									className="inline-block"
								>
									<Link
										href={link.href}
										target={
											link.externalLink
												? "_blank"
												: "_self"
										}
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
												weight={"regular"}
												size={20}
												className="inline"
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
								</AnimationWrapper>
							);
						})}
					</div>
				</div>
			</AnimationWrapper>
		</main>
	);
}
