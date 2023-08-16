import React from "react";
import styled from "styled-components";

import YouTube from "react-youtube";

export const useExerciseVideo = (videoId: string) => {
  const opts = {
    height: "100%",
    width: "100%",
  };

  return (
    <Container>
      <YouTube videoId={videoId} opts={opts}></YouTube>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio for widescreen video */
`;
