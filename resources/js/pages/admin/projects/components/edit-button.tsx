'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';

const EditButton = ({ id }: { id: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="text-primary" size="icon" onClick={() => console.log('clicked')}>
                                <EditIcon />
                            </Button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Edit</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            {isOpen && <div className="fixed inset-0 z-40 bg-black/80" />}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="hidden"></DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EditButton;
