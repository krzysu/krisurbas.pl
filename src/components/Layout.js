import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import HeadMeta from "src/components/HeadMeta";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import "normalize.css/normalize.css";
import "src/stylesheets/styles.scss";

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          headMetaSite: site {
            ...HeadMetaSiteFragment
          }
          headMetaImage: imageSharp(
            fluid: { originalName: { regex: "/profile.jpg/" } }
          ) {
            fluid(maxWidth: 700, maxHeight: 700) {
              src
            }
          }
        }
      `}
      render={data => (
        <div>
          <HeadMeta
            site={data.headMetaSite}
            imageUrl={data.headMetaImage.fluid.src}
            pathname={location.pathname}
          />
          <Header pathname={location.pathname} />
          <div className="body">{children}</div>
          <Footer />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
};

export default Layout;
