import { MyPagination } from '@/components/my-pagination';
import AppLayout from '@/layouts/app-layout';
import AddNewButton from './components/add-new-button';
import { MyFilterButton } from './components/my-filter-button';
import { MySearchTableData } from './components/my-search-table-data';
import MyTableData from './components/my-table-data';

const Index = ({ projects }: { projects: any }) => {
    return (
        <AppLayout>
            <div className="flex max-w-[100vw] flex-wrap items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-2">
                    <MySearchTableData />
                    <MyFilterButton />
                </div>
                <AddNewButton />
            </div>
            <div className="h-2" />
            <MyTableData projects={projects} />
            <div className='max-w-[100vw] text-center'>
                <MyPagination links={projects.links} />
            </div>
        </AppLayout>
    );
};

export default Index;
