import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DeleteButton from './delete-button';
import EditButton from './edit-button';
import StatusButton from './status-button';
import ViewButton from './view-button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const MyTableData = ({ projects }: { projects: any }) => {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow className="whitespace-nowrap">
                        <TableHead className="w-[50px]">No</TableHead>
                        <TableHead className="text-left">Action</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Title Khmer</TableHead>
                        <TableHead>Order Index</TableHead>
                        <TableHead>Parent</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Updated By</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects?.data?.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>
                                <span className="flex h-full items-center justify-start">
                                    <ViewButton />
                                    <DeleteButton id={1} />
                                    <EditButton id={1} />
                                </span>
                            </TableCell>
                            <TableCell>
                                <img
                                    src="/assets/icons/no-image.png"
                                    width={100}
                                    height={100}
                                    alt="Category"
                                    className="aspect-square w-10 object-contain"
                                />
                            </TableCell>
                            <TableCell>{item.code}</TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.title_kh}</TableCell>
                            <TableCell>{item.order_index}</TableCell>
                            <TableCell>{item.parent_code || '---'}</TableCell>
                            <TableCell>
                                <StatusButton id={1} status={1} />
                            </TableCell>
                            <TableCell>
                                {new Date(item.created_at).toLocaleDateString('en-UK', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </TableCell>
                            <TableCell>{item.created_by?.name || '---'}</TableCell>
                            <TableCell>
                                {new Date(item.updated_at).toLocaleDateString('en-UK', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
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
