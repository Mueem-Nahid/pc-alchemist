import {ReactNode} from "react";
import {Navbar} from "@/components/Navbar";

function RootLayout({children}: { children: ReactNode }) {
   return (
      <>
         <Navbar/>
         <main>{children}</main>
         {/*<Footer/>*/}
      </>
   )
}

export default RootLayout;