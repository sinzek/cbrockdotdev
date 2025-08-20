import { AnimationWrapper } from "@/components/animations";
import Projects from "@/components/projects";
import { Technologies } from "@/components/technologies";

export default async function ProjectsPage() {
	return (
		<div className="flex w-full max-w-4xl flex-col gap-14 lg:gap-20 pb-24 lg:px-0 px-5 lg:pt-0 pt-10">
			<AnimationWrapper direction="right">
				<section className="flex flex-col lg:gap-12 gap-8">
					<h1 className="text-3xl lg:text-4xl font-semibold font-header text-pretty">
						I&apos;ve built and helped scale{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-red to-yellow">
							full-stack applications
						</span>{" "}
						using a variety of technologies.
					</h1>
					<Technologies />
				</section>
			</AnimationWrapper>
			<AnimationWrapper direction="right" delay={0.3}>
				<section className="flex flex-col lg:gap-12 gap-8">
					<h2 className="text-3xl lg:text-4xl font-semibold font-header">
						Here are some of the things I&apos;ve built so far:
					</h2>
					<AnimationWrapper delay={0.6} direction="right">
						<Projects />
					</AnimationWrapper>
				</section>
			</AnimationWrapper>
		</div>
	);
}
