'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FilterIcon } from 'lucide-react';
import { useState } from 'react';
import MyFilter from './my-filter';

export function MyFilterButton() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button type="submit" variant="outline" size="icon" className="p-5">
                    <FilterIcon />
                </Button>
            </DialogTrigger>
            {isOpen && <div className="fixed inset-0 z-40 bg-black/80" />}
            {/* Custom dark background */}
            <DialogContent className="z-50">
                <DialogHeader>
                    <DialogTitle className="hidden"></DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                    <MyFilter />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
