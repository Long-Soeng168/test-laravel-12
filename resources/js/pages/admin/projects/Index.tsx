import { MyPagination } from '@/components/my-pagination';
import { MyRefreshButton } from '@/components/my-refresh-button';
import { MySearchTableData } from '@/components/my-search-table-data';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import AddNewButton from './components/add-new-button';
import { MyFilterButton } from './components/my-filter-button';
import MyTableData from './components/my-table-data';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/admin/projects',
    },
];
const Index = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex max-w-[100vw] flex-wrap items-center justify-end gap-2">
                <div className="flex max-w-[100vw] flex-wrap items-center justify-start gap-2 max-lg:w-full lg:flex-1">
                    <MySearchTableData />
                    <MyFilterButton />
                    <MyRefreshButton />
                    <span className="flex-1"></span>
                    <AddNewButton />
                </div>
            </div>
            <div className="h-2" />
            <MyTableData />
            <MyPagination />
        </AppLayout>
    );
};

export default Index;
