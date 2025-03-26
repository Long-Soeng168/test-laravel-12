import { MyPagination } from '@/components/my-pagination';
import AppLayout from '@/layouts/app-layout';
import AddNewButton from './components/add-new-button';
import { MyFilterButton } from './components/my-filter-button';
import MyTableData from './components/my-table-data';
import { MyRefreshButton } from '@/components/my-refresh-button';
import { BreadcrumbItem } from '@/types';
import { MySearchTableData } from '@/components/my-search-table-data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/admin/projects',
    },
];
const Index = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex max-w-[100vw] flex-wrap items-center justify-between gap-2">
                <div className="flex max-lg:w-full lg:flex-1 items-center justify-start gap-2 max-w-[100vw] flex-wrap">
                    <MySearchTableData />
                    <MyFilterButton />
                    <MyRefreshButton />
                </div>
                <AddNewButton />
            </div>
            <div className="h-2" />
            <MyTableData />
            <MyPagination />
        </AppLayout>
    );
};

export default Index;
