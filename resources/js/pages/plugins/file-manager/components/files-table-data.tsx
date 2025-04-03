import { MyTooltipButton } from '@/components/my-tooltip-button';
import { FileIcon, ViewIcon } from 'lucide-react';
import { useState } from 'react';
import { useFileManager } from '../hooks/FileManagerContext';
import CopyFileUrl from './copy-file-url';
import DeleteFileButton from './delete-file-button';
import { Pagination } from './pagination';
import { ViewImage } from './view-image';

const FileTableData = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [isOpenViewImages, setIsOpenViewImages] = useState(false);
    const { fileTableData } = useFileManager();
    return (
        <div className="overflow-y-auto p-4 pt-2">
            <ViewImage selectedImage={selectedImage} open={isOpenViewImages} setOpen={setIsOpenViewImages} />
            <div className="mt-1 grid grid-cols-3 gap-4 lg:grid-cols-4">
                {/* PDF */}
                {fileTableData?.data?.map((item, i) => (
                    <div key={item.id}>
                        <div
                            key={i}
                            className="bg-muted group relative flex aspect-square max-w-full items-center justify-center overflow-hidden rounded-lg"
                        >
                            {item.mime_type.startsWith('image/') ? (
                                <button
                                    onClick={() => {
                                        setSelectedImage(item.name);
                                        setIsOpenViewImages(true);
                                    }}
                                >
                                    <img
                                        className="cursor-pointer transition-all duration-300 hover:scale-150"
                                        src={`/assets/files/file_manager/thumb/${item.name}`}
                                        alt=""
                                    />
                                </button>
                            ) : (
                                <span className="relative">
                                    <FileIcon size={100} className="stroke-blue-400 stroke-[0.8px]" />
                                    <p className="absolute bottom-5/12 left-2 translate-y-1/2 rounded border border-white bg-blue-400 px-2 text-center font-semibold text-white uppercase shadow-[3px_3px_0px_0px] shadow-blue-700/30 dark:shadow-blue-100/20">
                                        {item.extension}
                                    </p>
                                </span>
                            )}

                            <div className="absolute top-0 right-0 hidden gap-1 p-1 transition-all duration-300 group-hover:flex">
                                <DeleteFileButton key={item.id} deletePath="/api/file_manager/files/" id={item.id} />
                                <MyTooltipButton
                                    onClick={() => {
                                        if (item.mime_type.startsWith('image/')) {
                                            setSelectedImage(item.name);
                                            setIsOpenViewImages(true);
                                        } else {
                                            window.open(`/assets/files/file_manager/${item.name}`, '_blank');
                                        }
                                    }}
                                    size="icon"
                                    title="View File"
                                    className="bg-muted/60 h-8 w-8 p-0"
                                >
                                    <ViewIcon />
                                </MyTooltipButton>
                                <CopyFileUrl url={`/assets/files/file_manager/${item.name}`} />
                            </div>
                            {item.mime_type.startsWith('image/') && (
                                <div className="absolute bottom-1 left-1 gap-1 rounded-tr-md rounded-bl-md bg-white px-2 text-xs text-black transition-all duration-300 group-hover:flex">
                                    <span>{`${item.width} x ${item.height}`}</span>
                                </div>
                            )}
                        </div>
                        <p className="max-w-full overflow-hidden pt-1 text-center text-xs overflow-ellipsis">{item.name}</p>
                        <p className="py-1 text-center text-[10px]">{item.size} Kb</p>
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default FileTableData;
