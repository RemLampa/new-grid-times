import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  const leftActionGroup = (
    <>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </>
  );

  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>{leftActionGroup}</ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainActionGroup>{leftActionGroup}</MainActionGroup>
        <Logo />
        <CallToActionWrapper>
          <CallToAction>
            <Button>Subscribe</Button>
            <LoginLink href="#">Already a subscriber?</LoginLink>
          </CallToAction>
        </CallToActionWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
`;

const CallToActionWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginLink = styled.a`
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
