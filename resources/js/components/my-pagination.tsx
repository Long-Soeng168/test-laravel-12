import { Link } from '@inertiajs/react';

export function MyPagination({ links }: { links: any }) {
    return (
        <div className="mt-4 p-2 space-x-1 flex justify-center flex-wrap">
            {links.map((item: any, index: number) => (
                <Link
                    key={item.label + index}
                    className={`px-4 py-2 rounded whitespace-nowrap hover:shadow-md ${item.active && 'border shadow-md'} ${item.url == null && 'text-foreground/50'}`}
                    href={item.url || '#'}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                />
            ))}
        </div>
    );
}
