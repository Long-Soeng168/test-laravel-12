import { Link } from '@inertiajs/react';

export function MyHeroSection() {
    return (
        <>
            <div
                className="relative mx-auto mt-1 flex aspect-[21/7] w-full flex-col"
                style={{
                    backgroundImage: "url('assets/images/79.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Background overlay */}

                <img src="assets/images/logoBgBlue.png" className="absolute top-10 right-10 w-36" alt="Logo" />

                <div className="grid w-full h-full grid-cols-1 p-10 lg:grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div className="flex flex-col text-start md:text-left">
                        <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                            Security And Safety Solutions
                        </h1>
                        <p className="text-start text-[12px] leading-5 text-white capitalize mt-2 line-clamp-2 font-proxima-nova-regular">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="justify-end flex flex-col">
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
                                    className="size-25 w-32 2xl:size-auto 2xl:w-auto rounded-xl border bg-gray-800 p-2 text-center transition-all duration-500 hover:scale-110 hover:shadow-lg"
                                >
                                    <div className="flex flex-col items-center">
                                        <img src={`assets/images/${item.img}`} className="h-12 object-cover" alt={`${item.label} Icon`} />
                                    </div>
                                    <p className="text-start text-[12px] leading-5 text-white capitalize mt-2 line-clamp-2 font-proxima-nova-regular">{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="relative mx-auto mt-1 flex aspect-[21/7] w-full flex-col"
                style={{
                    backgroundImage: "url('assets/demo-images/83.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Background overlay */}

                <img src="assets/images/logoBgBlue.png" className="absolute top-10 left-10 w-36" alt="Logo" />

                <div className="grid w-full h-full grid-cols-1 p-10 lg:grid-cols-2 gap-4">


                    {/* Right Section */}
                    <div className="justify-end flex flex-col">
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
                                    className="size-25 w-32 2xl:size-auto 2xl:w-auto rounded-xl border bg-gray-800 p-2 text-center transition-all duration-500 hover:scale-110 hover:shadow-lg"
                                >
                                    <div className="flex flex-col items-center">
                                        <img src={`assets/images/${item.img}`} className="h-12 object-cover" alt={`${item.label} Icon`} />
                                    </div>
                                    <p className="text-start text-[12px] leading-5 text-white capitalize mt-2 line-clamp-2 font-proxima-nova-regular">{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                     {/* Left Section */}
                     <div className="flex flex-col text-start  md:text-left">
                        <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                            Security And Safety Solutions
                        </h1>
                        <p className="text-start text-[12px] leading-5 text-white capitalize mt-2 line-clamp-2 font-proxima-nova-regular">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
