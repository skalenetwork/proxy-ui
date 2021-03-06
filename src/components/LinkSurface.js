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
 * @file LinkSurface.js
 * @copyright SKALE Labs 2021-Present
*/

import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import LanguageIcon from '@mui/icons-material/Language';


export default function LinkSurface(props) {
  return (
    <div>
        <a target="_blank" rel="noreferrer" href={props.url} className='undec'>
            <Tooltip title="Click to follow the link">
              <Button
                  variant="contained"
                  startIcon={<LanguageIcon/>}
                  size="large"
                  className='linkSurface'
                >
                {props.text}
              </Button>
            </Tooltip>
        </a>
    </div>
  );
}
