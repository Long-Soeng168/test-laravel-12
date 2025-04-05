import { FileManagerProvider } from './hooks/FileManagerContext';
import { MyFileManagerDialog } from './my-file-manager-dialog';

export default function MyFileManager({
    handleInsertMedia,
}: {
    handleInsertMedia?: (type: 'image' | 'file', url: string, fileName?: string) => void;
}) {
    return (
        <FileManagerProvider>
            <MyFileManagerDialog handleInsertMedia={handleInsertMedia} />
        </FileManagerProvider>
    );
}
