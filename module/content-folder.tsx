import Folder from "@/components/folder";

export type ContentFolderProps = {
    folderName: string;
    folderId: string;
    contents: Array<{
        id: string;
        name: string;
        mimeType: string;
        thumbnailLink?: string;
        webContentLink?: string;
    }>;
}
export default function ContentFolder(folder: ContentFolderProps[]){
    folder = Array.isArray(folder) ? folder : [];
    return (
        <>
            {folder.map((item) => (
                <Folder key={item.folderName} title={item.folderName} href={item.folderId}  />
            ))}
        </>
    )
}