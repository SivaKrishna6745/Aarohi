import { Menu, Search, Upload } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import { Input } from '../ui/Input';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black boder-b border-gray-800 px-6 h-20 flex gap-8 items-center justify-between">
            <div>
                <button className="md:hidden">
                    <Menu className="w-6 h-6" />
                </button>
                <Link href="/">
                    <Image
                        src="/assets/Aarohi-logo.png"
                        alt="Aarohi logo"
                        width={50}
                        height={50}
                        className="rounded-md"
                    />
                </Link>
            </div>
            <div className="flex-1 max-w-3xl">
                <Input
                    id="search-bar"
                    type="text"
                    placeholder="Search..."
                    icon={<Search />}
                    iconPosition="left"
                    classNames="text-lg rounded-full bg-slate-900"
                />
            </div>
            <div className="flex items-center gap-4">
                <Button size="md" className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    <span>Upload</span>
                </Button>
                <Avatar />
            </div>
        </nav>
    );
};

export default Navbar;
