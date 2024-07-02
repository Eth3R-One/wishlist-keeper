export const dynamic = "force-dynamic";
import OGImage from "@/components/OGImage";
import { ImageResponse } from "next/og";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	try {
		var title = searchParams.get("title") ?? "Wishlist Keeper";
		if (title.includes("-")) {
			title = deSlugify(title);
		}
		const body =
			searchParams.get("body") ??
			"Keep your shopping desires organized with our multi-website wishlist platform. Easy to use and mobile-friendly. Start today!";

		return new ImageResponse(<OGImage title={title} body={body} />, {
			width: 1200,
			height: 600,
		});
	} catch (err) {
		return new ImageResponse(
			<OGImage title="Can not generate preview image" body={body} />,
			{
				width: 1200,
				height: 600,
			}
		);
	}
}
