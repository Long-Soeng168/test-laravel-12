import { Link } from '@inertiajs/react';

export function MyBottomContent() {
    return (
        <>
            <div
                className="relative mx-auto mt-1 flex aspect-[21/9] w-full flex-col items-center gap-15 lg:flex-row bg-cover bg-center"
                style={{ backgroundImage: "url('assets/images/79.png')" }}
            >
                <img src='assets/images/logoBgBlue.png' className='w-36 absolute right-10 top-10'/>
                <div className="absolute left-10 top-10 w-[50%] text-start">
                    <h1 className="font-proxima-black mb-5 text-2xl text-white lg:text-[40px]">
                        Commercial And Residential Equipment
                    </h1>
                    <p className="font-proxima-thin text-xl text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas quo natus! Velit corporis itaque voluptate quam.
                    </p>
                </div>
                <div className="absolute right-10 bottom-10 grid grid-cols-1 gap-5 text-white md:grid-cols-2 xl:grid-cols-8">
                    {[
                        { img: 'home-theater.png', text: 'Commercial / Home Cinema' },
                        { img: 'conferencing.png', text: 'Conference System' },
                        { img: 'audio.png', text: 'Audio System' },
                        { img: 'led.png', text: 'LED Display' },
                        { img: 'pa-system.png', text: 'PA System' },
                        { img: 'pa.png', text: 'Information Display System' },
                        { img: 'pos.png', text: 'POS & Kiosk' },
                        { img: 'vending-machines.png', text: 'Vending Machines' }
                    ].map((item, index) => (
                        <Link key={index} href="#" className="bg-gray-800 p-2 rounded-2xl border transition-all hover:scale-110 hover:shadow-lg">
                            <div className="mb-2 flex justify-center">
                                <img src={`assets/images/${item.img}`} className="h-12 object-cover" alt={item.text} />
                            </div>
                            <p className="text-center text-sm capitalize">{item.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className="relative mx-auto mt-1 flex aspect-[21/9] w-full flex-col items-center gap-15 lg:flex-row bg-cover bg-center"
                style={{ backgroundImage: "url('assets/images/82.png')" }}
            >
                <img src='assets/images/logoBgBlue.png' className='w-36 absolute left-10 top-10'/>
                <div className="bg-blue-800/50 absolute top-10 right-10 w-[50%] p-4 text-start">
                    <h1 className="font-proxima-black mb-5 text-2xl text-white lg:text-[40px]">IT Solutions</h1>
                    <p className="font-proxima-thin text-xl text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptas quo natus! Velit corporis itaque voluptate quam.
                    </p>
                </div>
                <div className="absolute bottom-10 left-10 grid grid-cols-1 gap-5 text-white md:grid-cols-2 xl:grid-cols-8">
                    {[
                        { img: 'solar.png', text: 'Smart Solar Energy Systems' },
                        { img: 'smart-home.png', text: 'Smart Home Automation System' }
                    ].map((item, index) => (
                        <Link key={index} href="#" className="bg-gray-800 p-2 rounded-2xl border transition-all hover:scale-110 hover:shadow-lg">
                            <div className="mb-2 flex justify-center">
                                <img src={`assets/images/${item.img}`} className="h-12 object-cover" alt={item.text} />
                            </div>
                            <p className="text-center text-sm capitalize">{item.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
