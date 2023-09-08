import { useMediaQuery } from "react-responsive";


const useMedia = (windowWidth)=> {

/**
 *  media hook 
 *  @isDesktopOrLaptop 
 *  @isMobile 
 */
const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1200px)",
});

const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
});

//  check if windowWidth exist or not
if(!windowWidth) return; 

let query = false;

switch(windowWidth) {
     case 'laptop':
        query = isDesktopOrLaptop
        break;
    
    case 'mobile':
        query = isMobile
        break;
    
    default:
        query = ''
  }

  return query;
}

export { useMedia }