import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, PanelTopIcon, ProjectorIcon, ReplaceIcon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Items',
        url: '/items',
        icon: LayoutGrid,
    },
    {
        title: 'Projects',
        url: '/admin/projects',
        icon: ProjectorIcon,
    },
    {
        title: 'Page Position',
        url: '/admin/page_positions',
        icon: ReplaceIcon,
    },
    {
        title: 'Page',
        url: '/admin/pages',
        icon: PanelTopIcon,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'CKEditor',
        url: '/admin/ckeditor5',
        icon: BookOpen,
    },
    {
        title: 'File Manager',
        url: '/admin/my_file_manager',
        icon: Folder,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
