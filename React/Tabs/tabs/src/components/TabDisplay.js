import React from 'react';


const TabDisplay = (props) => {
    
return (
<pre><textarea value={props.tabs === ""?"":"this shows tab"+props.tabs.id }></textarea></pre>
)
}


export default TabDisplay;

