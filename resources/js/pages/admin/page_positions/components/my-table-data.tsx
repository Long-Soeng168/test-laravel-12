import DeleteButton from '@/components/delete-button';
import MyImageGallery from '@/components/my-image-gallery';
import MyUpdateStatusButton from '@/components/my-update-status-button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { router, usePage } from '@inertiajs/react';
import { ArrowUpDown } from 'lucide-react';
import { useState } from 'react';
import EditButton from './edit-button';
import ViewButton from './view-button';

const MyTableData = () => {
    const { page_positions } = usePage().props;
    const queryParams = new URLSearchParams(window.location.search);
    const currentPath = window.location.pathname; // Get dynamic path

    const handleSort = (fieldName: string) => {
        if (fieldName === queryParams.get('sortBy')) {
            if (queryParams.get('sortDirection') === 'asc') {
                queryParams.set('sortDirection', 'desc');
            } else {
                queryParams.set('sortDirection', 'asc');
            }
        } else {
            queryParams.set('sortBy', fieldName);
            queryParams.set('sortDirection', 'asc');
        }
        router.get(currentPath + '?' + queryParams.toString());
    };

    const [selectedImages, setSelectedImages] = useState([]);
    const [isOpenViewImages, setIsOpenViewImages] = useState(false);

    return (
        <ScrollArea className="w-full rounded-md border">
            <MyImageGallery
                imagePath="/assets/images/page_positions/"
                selectedImages={selectedImages}
                isOpenViewImages={isOpenViewImages}
                setIsOpenViewImages={setIsOpenViewImages}
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">No</TableHead>
                        <TableHead className="text-left">Action</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead onClick={() => handleSort('code')}>
                            <span className="flex cursor-pointer items-center">
                                <ArrowUpDown size={16} /> Code
                            </span>
                        </TableHead>
                        <TableHead onClick={() => handleSort('title')}>
                            <span className="flex cursor-pointer items-center">
                                <ArrowUpDown size={16} /> Title
                            </span>
                        </TableHead>
                        <TableHead onClick={() => handleSort('title_kh')}>
                            <span className="flex cursor-pointer items-center">
                                <ArrowUpDown size={16} /> Title Khmer
                            </span>
                        </TableHead>
                        <TableHead onClick={() => handleSort('order_index')}>
                            <span className="flex cursor-pointer items-center">
                                <ArrowUpDown size={16} /> Order Index
                            </span>
                        </TableHead>
                        <TableHead>Parent</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Updated By</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {page_positions?.data?.map((item: any, index: number) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">
                                {page_positions?.current_page > 1 ? page_positions?.per_page * (page_positions?.current_page - 1) + index + 1 : index + 1}
                            </TableCell>
                            <TableCell>
                                <span className="flex h-full items-center justify-start">
                                    <ViewButton item={item} />
                                    <DeleteButton deletePath="/admin/page_positions/" id={item.id} />
                                    <EditButton item={item} />
                                </span>
                            </TableCell>
                            <TableCell>
                                {item.image ? (
                                    <button
                                        onClick={() => {
                                            setSelectedImages([item.image]);
                                            setIsOpenViewImages(true);
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={`/assets/images/page_positions/thumb/` + item.image}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="size-10 object-contain transition-all duration-300 hover:scale-150"
                                        />
                                    </button>
                                ) : (
                                    <img src={`/assets/icons/image-icon.png`} width={100} height={100} alt="" className="size-10 object-contain" />
                                )}
                            </TableCell>
                            <TableCell>{item.title || '---'}</TableCell>
                            <TableCell>{item.title_kh || '---'}</TableCell>
                            {/* <TableCell>{item.order_index || '---'}</TableCell> */}
                            <TableCell>
                                <MyUpdateStatusButton
                                    id={item.id}
                                    pathName="/admin/page_positions"
                                    currentStatus={item.status}
                                    statuses={['pending', 'active', 'inactive', 'private', 'public']}
                                />
                            </TableCell>
                            <TableCell>
                                {item.created_at
                                    ? new Date(item.created_at).toLocaleDateString('en-UK', {
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric',
                                      })
                                    : '---'}
                            </TableCell>
                            <TableCell>{item.created_by?.name || '---'}</TableCell>
                            <TableCell>
                                {item.updated_at
                                    ? new Date(item.updated_at).toLocaleDateString('en-UK', {
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric',
                                      })
                                    : '---'}
                            </TableCell>
                            <TableCell>{item.updated_by?.name || '---'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

export default MyTableData;
