import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useForm } from '@inertiajs/react';
import { LoaderIcon } from 'lucide-react';
import { useState } from 'react';

const StatusButton = ({ id, status }: { id: number; status: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { post, data, processing, errors } = useForm();
    function handleChangeStatus(status: string) {
        data.status = status;
        post('/admin/projects/' + id + '/update_status', {
            preserveScroll: true,
        });
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger className="cursor-pointer" asChild>
                            <Button
                                variant="outline"
                                className={`${status == 'active' && 'text-green-600'} ${status == 'inactive' && 'text-red-400'} ${status == 'pending' && 'text-yellow-600'} capitalize`}
                                size="sm"
                            >
                                {status}
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
                    <DialogDescription>This action will update your record status.</DialogDescription>
                    {errors && <span className="text-destructive">{errors.status}</span>}
                </DialogHeader>
                <DialogFooter key={status} className="space-y-2 sm:space-y-0">
                    {processing && (
                        <Button variant="ghost" className="cursor-auto hover:bg-transparent">
                            <span className="size-6 animate-spin">
                                <LoaderIcon />
                            </span>
                            Updating...
                        </Button>
                    )}
                    <Button
                        onClick={() => handleChangeStatus('pending')}
                        disabled={processing}
                        variant="warning"
                        autoFocus={status === 'pending'}
                        className="ring-primary m-0 focus:ring-2 focus:ring-offset-2"
                    >
                        Pending
                    </Button>
                    <Button
                        onClick={() => handleChangeStatus('inactive')}
                        disabled={processing}
                        variant="destructive"
                        autoFocus={status === 'inactive'}
                        className="ring-primary m-0 focus:ring-2 focus:ring-offset-2"
                    >
                        Inactive
                    </Button>
                    <Button
                        onClick={() => handleChangeStatus('active')}
                        disabled={processing}
                        variant="success"
                        autoFocus={status === 'active'}
                        className="ring-primary m-0 focus:ring-2 focus:ring-offset-2"
                    >
                        Active
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default StatusButton;
