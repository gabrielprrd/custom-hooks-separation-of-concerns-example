import { useEffect, useState } from "react";

export default function useProgress() {
  const [pageHeight, setPageHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setProgress(window.scrollY);
    }

    const windowHeight = document.body.clientHeight - window.innerHeight;
    setPageHeight(windowHeight);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { pageHeight, progress };
}
