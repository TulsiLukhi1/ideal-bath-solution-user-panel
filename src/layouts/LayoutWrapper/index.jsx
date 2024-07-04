"use client"

import { usePathname } from 'next/navigation';
import MainLayout from '../MainLayout';

const LayoutWrapper = ({ children }) => {
    const pathname = usePathname();

    const pages = ["/", "/enquiries", "/products", "/users"];

    return <MainLayout>{children}</MainLayout>

}

export default LayoutWrapper