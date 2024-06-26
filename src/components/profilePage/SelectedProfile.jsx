import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import { useMatchMedia } from "../../helpers/useMatchMedia";
import logoimg from "../browsePage/navBar/Screenshot__344_-removebg-preview.png"

import './styles/index.scss';

export default function SelectedProfile ({ user, setProfile }) {
  const isTabletDesktopResolution = useMatchMedia("(min-width:601px), true");
  return (
    <>
      <div className='headerNav'>
        <Link className='netflixLogo' to={ ROUTES.HOME }>
        {
						isTabletDesktopResolution ? (
							<img
									className="navLogo"
									src={logoimg}
									alt="Netflix logo"
								/>
						):(
							<img
									className="navMobileLogo"
									src={logoimg}
									alt="Netflix Mobile logo"
								/>
						)}
        </Link>
        {/* manage with pencil */}
      </div>
      <div className="profileContainer">
          <h1>Who's Watching?</h1>
          <ul>
            <li>
              <img  
              onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
              data-testid="user-profile"
              src={ user?.photoURL ? `/images/users/${user?.photoURL}.png` : '/images/misc/loading.gif'}
              alt="teal netflix avatar icon"
              />
              <p>{user.displayName}</p>
            </li>
          </ul>
      </div>
    </>
  )
}

