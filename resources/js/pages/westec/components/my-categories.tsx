import { AlignLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const categories = [
    {
        name: 'Security & Safety Solutions',
        count: 102,
        icon: '🔒',
        subcategories: [
            { name: 'Surveillance Cameras', count: 24 },
            { name: 'Fire Safety', count: 7 },
            { name: 'Alarm Systems', count: 32 },
        ],
    },
    {
        name: 'Smart Home & Office Solutions',
        count: 78,
        icon: '🏠',
        subcategories: [
            { name: 'Smart Lighting', count: 18 },
            { name: 'Automated Doors', count: 12 },
        ],
    },
    {
        name: 'Commercial & Residential Equipments',
        count: 65,
        icon: '🏢',
        subcategories: [
            { name: 'Air Conditioning', count: 20 },
            { name: 'Office Chairs', count: 10 },
        ],
    },
    {
        name: 'IT Solutions',
        count: 91,
        icon: '💻',
        subcategories: [
            { name: 'Networking', count: 25 },
            { name: 'Data Storage', count: 14 },
        ],
    },
];

const MyCategories = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-300 bg-white text-black shadow-lg">
            {/* Header */}
            <button className="flex w-full items-center justify-between border-b bg-gray-100 p-4 text-lg font-proxima-nova-regular">
                <span className="flex items-center gap-2">
                    <AlignLeft className="h-5 w-5 text-gray-700" /> All Solutions
                </span>
            </button>

            {/* Category List */}
            <div >
                {categories.map((category) => (
                    <div key={category.name} className="mb-2">
                        <button
                            className={`flex w-full items-start gap-4 justify-between px-4 py-3 transition-all duration-200 ${
                                openCategory === category.name ? 'background text-white' : 'hover:bg-gray-200'
                            }`}
                            onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                        >
                            <span className="font-proxima-nova-regular flex items-start text-start gap-3 text-[12px]">
                                <span className="text-base">{category.icon}</span> {category.name}
                                <span className="font-proxima-nova-regular text-[12px]">({category.count})</span>
                            </span>

                            {category.subcategories &&
                                (openCategory === category.name ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                        </button>

                        {/* Subcategories */}
                        {category.subcategories && openCategory === category.name && (
                            <div className="mt-2 ml-6 space-y-2 border-l border-gray-300 pl-4">
                                {category.subcategories.map((sub) => (
                                    <a key={sub.name} href="#" className="block py-2 font-proxima-nova-regular text-[12px] transition-all hover:text-blue-600">
                                        • {sub.name} ({sub.count})
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCategories;
