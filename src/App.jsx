import { StickyNavbar } from "./components/Navbar"
import Hero from "./components/Hero"
import {BookingCard} from "./components/Card/Card"

import Swipper from "./components/Swipper/Swipper";

function App() {

  return (
    <>
      <StickyNavbar/>
      <Hero />
      <BookingCard />
      <Swipper />
    </>
  )
}

export default App
