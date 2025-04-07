import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useForm } from '@inertiajs/react';
import { LoaderIcon } from 'lucide-react';
import { useState } from 'react';

interface UpdateStatusButtonProps {
    id: number;
    pathName: string;
    currentStatus: string;
    statuses: string[];
}

const statusVariants: Record<string, string> = {
    active: 'text-white hover:bg-green-600/85 bg-green-600',
    inactive: 'text-white hover:bg-red-400/85 bg-red-400',
    pending: 'text-white hover:bg-yellow-600/85 bg-yellow-600',
    public: 'text-white hover:bg-blue-500/85 bg-blue-500',
    private: 'text-white hover:bg-gray-500/85 bg-gray-500',
};
const statusVariantsText: Record<string, string> = {
    active: 'text-green-600',
    inactive: 'text-red-400',
    pending: 'text-yellow-600',
    public: 'text-blue-500',
    private: 'text-gray-500',
};

const MyUpdateStatusButton = ({ id, pathName, currentStatus, statuses }: UpdateStatusButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { post, data, processing, errors } = useForm();

    const handleChangeStatus = (status: string) => {
        data.status = status;
        post(`${pathName}/${id}/update_status`, { preserveScroll: true });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger className="cursor-pointer" asChild>
                            <Button
                                variant="outline"
                                className={`${statusVariantsText[currentStatus]} capitalize`}
                                size="sm"
                            >
                                {currentStatus}
                            </Button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                        <p>Update Status</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>This action will update the record status.</DialogDescription>
                    {errors.status && <span className="text-destructive">{errors.status}</span>}
                </DialogHeader>
                <DialogFooter className="space-y-2 sm:space-y-0" key={currentStatus}>
                    {processing && (
                        <Button variant="ghost" className="cursor-auto hover:bg-transparent">
                            <span className="size-6 animate-spin">
                                <LoaderIcon />
                            </span>
                            Updating...
                        </Button>
                    )}

                    {statuses.map((status) => (
                        <Button
                            key={status}
                            onClick={() => handleChangeStatus(status)}
                            disabled={processing}
                            autoFocus={currentStatus === status}
                            className={`${statusVariants[status] || 'text-gray-600'} ring-primary m-0 focus:ring-2 focus:ring-offset-2`}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Button>
                    ))}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default MyUpdateStatusButton;
