import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    padding: 16px 0;
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: -16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  ${StoryList} {
    @media ${QUERIES.tabletOnly} {
      flex-direction: row;

      & > * {
        border-bottom: 0;
        padding: 0 32px;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    column-gap: 0px;

    ${MainStorySection} {
      padding-right: 16px;
      border-right: 1px solid var(--color-gray-300);
    }

    ${SecondaryStorySection} {
      padding-left: 16px;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    gap: 0;

    ${SecondaryStorySection} {
      padding: 0 16px;
      margin-bottom: 16px;
      border-right: 1px solid var(--color-gray-300);
    }

    ${OpinionSection} {
      padding-left: 16px;
      margin-bottom: 16px;
    }

    ${AdvertisementSection} {
      margin-left: 16px;
      padding: 16px 0;
      border-top: 1px solid var(--color-gray-300);
    }
  }
`;

export default MainStoryGrid;
