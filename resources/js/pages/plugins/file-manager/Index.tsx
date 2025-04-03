import AppLayout from '@/layouts/app-layout';
import { FileManagerProvider } from './hooks/FileManagerContext';
import { MyFileManagerDialog } from './my-file-manager-dialog';

export default function Page() {
    return (
        <AppLayout>
            <FileManagerProvider>
                <div className="flex h-svh items-center justify-center">
                    <MyFileManagerDialog />
                </div>
            </FileManagerProvider>
        </AppLayout>
    );
}
