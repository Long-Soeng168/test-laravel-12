import { Link } from "@inertiajs/react";

const MyMenu = () => {
    return (
        <>
        <div className="hidden md:space-x-8 lg:flex">
            <Link href="/" className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-white">
                Home
            </Link>
            <Link
                href="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
            >
                About
            </Link>
            <Link
                href="/services"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
            >
                Services
            </Link>
            <Link
                href="/blog"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
            >
                Blogs
            </Link>
            <Link
                href="/contact"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:border-gray-300"
            >
                Contact
            </Link>
        </div>

        </>
    );
};

export default MyMenu;
