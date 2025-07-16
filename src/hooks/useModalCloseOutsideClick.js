import { useEffect, useRef } from "react";

function useModalCloseOutsideClick(close) {
  const ref = useRef();

  useEffect(() => {
    function handleModalClose(e) {
      if(ref.current && !ref.current.contains(e.target)) {
        close()
      }
    }

    document.addEventListener("click", handleModalClose, true);

    return () => document.removeEventListener("click", handleModalClose, true);
 
  }, [close])

  return ref;
}

export default useModalCloseOutsideClick