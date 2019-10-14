import React, {useEffect} from 'react'

function useEffect() {

    useEffect(() => {
        const handler = () => {
          document.title = window.width;
        }
        window.addEventListener('resize', handler);
      
        return true;
      
        return () => {
          window.removeEventListener('resize', handler);
        }
      })

    }
