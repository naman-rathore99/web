import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BiMessageSquareDots } from 'react-icons/bi';

interface SideNavbarProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setIsOpen(false); // Optionally close the sidebar
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>, tab: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleTabChange(tab);
        }
    };

    const tabs = [
        { name: 'Dashboard', path: '/dashboard', icon: <MdOutlineSpaceDashboard className="text-2xl" /> },
        { name: 'Profile', path: '/profile', icon: <CgProfile className="text-2xl" /> },
        { name: 'Password', path: '/dasboard/password', icon: <MdOutlineMoreHoriz className="text-2xl" /> },
        { name: 'Appearance', path: '/dasboard/appearance', icon: <MdOutlineSettings className="text-2xl" /> },
        { name: 'Analytics', path: '/analytics', icon: <MdOutlineAnalytics className="text-2xl" /> },
        { name: 'Messages', path: '/messages', icon: <BiMessageSquareDots className="text-2xl" /> },
        { name: 'Integration', path: '/integration', icon: <MdOutlineIntegrationInstructions className="text-2xl" /> },
        { name: 'Settings', path: '/settings', icon: <MdOutlineSettings className="text-2xl" /> },
        { name: 'More', path: '/more', icon: <MdOutlineMoreHoriz className="text-2xl" /> },
        { name: 'Logout', path: '/logout', icon: <MdOutlineLogout className="text-2xl" /> },
    ];

    return (
        <div className="relative dark:bg-slate-300">
            {/* Toggle button */}
            <button
                className="absolute top-4 left-0 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 dark:hover:bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group z-10"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle sidebar"
            >
                <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
            </button>

            {/* Sidebar */}
            <div
                className={`transition-transform duration-200 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-96'
                    } lg:translate-x-0 lg:w-60 lg:relative lg:block lg:z-0 lg:h-auto`}
            >
                <div className="p-2 w-auto h-screen  z-20">
                    <div className="flex flex-col justify-start ">
                        {tabs.map((tab) => (
                            <Link href={tab.path} key={tab.path} passHref>
                                <button
                                    className={`flex mb-2 justify-start items-center gap-4 dark:hover:bg-white hover:text-white hover:bg-gray-900 w-full p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${activeTab === tab.path ? 'bg-gray-900 text-white' : ''}`}
                                    onClick={() => handleTabChange(tab.path)}
                                    onKeyDown={(event) => handleKeyPress(event, tab.path)}
                                    tabIndex={0}
                                    aria-pressed={activeTab === tab.path}
                                >
                                    {tab.icon}
                                    <h3 className="text-base font-semibold">{tab.name}</h3>
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;
