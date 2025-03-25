import { Link } from "@inertiajs/react";

const MyCategories = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-20 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 text-nowrap items-center gap-5 ">
                    <Link href="#" className="flex flex-col items-center gap-2 border p-5 rounded-2xl hover:shadow-lg transition-all duration-500">
                            <img
                                alt=" "
                                src="assets/images/security.png"
                                decoding="async"
                                data-nimg="1"
                                className="mr-1 h-20 w-20 object-cover"
                                loading="lazy"
                                style={{ color: 'transparent;' }}
                                width="16"
                                height="16"
                            />
                            <span className="leading-5 capitalize lg:inline text-base">Security and Safety Solutions</span>
                    </Link>
                    <Link href="#" className="flex flex-col items-center gap-2 border p-5 rounded-2xl hover:shadow-lg transition-all duration-500">
                            <img
                                alt=" "
                                src="assets/images/smart-home.png"
                                decoding="async"
                                data-nimg="1"
                                className="mr-1 h-20 w-20 object-cover"
                                loading="lazy"
                                style={{ color: 'transparent;' }}
                                width="16"
                                height="16"
                            />
                            <span className="leading-5 capitalize lg:inline text-base">Smart Home and Office Solutions</span>
                    </Link>

                    <Link href="#" className="flex flex-col items-center gap-2 border p-5 rounded-2xl hover:shadow-lg transition-all duration-500">
                            <img
                                alt=" "
                                src="assets/images/security.png"
                                decoding="async"
                                data-nimg="1"
                                className="mr-1 h-20 w-20 object-cover"
                                loading="lazy"
                                style={{ color: 'transparent;' }}
                                width="16"
                                height="16"
                            />
                            <span className="leading-5 capitalize lg:inline text-base">Security and Safety Solutions</span>
                    </Link>
                    <Link href="#" className="flex flex-col items-center gap-2 border p-5 rounded-2xl hover:shadow-lg transition-all duration-500">
                            <img
                                alt=" "
                                src="assets/images/it.png"
                                decoding="async"
                                data-nimg="1"
                                className="mr-1 h-20 w-20 object-cover"
                                loading="lazy"
                                style={{ color: 'transparent;' }}
                                width="16"
                                height="16"
                            />
                            <span className="leading-5 capitalize lg:inline text-base">It Solutions</span>
                    </Link>
                </div>
        </div>
    );
};

export default MyCategories;
