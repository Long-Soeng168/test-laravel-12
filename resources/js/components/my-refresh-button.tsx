import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { RotateCw } from 'lucide-react';

export function MyRefreshButton() {
    const currentPath = window.location.pathname;

    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button type="submit" variant="outline" size="icon" className="relative p-5">
                        <a href={currentPath}>
                            <RotateCw />
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>Refresh Page</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
