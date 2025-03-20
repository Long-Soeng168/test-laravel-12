import { MyPagination } from '@/components/my-pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import DeleteButton from './delete-button';
import EditButton from './edit-button';
import StatusButton from './status-button';
import ViewButton from './view-button';

const MyTableData = () => {
    const category: any = {};

    return (
        <>
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
                    <TableRow>
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
                        <TableCell>CAT001</TableCell>
                        <TableCell>Sample Category</TableCell>
                        <TableCell>ប្រភេទគំរូ</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>PARENT001</TableCell>
                        <TableCell>
                            <StatusButton id={1} status={1} />
                        </TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                        <TableCell>---</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <MyPagination />
        </>
    );
};

export default MyTableData;
