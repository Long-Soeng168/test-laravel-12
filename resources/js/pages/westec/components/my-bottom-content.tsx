import { Link } from '@inertiajs/react';

export function MyBottomContent() {
    return (
        <>
            <div
                  className="relative mx-auto mt-1 flex aspect-[21/7] w-full flex-col"
                  style={{
                      backgroundImage: "url('assets/demo-images/85.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}
            >
                <img src='assets/images/logoBgBlue.png' className='absolute top-14 right-10 w-36'/>
                <div className="grid w-full h-full grid-cols-1 p-10 lg:grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div className="flex flex-col text-start md:text-left">
                        <div className='bg-gray-500/40 p-4'>
                        <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-black md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                        Commercial And Residential Equipment
                        </h1>
                        <p className="font-proxima-thin text-xl leading-[24px]  text-black font-bold sm:text-[15px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Velit corporis itaque voluptate quam voluptates. Lorem ipsum dolor sit amet
                        </p>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="justify-end flex flex-col">
                        <div className="grid grid-cols-5 justify-end gap-4">
                            {[
                                { img: 'home-theater.png', label: 'Commercial / Home Cinema' },
                                { img: 'conferencing.png', label: 'Conference System' },
                                { img: 'audio.png', label: 'Audio System' },
                                { img: 'led.png', label: 'LED Display' },
                                { img: 'pa-system.png', label: 'PA System' },
                                { img: 'pa.png', label: 'Information Display System' },
                                { img: 'pos.png', label: 'POS & Kiosk' },
                                { img: 'vending-machines.png', label: 'Vending Machines' }
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
                      backgroundImage: "url('assets/demo-images/84.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                  }}
            >
                <img src='assets/images/logoBgBlue.png' className='absolute top-10 left-10 w-36'/>
                <div className="grid w-full h-full grid-cols-1 p-10 lg:grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div className="justify-end flex flex-col">
                        <div className="grid grid-cols-5 justify-end gap-4">
                            {[
                                { img: 'support-maintenance.png', label: ' Support And Maintenance ICT' },
                                { img: 'support.png', label: 'Internet Support' },
                                { img: 'web-design.png', label: 'Website Design' },
                                { img: 'network.png', label: 'Network  Monitoring' },
                                { img: 'monitoring1.png', label: 'Network Installation' },
                                { img: 'sytem-install.png', label: 'Server Installation' },
                                { img: 'stock.png', label: 'Stock Inventory & HelpDesk Software' },
                                { img: 'pickup.png', label: 'Pickup & Drop-off Logistics Platform' },
                                { img: 'sams.png', label: 'School Management and Application System (SAMS)' },
                                { img: 'support-system.png', label: 'Support Systems' },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="size-20 w-32 2xl:size-auto 2xl:w-auto rounded-xl border bg-gray-800 p-2 text-center transition-all duration-500 hover:scale-110 hover:shadow-lg"
                                >
                                    <div className="flex flex-col items-center">
                                        <img src={`assets/demo-images/${item.img}`} className="h-12 object-cover" alt={`${item.label} Icon`} />
                                    </div>
                                    <p className="text-start text-[12px] leading-5 text-white capitalize mt-2 line-clamp-2 font-proxima-nova-regular">{item.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col text-start md:text-left">
                        <h1 className="font-proxima-black mb-5 text-2xl leading-[30px] text-white md:mb-10 md:text-3xl md:leading-[30px] lg:text-[40px] lg:leading-[50px]">
                        IT Solutions
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
