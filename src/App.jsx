import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import MenuBar from './components/custom/MenuBar'
import SpotlightCard from './components/custom/SpotLightCard'
import { FiMoreVertical } from "react-icons/fi";
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
import { ArrowUpRight, EllipsisVertical } from 'lucide-react'
import HeroSection from './components/custom/HeroSection'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Content />} />
      </Routes>


    </>
  )
}

export default App


const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen mx-auto text-center">
      <MenuBar />
      {children}
    </div>
  );
};


const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
      </Layout>

      {/* <div className='w-full h-screen mx-auto text-center'>
        <MenuBar />
        <HeroSection />
      </div> */}
    </>
  )
}
const Content = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <div className='container mx-auto'>
          <div class="grid  grid-rows-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* grid-flow-col */}
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <Button size="csm" >Check <ArrowUpRight /></Button>
                <Menubar className="absolute right-1 top-3 rounded-md border-0 w-fit bg-transparent">
                  <MenubarMenu>
                    <MenubarTrigger className="bg-transparent p-0"><EllipsisVertical /></MenubarTrigger>
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
                </Menubar>
                <br />
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="csm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
            <div>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <i class="fa fa-lock"></i>
                <h2>Enhanced Security</h2>
                <p>Our state of the art software offers peace of mind through the strictest security measures.</p>
                <Button size="sm">Learn more</Button>
              </SpotlightCard>
            </div>
          </div>
          {/* <Content />
          <Content /> */}
        </div >
      </Layout>
    </>
  )
}