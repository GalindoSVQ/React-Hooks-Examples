import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count is right now ${count}`;
  }, [count]);
}

export default useDocumentTitle;
