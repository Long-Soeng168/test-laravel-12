import { Link } from '@inertiajs/react';

export function MyHeroSection() {
    return (
        <>
    <div
    className="relative mx-auto mt-1 flex aspect-[21/8] w-full flex-col"
    style={{
        backgroundImage: "url('assets/images/79.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
>
    {/* Background overlay */}

    <img src="assets/images/logoBgBlue.png" className="absolute top-10 right-10 w-36" alt="Logo" />

    <div className="grid w-full grid-cols-1 p-10 lg:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col text-start md:text-left">
            <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                Security And Safety Solutions
            </h1>
            <p className="font-proxima-thin mb-8 text-xl leading-[24px] font-normal text-white sm:text-[15px] md:mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
            </p>
        </div>

        {/* Right Section */}
        <div className="mt-[50%] flex flex-col ">
            <div className="grid grid-cols-5 justify-end gap-4">
                {[
                    { img: 'cctv.png', label: 'CCTV' },
                    { img: 'access-control.png', label: 'Access Control System' },
                    { img: 'attendance.png', label: 'Time Attendance System' },
                    { img: 'fire-alarm.png', label: 'Fire Alarm' },
                    { img: 'instrution-alarm.png', label: 'Instruction Alarm' },
                ].map((item, index) => (
                    <Link
                        key={index}
                        href="#"
                        className="size-25 w-32 border rounded-xl bg-gray-800 p-2 text-center transition-all duration-500 hover:scale-110 hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center">
                            <img src={`assets/images/${item.img}`} className="h-12 w-12 object-cover" alt={`${item.label} Icon`} />
                        </div>
                        <p className="text-start text-[12px] leading-5 text-white capitalize">{item.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
</div>



            {/* <div
                className="relative mx-auto mt-1 flex aspect-[21/9] w-full flex-col items-center gap-15 lg:flex-row"
                style={{ backgroundImage: "url('assets/images/81.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <img src="assets/images/logoBgBlue.png" className="absolute top-10 left-10 w-36" />
                <div className="absolute top-10 right-10 w-[50%] p-4 text-start md:text-left">
                    <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                        Smart Home And Office Solutions
                    </h1>
                    <p className="font-proxima-thin text-xl leading-[24px] text-white sm:text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 flex gap-4 p-10">
                    {[
                        { img: 'solar.png', label: 'Smart Solar Energy Systems' },
                        { img: 'smart-home.png', label: 'Smart Home Automation System' },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="size-35 w-40 rounded-2xl border bg-gray-800 p-2 text-start transition-all duration-500 hover:scale-110 hover:shadow-lg"
                        >
                            <div className="mb-2 flex flex-col items-center">
                                <img src={`assets/images/${item.img}`} className="h-16 w-16 object-cover" alt={item.label} />
                            </div>
                            <p className="text-start text-sm leading-5 text-white capitalize lg:inline">{item.label}</p>
                        </Link>
                    ))}
                </div>
            </div> */}
        </>
    );
}
