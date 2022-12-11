import React, { useState } from 'react';


const TabGenerator = (props) => {
  const tabs=[
    {"id":1 , "tab": 'Tab1', "index":"content is showing here."},
    {"id":2, "tab": 'Tab2' , "index":"content is showing here."},
    {"id":3, "tab": 'Tab3', "index":"content is showing here."}   
]
  const onClickHandler = (e,value) => {
    e.preventDefault();
    console.log(value.id);
    props.onTab(value)
    return (value.index);
}
return (
<>
<div>
{tabs.map(tab => {
    return <button onClick={ (e) => onClickHandler(e, tab) } key={tab.id}>{ tab.tab }</button>})};
</div>
</>
)
}

export default TabGenerator


