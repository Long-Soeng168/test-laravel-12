const MyFooter = () => {
    return (
        <>
            <footer className="background py-10 text-white font-proxima-nova-regular">
                <div className="mx-auto grid max-w-[4000px] grid-cols-1 gap-8 px-4 sm:px-10 md:grid-cols-4">
                    {/* Contact Section */}
                    <div className="grid grid-cols-1">
                        <img src="assets/images/whiteLogo.png" alt="Angkor Wildlife & Aquarium" className="mb-4 w-48" />
                        <div className="text-sm leading-relaxed text-white md:text-base">
                            <p>
                                No. 20, St. 598C, Phum Tomnub Toek,
                                <br />
                                Sangkat Phnom Penh Thmey, Khan Sen Sok,
                                <br />
                                Phnom Penh City, Kingdom of Cambodia.
                            </p>

                            <div className="mt-4 flex flex-col">
                                <p><span className="pr-3">Mobile Phone</span>: +855 12 269 661</p>
                                <p><span>Landline Phone</span>: +855 16 991 580</p>
                                <p>: +855 23 882 580</p>
                            </div>

                            <p className="mt-4 underline">contact@westec.com</p>

                            <div className="mt-4">
                                <p>8:00AM - 5:00PM</p>
                                <p>Monday - Saturday</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="md:col-span-3">
                        <div className="grid w-full grid-cols-1 gap-6 text-sm text-white md:grid-cols-3">
                            {/* About Us */}
                            <div>
                                <h3 className="inline-block background-dark-blue rounded-md px-4 py-2 text-white">ABOUT US</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>. What is Westec?</li>
                                    <li>. Mission & Vision</li>
                                    <li>. Why Westec</li>
                                    <li>. Sales advantages</li>
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div>
                                <h3 className="inline-block background-dark-blue rounded-md px-4 py-2 text-white">SOLUTIONS</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>. Security & Safety Solutions</li>
                                    <li>. Smart Home & Office Solutions</li>
                                    <li>. Commercial & Residential Equipments</li>
                                    <li>. IT Solutions</li>
                                </ul>
                            </div>

                            {/* Case Studies */}
                            <div>
                                <h3 className="inline-block background-dark-blue rounded-md px-4 py-2 text-white">CASE STUDIES</h3>
                                <ul className="mt-2 space-y-1">
                                    <li>. Banking</li>
                                    <li>. Embassy</li>
                                    <li>. Microfinance</li>
                                    <li>. Manufacturing</li>
                                    <li>. Construction</li>
                                    <li>. Entertainment</li>
                                </ul>
                            </div>
                        </div>

                        {/* Social & Chat Sections */}
                        <div className="mt-10 flex max-w-[82%] items-start justify-between">
                            {/* Follow Us */}
                            <div>
                                <h3 className="inline-block background-dark-blue rounded-md px-4 py-2 text-white">FOLLOW US!</h3>
                                <div className="mt-2 flex gap-2">
                                    {[
                                        { name: 'facebook', alt: 'Facebook' },
                                        { name: 'instagram', alt: 'Instagram' },
                                        { name: 'tiktok', alt: 'TikTok' },
                                        { name: 'youtube', alt: 'YouTube' },
                                        { name: 'linkedin', alt: 'LinkedIn' },
                                    ].map((icon, index) => (
                                        <img
                                            key={index}
                                            src={`/assets/demo-images/${icon.name}.png`}
                                            alt={icon.alt}
                                            className="h-8 w-8  p-1 hover:scale-125 transition-all duration-500"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Chat With Us */}
                            <div>
                                <h3 className="inline-block background-dark-blue rounded-md px-4 py-2 text-white">CHAT WITH US!</h3>
                                <div className="mt-2 flex gap-2">
                                    {[
                                        { name: 'talk', alt: 'Talk' },
                                        { name: 'telegram', alt: 'Telegram' },
                                        { name: 'wechat', alt: 'WeChat' },
                                        { name: 'whatsapp', alt: 'WhatsApp' },
                                    ].map((icon, index) => (
                                        <img
                                            key={index}
                                            src={`/assets/demo-images/${icon.name}.png`}
                                            alt={icon.alt}
                                            className="h-8 w-8  p-1 hover:scale-125 transition-all duration-500"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MyFooter;
