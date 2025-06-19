import { notFound } from "next/navigation";

export default function SecretPage() {
	// since this page is rendered on the server, we can safely use environment variables

	const pin = process.env.CHASE_PIN;

	if (!pin) {
		notFound();
	}

	return (
		<div className="flex w-full max-w-4xl flex-col gap-20">
			<section className="flex flex-col gap-12">
				<h1 className="text-4xl font-semibold font-header">Sup</h1>
				<p className="text-base font-light">
					Welcome to the admin dashboard. Here you can manage your
					portfolio, projects, and other settings.
				</p>
			</section>
		</div>
	);
}
