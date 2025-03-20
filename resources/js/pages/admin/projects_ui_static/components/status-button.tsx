import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const StatusButton = ({ id, status }: { id: number; status: number }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <AlertDialogTrigger className="cursor-pointer" asChild>
                            <Button variant="outline" className={status == 1 ? 'text-green-600' : 'text-red-400'} size="sm">
                                {status == 1 ? <p>Public</p> : <p>Not-Public</p>}
                            </Button>
                        </AlertDialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Update Status</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure? Update ID : {id}</AlertDialogTitle>
                    <AlertDialogDescription>This action will update your record status.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="space-y-2 sm:space-y-0">
                    <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {}} disabled={isSubmitting} className="bg-destructive text-destructive-foreground">
                        {isSubmitting ? 'Updating...' : 'Not-Public'}
                    </AlertDialogAction>
                    <AlertDialogAction
                        onClick={() => {}}
                        disabled={isSubmitting}
                        autoFocus
                        className="bg-green-600 text-white ring-offset-2 focus:ring-2"
                    >
                        {isSubmitting ? 'Updating...' : 'Public'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default StatusButton;
