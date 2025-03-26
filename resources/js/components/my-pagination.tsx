import { Link, usePage } from '@inertiajs/react';

export function MyPagination() {
    const { projects } = usePage().props;
    const links = projects?.links || null;
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete('page');
    const queryString = new URLSearchParams(queryParams).toString();

    return (
        <div className="mt-4 flex max-w-[100vw] flex-wrap justify-center gap-2 p-2">
            {links?.map((item: any, index: number) => (
                <Link
                    key={item.label + index}
                    className={`rounded border px-4 py-2 whitespace-nowrap transition-all duration-300 ${item.active && 'bg-primary text-primary-foreground dark:hover:border-black hover:border-primary-foreground'} ${item.url == null ? 'text-foreground/40 cursor-not-allowed' : 'hover:border-primary hover:-translate-1.5 hover:shadow-[5px_5px_0px_0px] hover:shadow-primary dark:hover:shadow-white'}`}
                    href={item.url != null ? item.url + `&${queryString}` : ''}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                />
            ))}
        </div>
    );
}
