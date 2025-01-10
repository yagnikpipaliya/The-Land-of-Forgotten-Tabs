import React from 'react'
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

const MenuBar = () => {
    return (
        <>
            <div className="sticky top-0 z-50 w-full backdrop-blur-md  border-transparent transition-colors bg-transparent supports-backdrop-blur:bg-white/60">{/* bg-white/5 border-white/5  border-b*/}
                <div className="container mx-auto flex justify-center py-4">
                    <div className="max-w-screen-lg "> {/* w-full */}
                        <Menubar className="w-full rounded-md bg-white">
                            <MenubarMenu>
                                <MenubarTrigger className="bg-transparent">File</MenubarTrigger>
                                <MenubarContent>
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
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
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
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
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
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </>
    );
};


// const MenuBar = () => {
//     return (
//         <>

//             <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/20 border-b border-white/10">
//                 <div className="container mx-auto flex justify-center py-4">

//                     <Menubar className="w-fit max-w-screen-lg rounded-md">
//                         <MenubarMenu>
//                             <MenubarTrigger>File</MenubarTrigger>
//                             <MenubarContent>
//                                 <MenubarItem>
//                                     New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//                                 </MenubarItem>
//                                 <MenubarItem>
//                                     New Window <MenubarShortcut>⌘N</MenubarShortcut>
//                                 </MenubarItem>
//                                 <MenubarItem disabled>New Incognito Window</MenubarItem>
//                                 <MenubarSeparator />
//                                 <MenubarSub>
//                                     <MenubarSubTrigger>Share</MenubarSubTrigger>
//                                     <MenubarSubContent>
//                                         <MenubarItem>Email link</MenubarItem>
//                                         <MenubarItem>Messages</MenubarItem>
//                                         <MenubarItem>Notes</MenubarItem>
//                                     </MenubarSubContent>
//                                 </MenubarSub>
//                                 <MenubarSeparator />
//                                 <MenubarItem>
//                                     Print... <MenubarShortcut>⌘P</MenubarShortcut>
//                                 </MenubarItem>
//                             </MenubarContent>
//                         </MenubarMenu>
//                         <MenubarMenu>
//                             <MenubarTrigger>Edit</MenubarTrigger>
//                             <MenubarContent>
//                                 <MenubarItem>
//                                     Undo <MenubarShortcut>⌘Z</MenubarShortcut>
//                                 </MenubarItem>
//                                 <MenubarItem>
//                                     Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
//                                 </MenubarItem>
//                                 <MenubarSeparator />
//                                 <MenubarSub>
//                                     <MenubarSubTrigger>Find</MenubarSubTrigger>
//                                     <MenubarSubContent>
//                                         <MenubarItem>Search the web</MenubarItem>
//                                         <MenubarSeparator />
//                                         <MenubarItem>Find...</MenubarItem>
//                                         <MenubarItem>Find Next</MenubarItem>
//                                         <MenubarItem>Find Previous</MenubarItem>
//                                     </MenubarSubContent>
//                                 </MenubarSub>
//                                 <MenubarSeparator />
//                                 <MenubarItem>Cut</MenubarItem>
//                                 <MenubarItem>Copy</MenubarItem>
//                                 <MenubarItem>Paste</MenubarItem>
//                             </MenubarContent>
//                         </MenubarMenu>
//                         <MenubarMenu>
//                             <MenubarTrigger>View</MenubarTrigger>
//                             <MenubarContent>
//                                 <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
//                                 <MenubarCheckboxItem checked>
//                                     Always Show Full URLs
//                                 </MenubarCheckboxItem>
//                                 <MenubarSeparator />
//                                 <MenubarItem inset>
//                                     Reload <MenubarShortcut>⌘R</MenubarShortcut>
//                                 </MenubarItem>
//                                 <MenubarItem disabled inset>
//                                     Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
//                                 </MenubarItem>
//                                 <MenubarSeparator />
//                                 <MenubarItem inset>Toggle Fullscreen</MenubarItem>
//                                 <MenubarSeparator />
//                                 <MenubarItem inset>Hide Sidebar</MenubarItem>
//                             </MenubarContent>
//                         </MenubarMenu>
//                         <MenubarMenu>
//                             <MenubarTrigger>Profiles</MenubarTrigger>
//                             <MenubarContent>
//                                 <MenubarRadioGroup value="benoit">
//                                     <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
//                                     <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
//                                     <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
//                                 </MenubarRadioGroup>
//                                 <MenubarSeparator />
//                                 <MenubarItem inset>Edit...</MenubarItem>
//                                 <MenubarSeparator />
//                                 <MenubarItem inset>Add Profile...</MenubarItem>
//                             </MenubarContent>
//                         </MenubarMenu>
//                     </Menubar>
//                 </div>
//             </div>
//         </>
//     );
// };

export default MenuBar;

  