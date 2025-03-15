'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export function MySearchTableData() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 rounded-lg border p-1">
            <Input type="search" className="border-none shadow-none" placeholder="Search..." />
            <Button variant="outline" type="submit">
                <SearchIcon className="[&_svg]:size-2" /> Search
            </Button>
        </div>
    );
}
