import React, { useState } from 'react'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Link, NavLink, useLocation } from 'react-router-dom';

const MenuBar = () => {
    const [isHomeActive, setIsHomeActive] = useState(null)
    const [isResourceActive, setIsResourceActive] = useState(null)
    const location = useLocation(); 
    return (
        <>
            <div className="sticky top-0 z-50 w-full backdrop-blur-md  border-transparent transition-colors bg-transparent supports-backdrop-blur:bg-white/60">{/* bg-white/5 border-white/5  border-b*/}
                <div className="container mx-auto flex justify-center py-4">
                    <div className="max-w-screen-lg "> {/* w-full */}
                        <Menubar className="w-full rounded-md bg-white">
                            <MenubarMenu>
                                {/* <NavLink to={'/'} className={({ isActive }) =>
                                    isActive ? setIsHomeActive('Home') : setIsHomeActive(null)
                                }
                                ><MenubarTrigger className={`${isHomeActive ? 'bg-black text-white' : 'text-black'} hover:border-black`}>Home</MenubarTrigger></NavLink> */}

                                <Link to="/">
                                    <MenubarTrigger
                                        className={`${location.pathname === '/'
                                                ? 'bg-black text-white hover:border-black'
                                                : 'text-black bg-white hover:border-black hover:border focus:outline-0 focus-within::border-0'
                                            } outline-offset-0 data-[state=open]:!bg-black data-[state=open]:!text-white`}
                                            // focus:bg-black focus:text-white
                                    >
                                        Home
                                    </MenubarTrigger>
                                </Link>


                                {/* <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarSub>
                                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Email link</MenubarItem>
                                            <MenubarItem>Messages</MenubarItem>
                                            <MenubarItem>Notes</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent> */}
                            </MenubarMenu>
                            <MenubarMenu>
                                {/* <NavLink to={'/resource'} className={({ isActive }) =>
                                    isActive ? setIsResourceActive('Resource') : setIsResourceActive(null)
                                }><MenubarTrigger className={`${isResourceActive ? 'bg-black text-white' : 'text-black'} hover:border-black active:bg-slate-800`}>Edit</MenubarTrigger></NavLink> */}
                                <Link to="/resource">
                                    <MenubarTrigger
                                        className={`${location.pathname === '/resource'
                                                ? 'bg-black text-white'
                                                : 'text-black bg-white  focus:outline-0 focus-within::border-0'
                                            } hover:border-black hover:border outline-offset-0 data-[state=open]:!bg-black data-[state=open]:!text-white`}
                                            // focus:bg-black focus:text-white
                                    >
                                        Edit
                                    </MenubarTrigger>
                                </Link>

                                {/* <MenubarContent>
                                    <MenubarItem>
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarSub>
                                        <MenubarSubTrigger>Find</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Search the web</MenubarItem>
                                            <MenubarSeparator />
                                            <MenubarItem>Find...</MenubarItem>
                                            <MenubarItem>Find Next</MenubarItem>
                                            <MenubarItem>Find Previous</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>Cut</MenubarItem>
                                    <MenubarItem>Copy</MenubarItem>
                                    <MenubarItem>Paste</MenubarItem>
                                </MenubarContent> */}
                            </MenubarMenu>
                            {/* <MenubarMenu>
                                <MenubarTrigger>View</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarCheckboxItem>
                                        Always Show Bookmarks Bar
                                    </MenubarCheckboxItem>
                                    <MenubarCheckboxItem checked>
                                        Always Show Full URLs
                                    </MenubarCheckboxItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>
                                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem disabled inset>
                                        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Profiles</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarRadioGroup value="benoit">
                                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                                        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                                    </MenubarRadioGroup>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Edit...</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem inset>Add Profile...</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu> */}
                        </Menubar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuBar;