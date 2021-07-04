import * as React from 'react';
import { Nav } from '@fluentui/react/lib/Nav';

const navLinkGroups = [
  {
    links: [
      {
        name: 'Parent link 1',
        url: '/',
        expandAriaLabel: 'Expand Parent link 1',
        collapseAriaLabel: 'Collapse Parent link 1',
        links: [
          {
            name: 'Child link 1',
            url: '/',

          },
          {
            name: 'Child link 2',
            url: '/',

            expandAriaLabel: 'Expand Child link 2',
            collapseAriaLabel: 'Collapse Child link 2',
            links: [
              {
                name: '3rd level link 1',
                url: '/',
    
              },
              {
                name: '3rd level link 2',
                url: '/',
    
              },
            ],
          },
          {
            name: 'Child link 3',
            url: '/',

          },
        ],
      },
      {
        name: 'Parent link 2',
        url: '/',
        expandAriaLabel: 'Expand Parent link 2',
        collapseAriaLabel: 'Collapse Parent link 2',
        links: [
          {
            name: 'Child link 4',
            url: '/',

          },
        ],
      },
    ],
  },
];

export default function List() {
  return <Nav className="ms-Nav-list" ariaLabel="Nav example with nested links" groups={navLinkGroups} />;
};
