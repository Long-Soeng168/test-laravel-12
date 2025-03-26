import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, XIcon } from 'lucide-react';
import { useState } from 'react';
import Create from '../Create';

const AddNewButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog modal={false} open={isOpen}>
            <DialogTrigger asChild>
                <span className="border-primary rounded-xl border p-1 transition-all duration-300 hover:rounded-lg hover:border-white hover:p-0 hover:m-1 ">
                    <Button onClick={() => setIsOpen(true)}>
                        <Plus />
                        Add New
                    </Button>
                </span>
            </DialogTrigger>
            {isOpen && <div className="fixed inset-0 z-40 bg-black/80" />}
            {/* Custom dark background */}
            <DialogContent className="z-50">
                <Button className={`absolute top-4 right-4 z-50`} variant={`outline`} size={`icon`} onClick={() => setIsOpen(false)}>
                    <XIcon />
                </Button>

                <DialogHeader>
                    <DialogTitle>Create Projects</DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                    <Create />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddNewButton;
