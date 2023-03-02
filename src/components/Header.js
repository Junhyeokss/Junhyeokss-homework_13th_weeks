import styled from "styled-components";
import { Link } from "react-router-dom";

const H1 = styled.h1`
  font-size: 35px;
`;

const Inner = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  gap: 30px;
  justify-content: space-between;
`;

const UL = styled.ul`
  display: flex;
  line-height: 70px;
  gap: 30px;
`;

const H2 = styled.h2`
  line-height: 70px;
`;
const Header = ({ NAV }) => {
  return (
    <>
      <header>
        <Inner>
          <H1>kakaoEnterprize</H1>
          <nav>
            <UL>
              {NAV.map((it) => {
                return (
                  <li key={it.id}>
                    <Link to={it.link}>{it.title}</Link>
                  </li>
                );
              })}
            </UL>
          </nav>
          <div className="unit">
            <H2>
              인재영입{" "}
              <a href="">
                <img src="" alt="" />
              </a>{" "}
            </H2>
          </div>
        </Inner>
      </header>
    </>
  );
};

export default Header;
