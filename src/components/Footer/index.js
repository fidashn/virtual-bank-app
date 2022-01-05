import React from 'react';

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/'>How It Works</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Privacy Policy</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorship</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Resources</FooterLinkTitle>
                <FooterLink to='/'>Blog</FooterLink>
                <FooterLink to='/'>Documentation</FooterLink>
                <FooterLink to='/'>Community</FooterLink>
                <FooterLink to='/'>Affiliates</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
              Vir-Bank 
              </SocialLogo>
              <WebsiteRights>
                &copy; {new Date().getFullYear()} Vir-Bank. All Rights
                Reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href='//www.facebook.com'
                  target='_blank'
                  aria-label='facebook'
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.instagram.com'
                  target='_blank'
                  aria-label='instagram'
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.youtube.com'
                  target='_blank'
                  aria-label='youtube'
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.twitter.com'
                  target='_blank'
                  aria-label='twitter'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.linkedin.com'
                  target='_blank'
                  aria-label='linkedin'
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
