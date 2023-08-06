import React, { useRef, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

interface Props {
  children: React.ReactNode
}


const ScrollTransition: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  let isScrolling = false;

  const handleScroll = useCallback(debounce(() => {
    if (isScrolling) return;
    isScrolling = true;
    const minScroll = 100;
    const scrollTop = Math.max(containerRef.current!.scrollTop, minScroll);
    console.log("🚀 ~ file: scoll_transition.tsx:14 ~ handleScroll ~ scrollTop:", scrollTop)
    const scrollHeight = containerRef.current!.scrollHeight;
    const clientHeight = containerRef.current!.clientHeight;

    const scrollPercent = scrollTop / (scrollHeight - clientHeight);
    console.log("🚀 ~ file: scoll_transition.tsx:24 ~ handleScroll ~ scrollPercent:", scrollPercent)
    const childIndex = Math.round(scrollPercent * childrenArray.length);
    console.log("🚀 ~ file: scoll_transition.tsx:26 ~ handleScroll ~ childrenArray.length:", childrenArray.length)
    console.log("🚀 ~ file: scoll_transition.tsx:27 ~ handleScroll ~ scrollHeight * childIndex / (childrenArray.length - 1) + 108:", scrollHeight * childIndex / (childrenArray.length - 1) + 108)
    console.log('----------------------------')
    containerRef.current!.scrollTo({
      top: Math.floor(scrollHeight * childIndex / childrenArray.length) + 108,
      behavior: 'smooth'
    });
    isScrolling = false;
  }, 200), [childrenArray]);

  useEffect(() => {
    const container = containerRef.current!;
    container.addEventListener('scrollend', handleScroll, {passive: true});

    return () => {
      container.removeEventListener('scrollend', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="scroll-container h-screen overflow-auto scroll-smooth p-0 m-0">
      {childrenArray.map((child, index) => (
        <div key={index} className="h-screen p-0 m-0 overflow-hidden">
          {child}
        </div>
      ))}
    </div>
  );
}

export default ScrollTransition;