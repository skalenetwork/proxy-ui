/**
 * @license
 * SKALE proxy-ui
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * @file Header.js
 * @copyright SKALE Labs 2021-Present
*/

import React from 'react';
import styled from '@emotion/styled'

import detectEthereumProvider from '@metamask/detect-provider';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import NetworksDropdown from './NetworksDropdown';
import logo from '../skale-logo.svg';

import LinkIcon from '@mui/icons-material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArticleIcon from '@mui/icons-material/Article';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const SkAppBar = styled(AppBar)({
    // 'background-color': 'rgb(22, 23, 29)',
    'background-color': '#141414',
    padding: '15pt 0',
    'box-shadow': 'none',
    'background-image': 'none'
});

export const MAIN_WEBSITE_URL = process.env["REACT_APP_MAIN_WEBSITE_URL"];
export const DOCS_WEBSITE_URL = process.env["REACT_APP_DOCS_WEBSITE_URL"];
export const ABIS_URL = process.env["REACT_APP_ABIS_URL"];


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.checkWeb3Connection=this.checkWeb3Connection.bind(this);
  }

  componentDidMount() {
    this.checkWeb3Connection();
    var intervalId = setInterval(this.checkWeb3Connection, 5000);
    this.setState({intervalId: intervalId});
  }
 
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
 
 async checkWeb3Connection() {
    let provider;
    try {
      provider = await detectEthereumProvider();
    } catch {
      provider = null;
    }
    
    if (provider && !this.props.connected) {
      this.props.setConnected(true);
      this.props.setProvider(provider);
    }
  }

  render() {
    return (
      <SkAppBar position="fixed" className="sk-header">
        <Toolbar className='flex-container'>
            <div className="flex-container fl-centered-vert fl-grow">
              <a target="_blank" rel="noreferrer" href={MAIN_WEBSITE_URL} className='undec'>
                <img src={logo} className="logo" alt="logo" />
              </a>
            </div>
            <div className="flex-container marg-ri-20">
              <a target="_blank" rel="noreferrer" href={DOCS_WEBSITE_URL} className='undec skdLink'>
              <Button
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                color="primary"
                startIcon={<MenuBookIcon/>}
                className='skBtn'
              > 
                Docs
              </Button>
              </a>
            </div>
            <div className="flex-container">
              <a target="_blank" rel="noreferrer" href={ABIS_URL} className='undec skdLink'>
              <Button
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                color="primary"
                startIcon={<BuildCircleIcon/>}
                className='skBtn'
              > 
                ABIs
              </Button>
              </a>
            </div>
            {/* <div className="flex-container">
              <NetworksDropdown/>
            </div> */}
        </Toolbar>
    </SkAppBar>
    )
  }
}