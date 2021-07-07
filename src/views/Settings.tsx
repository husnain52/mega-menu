import * as React from "react";
import TreeView from "../components/TreeView";
import {
  Button,
  Flex,
  Input,
  Text,
  Menu,
  Box,
  Dialog,
} from "@fluentui/react-northstar";
import {
  AddIcon,
  SearchIcon,
  ComposeIcon,
} from "@fluentui/react-icons-northstar";
import {items} from '../constants/data';
import { Link } from "react-router-dom";

const settingsItems = [
  {
    key: "step 1",
    icon: <ComposeIcon />,
    content: "Step 1",
  },
  {
    key: "step 2",
    icon: <ComposeIcon />,
    content: "Step 2",
  },
  {
    key: "step 3",
    icon: <ComposeIcon />,
    content: "Step 3",
  },
];
const admItems = [
  {
    key: "licensing",
    icon: <ComposeIcon />,
    content: "Licensing",
  },
  {
    key: "administration",
    icon: <ComposeIcon />,
    content: "Administration",
  },
];
function Icon(props: any): JSX.Element {
  return <span className="count-icon">{props.count}</span>;
}
const content = [
  { text: "Configure Navigation", weight: "bold", size: "larger" },
  {
    text: "Mega Menu can be configured here.",
    weight: "regular",
    size: "small",
  },
  { text: "Add Navigation Entries", weight: "bold", size: "large" },
  {
    text: "Here's an example of how sections can be used to configure inputs.",
    weight: "regular",
    size: "small",
  },
];

export default function Settings() {
  const checkLocalStorageItems = JSON.parse(localStorage.getItem('updatedItems') || '{}');
  const [state, setstate] = React.useState({
    title:"",
    url:"",
    id:"",
    updatedData:null,
    data: checkLocalStorageItems.length > 0 ? checkLocalStorageItems : items
  });

  const handleClick = () => {
    // create obj
    if (state.title) {
      const newObj = {
        title:state.title,
        id:state.id,
        url:state.url
      }

      // check for if any saved data on localstorage
      const checkLocalStorageItems = JSON.parse(localStorage.getItem('updatedItems') || '{}');
      // if yes
      if (checkLocalStorageItems.length > 0) {
        checkLocalStorageItems[0].items[0].items[0].items.push(newObj);
        localStorage.setItem('updatedItems',JSON.stringify(checkLocalStorageItems));
      } else {
      items[0].items[0].items[0].items.push(newObj);
      localStorage.setItem('updatedItems',JSON.stringify(items));
      }
      const updatedItems = JSON.parse(localStorage.getItem('updatedItems') || '{}');
      setstate({...state,data:updatedItems})
    } else {
      window.alert("Title cannot be empty!")
    }
  };
  const handleReset = () => {
    localStorage.removeItem('updatedItems')
  }
  return (
    <Flex>
      <Flex column>
        <Text
          weight="bold"
          size="larger"
          content="Settings"
          style={{ padding: "10px" }}
        />
        <span className="divider-horizontal"></span>
        <Box style={{ paddingTop: "20px" }}>
          <Icon count="1" />
          <Text
            weight="semibold"
            size="large"
            style={{ padding: "10px" }}
            content="Setting"
          />
          <Menu
            defaultActiveIndex={0}
            items={settingsItems}
            vertical
            pointing
          />
        </Box>
        <Box style={{ paddingTop: "20px" }}>
          <Icon count="2" />
          <Text
            weight="semibold"
            size="large"
            style={{ padding: "10px" }}
            content="Administration"
          />
          <Menu items={admItems} vertical pointing />
        </Box>
      </Flex>
      <span className="divider"></span>

      <Box styles={{ padding: "20px" }}>
        <Flex column gap="gap.small">
          {content.map((val: any) => (
            <Text
              key={val.text}
              size={val.size}
              weight={val.weight}
              content={val.text}
            />
          ))}
        </Flex>
        <Flex styles={{ marginTop: "20px", width: "70vh" }}>
          <Dialog
            cancelButton="Cancel"
            confirmButton={
              <Button icon={<AddIcon />} onClick={()=>handleClick()} content="Add Entry" primary />
            }
            content={
              <>
                <Input placeholder="ID" onChange={(e:any)=>setstate({...state,id:e.target.value})} />
                <Input placeholder="Title" style={{ marginLeft: "20px" }} onChange={(e:any)=>setstate({...state,title:e.target.value})} />
                <br />
                <Input placeholder="URL" style={{ marginTop: "20px" }} onChange={(e:any)=>setstate({...state,url:e.target.value})} />
              </>
            }
            header="Add Item"
            trigger={<Button icon={<AddIcon />} content="Add Entry" primary />}
          />
          <Input
            clearable
            icon={<SearchIcon />}
            placeholder="Search for entry"
            iconPosition="end"
            style={{ marginLeft: "20px" }}
          />
        </Flex>
        <TreeView data={state.data} />
        <Box styles={{ position: "absolute", bottom: "10%", right: "20%" }}>
          <Flex gap="gap.smaller">
            <a href="/"><Button content="Reset & Save" secondary onClick={()=>handleReset()} /></a>
            <Link to="/"><Button content="Save" primary /></Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}