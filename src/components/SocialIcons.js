import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';
import React from 'react'

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="http://twitter.com"><FaTwitter></FaTwitter></a>
            </li>
            <li>
                <a href="http://facebook.com"><FaFacebook></FaFacebook></a>
            </li>
            <li>
                <a href="http://linkedin.com"><FaLinkedin></FaLinkedin></a>
            </li>
        </StyledSocialIcons>
    )
}

export default SocialIcons
