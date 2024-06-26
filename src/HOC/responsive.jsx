import { useMediaQuery } from 'react-responsive'

export const DesktopResponsive = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 })
    return isDesktop ? children : null;
}

export const MobileResponsive = ({children}) => {
   const isMobile =  useMediaQuery({ maxWidth: 767 })
   return isMobile ? children : null;
}

export const TabletResponsive = ({children}) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 })
    return isTablet ? children : null;
}
