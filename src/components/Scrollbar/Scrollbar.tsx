import React, { useRef } from "react";
import styled from "styled-components";

interface ScrollbarProps {
  children: any;
  style?: React.CSSProperties;
}

export const Scrollbar = ({ children, style }: ScrollbarProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollThumbRef = useRef<any>(null);

  const handleScroll = () => {
    const contentElement = contentRef.current;
    const scrollThumbElement = scrollThumbRef.current;

    if (contentElement && scrollThumbElement) {
      const maxScrollHeight =
        contentElement.scrollHeight - contentElement.clientHeight;
      const currentScroll = contentElement.scrollTop;
      const percentage = (currentScroll / maxScrollHeight) * 100;

      const scrollbarHeight = scrollThumbElement.parentNode.clientHeight;
      const thumbHeight = scrollThumbElement.clientHeight;
      const thumbTop = (percentage / 100) * (scrollbarHeight - thumbHeight);
      scrollThumbElement.style.top = `${thumbTop}px`;
    }
  };

  return (
    <OuterContainer>
      <ContentContainer ref={contentRef} onScroll={handleScroll}>
        {children}
      </ContentContainer>
      <ScrollContainer style={style}>
        <ScrollThumb ref={scrollThumbRef} />
      </ScrollContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
`;

const ContentContainer = styled.div`
  color: white;
  overflow-y: scroll;
  width: 100%;
  height: 120vh;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const ScrollContainer = styled.div`
  height: 45%;
  width: 5px;
  background-color: black;
  position: relative;
  display: flex;
`;

const ScrollThumb = styled.div`
  background-color: #ff9800;
  width: 10rem;
  height: 5rem;
  border-radius: 7.5px;
  position: relative;
  cursor: pointer;
`;
