import * as React from 'react';
import { Nav } from '@fluentui/react/lib/Nav';
import { initializeIcons, Text, Stack, ActionButton, TextField } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import GroupedList from '../components/GroupedList';

const navLinkGroups = [
  {
    name: 'Settings',
    links: [
      { name: 'Step 1', url: '', key: 'key1', icon:"NavigateExternalInline" },
      { name: 'Step 2', url: '', key: 'key2', icon:"NavigateExternalInline" },
      { name: 'Step 3', url: '', key: 'key3', icon:"NavigateExternalInline" },
    ],
  },
  {
    name: 'Administration',
    links: [
      { name: 'Licensing', url: '', key: 'key4',icon:"Link" },
      { name: 'Administration', url: '', key: 'key5', icon:"Link" },
    ],
  },
];
const navStyles = {
    root: {
      width: 208,
      height: "80vh",
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
      paddingLeft:"20px",
      paddingTop:"20px"
    },
  };
const mainStyles = {
    display:"flex"
};
const tokens = {
  padding:"20px",
  childrenGap:20
}
const addIcon = { iconName: 'Add' };
const searchIcon = { iconName: 'Search' };
const stackTokens = { childrenGap: 40 };
const buttonStyles = {
  position:"absolute",
  bottom:40,
  right:"10%"
}

export default function Settings() {
    initializeIcons();  
  return (
      <div style={mainStyles}>
        <Nav
        onRenderGroupHeader={_onRenderGroupHeader}
        ariaLabel="Nav example with custom group headers"
        groups={navLinkGroups}
        styles={navStyles}
        selectedKey="key1"
        />
        <Stack tokens={tokens}>
          <Stack>
              <Text variant="xLarge">Configure Navigation</Text>
              <Text variant="medium">Mega Menu can be configured here.</Text>
          </Stack>
          <Stack>
              <Text variant="mediumPlus">Add Navigation Entries</Text>
              <Text variant="medium">Here's an example of how sections can be used to configure inputs.</Text>
          </Stack>
          <Stack horizontal tokens={stackTokens}>
            <PrimaryButton iconProps={addIcon}>
             Add Entry
            </PrimaryButton>
            <TextField width="200px" type="search" placeholder="Search for a navigation entry" iconProps={searchIcon} />
          </Stack>
          <GroupedList />
        </Stack>
        <Stack horizontal tokens={stackTokens} style={buttonStyles}>
            <DefaultButton text="Discard" allowDisabledFocus />
            <PrimaryButton text="Save" allowDisabledFocus />
        </Stack>
        
    </div>
  );
};

function _onRenderGroupHeader(group) {
  return <h5>{group.name}</h5>;
}