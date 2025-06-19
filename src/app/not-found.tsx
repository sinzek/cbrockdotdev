import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex w-full max-w-4xl flex-col gap-20">
			<section className="flex flex-col gap-12">
				<h1 className="text-4xl font-semibold font-header">
					404 - Page Not Found
				</h1>
				<p className="text-base font-light">
					The page you are looking for does not exist. Please check
					the URL or{" "}
					<Link href="/" className="hover:underline text-blue">
						return to the homepage.
					</Link>
				</p>
			</section>
		</div>
	);
}
