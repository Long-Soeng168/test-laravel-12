import { Link } from '@inertiajs/react';

export function MyHeroSection() {
    return (
        <>
            <div
                className="relative mx-auto mt-1 flex aspect-[21/9] w-full flex-col items-center gap-15 lg:flex-row"
                style={{ backgroundImage: "url('assets/images/79.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <img src='assets/images/logoBgBlue.png' className='w-36 absolute right-10 top-10'/>
                <div className="absolute left-10 top-10 w-[50%] text-start md:text-left">
                    <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                        Security And Safety Solutions
                    </h1>

                    <p className="font-proxima-thin mb-8 text-xl leading-[24px] font-normal text-white sm:text-[15px] md:mb-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 p-10 flex gap-4 justify-end">
                    {[
                        { img: 'cctv.png', label: 'CCTV' },
                        { img: 'access-control.png', label: 'Access Control System' },
                        { img: 'security.png', label: 'Time Attendance System' },
                        { img: 'fire-alarm.png', label: 'Fire Alarm' },
                        { img: 'instrution-alarm.png', label: 'Instruction Alarm' }
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="bg-gray-800 size-35 w-40 rounded-2xl border p-2 text-start transition-all duration-500 hover:scale-110 hover:shadow-lg"
                        >
                            <div className="mb-2 flex flex-col items-center">
                                <img src={`assets/images/${item.img}`} className="w-16 h-16 object-cover" alt={item.label} />
                            </div>
                            <p className="text-start text-sm leading-5 capitalize lg:inline text-white">{item.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className="relative mx-auto mt-1 flex aspect-[21/9] w-full flex-col items-center gap-15 lg:flex-row"
                style={{ backgroundImage: "url('assets/images/81.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <img src='assets/images/logoBgBlue.png' className='w-36 absolute left-10 top-10'/>
                <div className="absolute top-10 right-10 w-[50%] p-4 text-start md:text-left">
                    <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                        Smart Home And Office Solutions
                    </h1>
                    <p className="font-proxima-thin text-xl leading-[24px] text-white sm:text-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates.
                    </p>
                </div>
                <div className="absolute left-0 bottom-0 p-10 flex gap-4">
                    {[
                        { img: 'solar.png', label: 'Smart Solar Energy Systems' },
                        { img: 'smart-home.png', label: 'Smart Home Automation System' }
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="bg-gray-800 size-35 w-40 rounded-2xl border p-2 text-start transition-all duration-500 hover:scale-110 hover:shadow-lg"
                        >
                            <div className="mb-2 flex flex-col items-center">
                                <img src={`assets/images/${item.img}`} className="w-16 h-16 object-cover" alt={item.label} />
                            </div>
                            <p className="text-start text-sm leading-5 capitalize lg:inline text-white">{item.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
