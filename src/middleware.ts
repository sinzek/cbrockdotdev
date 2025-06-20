import { NextResponse, type NextRequest } from "next/server";

// super duper simple basic auth middleware for me :3
export function middleware(request: NextRequest) {
	const basicAuth = request.headers.get("authorization");

	if (basicAuth) {
		const authValue = basicAuth.split(" ")[1];
		const [user, pwd] = atob(authValue).split(":");

		if (
			user === process.env.CHASE_USERNAME &&
			pwd === process.env.CHASE_PIN
		) {
			return NextResponse.next();
		}
	}

	return new NextResponse("Auth required", {
		status: 401,
		headers: {
			"WWW-Authenticate": "Basic realm='Secure Area'",
		},
	});
}

export const config = {
	matcher: "/secret/:path*",
};
