import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {  createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContext {
  children: ReactNode
}

type SidebarDrawerContextData = {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
  id?: string;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }:SidebarDrawerContext) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
   disclosure.onClose()
  }, [router.asPath]) 

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);

