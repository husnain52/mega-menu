import * as React from 'react';
import { Tree } from '@fluentui/react-northstar';
import { TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar';

const titleRenderer = (Component, { content, expanded, open, hasSubtree, ...restProps }) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
    {content}
  </Component>
);

export default function TreeTitleCustomizationExample(props) {
  // const updatedItems = JSON.parse(localStorage.getItem('updatedItems') || '{}');
  // const [data, setdata] = React.useState(updatedItems ? retrieveData : items)
  // const ant = () => { 
  //   if (updatedItems) {
  //   setdata(updatedItems)
  //   }
  // }
  return (
  <Tree defaultActiveItemIds={['nav-item-1','drop-item-1','1-1-1']} className="tree" aria-label="Custom title" items={props.data} renderItemTitle={titleRenderer} />
)};
