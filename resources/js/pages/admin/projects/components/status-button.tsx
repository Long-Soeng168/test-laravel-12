import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const StatusButton = ({ id, status }: { id: number; status: string }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger className="cursor-pointer" asChild>
                            <Button
                                variant="outline"
                                className={`${status == 'active' && 'text-green-600'} ${status == 'inactive' && 'text-red-400'} ${status == 'pending' && 'text-yellow-600'} `}
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
                    <DialogTitle>Are you sure? Update ID : {id}</DialogTitle>
                    <DialogDescription>This action will update your record status.</DialogDescription>
                </DialogHeader>
                <DialogFooter className="space-y-2 sm:space-y-0"> 
                    <Button
                        onClick={() => {}}
                        disabled={isSubmitting}
                        variant='warning'
                        className="focus:ring-offset-2 focus:ring-2 ring-primary"
                    >
                        {isSubmitting ? 'Updating...' : 'Pending'}
                    </Button>
                    <Button
                        onClick={() => {}}
                        disabled={isSubmitting}
                        variant='destructive'
                        className="focus:ring-offset-2 focus:ring-2 ring-primary"
                    >
                        {isSubmitting ? 'Updating...' : 'Inactive'}
                    </Button>
                    <Button
                        onClick={() => {}}
                        disabled={isSubmitting}
                        variant='success'
                        autoFocus
                        className="focus:ring-offset-2 focus:ring-2 ring-primary"
                    >
                        {isSubmitting ? 'Updating...' : 'Active'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default StatusButton;
