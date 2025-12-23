import { google } from "googleapis";
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
});

export const drive = google.drive({
  version: "v3",
  auth,
});

export async function getDriveFolders() {
  const res = await drive.files.list({
    q: "mimeType = 'application/vnd.google-apps.folder' and trashed = false",
    fields: "files(id, name)",
  });

  return res.data.files;
}
export async function getFolderContents(folderId: string) {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: "files(id, name, mimeType, thumbnailLink, webContentLink)",
    pageSize: 5,
    
  });
    return res.data.files;
}

export async function getAllFilesDataInFolders(folderId:string){
     const res = await drive.files.list({
        q: `'${folderId}' in parents and trashed = false`,
        fields: "files(id, name, mimeType, thumbnailLink, webContentLink)"        
    });
    return res.data.files;
}