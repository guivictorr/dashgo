import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useCallback, useContext, useEffect } from "react";

const SidebarDrawerContext = createContext<UseDisclosureReturn | undefined>(undefined);

type SidebarDrawerProviderProps = {
  children: ReactNode
}

export function SIdebarDrawerProvider(props: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  const handleRouteChange = useCallback(() => {
    disclosure.onClose()

  // if I use disclosure on deps array it will not work
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  useEffect(() => {
    handleRouteChange()
  }, [router.asPath, handleRouteChange])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {props.children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => {
  const disclosure = useContext(SidebarDrawerContext)

  if (!disclosure) {
    throw new Error("useSidebarDrawer must be used within a SidebarDrawerProvider")
  }

  return disclosure
}