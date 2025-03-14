import { CalendarCheck } from "lucide-react";

const MyBlog = () => {
    const image = [
        {
            title: 'Web Development',
            short: 'Tech Products That Makes Its Easier to Stay at Home',
            des: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
            src: 'assets/images/image4.png',
            post:'16 Nov 2020',
            id: 1,
        },
        {
            title: 'It Services',
            short: 'Tech Products That Makes Its Easier to Stay at Home',
            des: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
            src: 'assets/images/image1.png',
            post:' 20 December 2020',
            id: 2,
        },
        {
            title: 'Artifical Intelligence',
            short: 'Tech Products That Makes Its Easier to Stay at Home',
            des: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
            src: 'assets/images/image2.png',
            post:'20 Nov 2020',
            id: 3,
        },

    ];

    return (
        <div className="max-w-screen-2xl mx-auto px-10 md:px-20">
            <div className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 xl:p-5">
                {image?.map((item)=>(
                    <a href="#" key={item.id} className="group relative flex flex-col justify-between rounded border bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 shadow-primary-400/50">
                    <div className="relative">
                        <div className="relative aspect-square w-full">
                            <img
                                className="w-full h-full rounded object-cover"
                                src={item.src}
                                alt="Writey A.I"
                            />
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient to-gray-500 p-4 text-white">
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                                <div className="flex items-center gap-2 mt-2"><CalendarCheck color="white"/> <h2 className="text-sm">{item.post}</h2></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 px-4 py-2">
                        <p className="text-2xl text-black">
                        {item.short}
                        </p>
                        <p className="flex flex-wrap items-center justify-start gap-2 text-sm line-clamp-2">
                        {item.des}
                        </p>
                        <a href="#" className="font-bold text-blue-900 hover:underline"> Read More </a>

                    </div>
                </a>
                ))}

            </div>
        </div>
    );
};

export default MyBlog;
