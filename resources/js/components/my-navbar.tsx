import { cn } from '@/lib/utils';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';

export function MyNavbar() {
    return (
        <>
            <div className="relative flex w-full items-center justify-center">
                <Navbar className="top-0" />
            </div>
        </>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn('fixed inset-x-0 top-10 z-50 mx-auto max-w-[2000px]', className)}>

                <Menu setActive={setActive}>

                    <MenuItem  setActive={setActive} active={active} item="About Us">
                        <div className="flex flex-col space-y-4 text-sm ">
                            <HoveredLink href="/web-dev"> Security & Safety Solutions</HoveredLink>
                            <HoveredLink href="/interface-design"> Mission & Vision</HoveredLink>
                            <HoveredLink href="/seo"> Why Westec</HoveredLink>
                            <HoveredLink href="/branding">Sales advantages</HoveredLink>
                        </div>
                    </MenuItem>

                    <MenuItem setActive={setActive} active={active} item="Solutions">
                        <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                            <ProductItem
                                title="Security & Safety Solutions"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Smart Home & Office Solutions"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Commercial & Residential Equipments"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="IT Solutions"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />

                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Case Studies">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/">Banking</HoveredLink>
                            <HoveredLink href="/">Microfinance</HoveredLink>
                            <HoveredLink href="/">Manufacturing</HoveredLink>
                            <HoveredLink href="/">Construction</HoveredLink>
                            <HoveredLink href="/">Entertainment</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Partners">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/">Our Partners</HoveredLink>

                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Careers">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/">Hiring</HoveredLink>

                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="News">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/">Updated technology news</HoveredLink>
                            <HoveredLink href="/">Westec’s news & activities</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/">Contact us detail (phone no. & social platforms)</HoveredLink>
                            <HoveredLink href="/">Location (Map)</HoveredLink>
                            <HoveredLink href="/">Solution Explorer</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
}
