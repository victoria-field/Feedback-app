import React from 'react';
import ReactDOM from 'react-dom';



const getAttrs = (iframeTag) => {
  var doc = document.createElement('div');
  doc.innerHTML = iframeTag;

  const iframe = doc.getElementsByTagName('iframe')[0];
  return [].slice
    .call(iframe.attributes)
    .reduce((attrs, element) => {
      attrs[element.name] = element.value;
      return attrs;
    }, {});
}

// const Component = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <iframe {...getAttrs(this.props.iframe) } />
//       </div>
//     );
//   }
// });

const iframe = '<iframe src="https://calendar.google.com/calendar/embed?title=Eli%27s%20Calendar&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=m69ml3hn7lndt7eimg14ms97t8%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FChicago" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';

export default getAttrs;
