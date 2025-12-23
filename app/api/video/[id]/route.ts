import { drive } from "@/data/drive-api";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ WAJIB

  const driveRes = await drive.files.get(
    {
      fileId: id,
      alt: "media",
    },
    {
      responseType: "stream",
    }
  );

  return new NextResponse(driveRes.data as any, {
    headers: {
      "Content-Type": "video/mp4",
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
