import { getAllFilesDataInFolders } from "@/data/drive-api";
import CompleteContent from "@/module/complete";
import DetailComplete, { CardFile } from "@/module/detail-complete";

export default async function DetailFolder({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    console.log(slug);
    const allFIle = await getAllFilesDataInFolders(slug)
    console.log(allFIle);
    const fileToSend = allFIle?.map((item) => ({
        id: item.id,
        name: item.name,
        mimeType: item.mimeType,
        thumbnailLink: item.thumbnailLink,
        webContentLink: item.webContentLink,
    }));
    console.log(fileToSend);
    return (
        <>
            <DetailComplete file={fileToSend as CardFile[]} />
        </>
    )
}