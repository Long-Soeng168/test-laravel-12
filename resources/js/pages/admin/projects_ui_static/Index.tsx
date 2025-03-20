import AppLayout from '@/layouts/app-layout';
import AddNewButton from './components/add-new-button';
import { MyFilterButton } from './components/my-filter-button';
import { MySearchTableData } from './components/my-search-table-data';
import MyTableData from './components/my-table-data';

const Index = () => {
    return (
        <AppLayout>
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center justify-between gap-2">
                    <MySearchTableData />
                    <MyFilterButton />
                </div>
                <AddNewButton />
            </div>
            <div>
                <MyTableData />
            </div>
        </AppLayout>
    );
};

export default Index;
