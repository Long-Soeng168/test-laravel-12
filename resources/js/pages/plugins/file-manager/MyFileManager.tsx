import { FileManagerProvider } from './hooks/FileManagerContext';
import { MyFileManagerDialog } from './my-file-manager-dialog';

export default function MyFileManager({className}: { className?: string }) {
    return (
        <div className={`${className}`}>
            <FileManagerProvider>
                    <MyFileManagerDialog />
            </FileManagerProvider>
        </div>
    );
}
