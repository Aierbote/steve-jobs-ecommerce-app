(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{1742:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return n(6892)}])},337:function(e,r,n){"use strict";n.d(r,{AQ:function(){return x},RX:function(){return h}});var i=n(5893),t=n(9882),s=n(7294),d=n(1664),l=n.n(d);let c={width:"23rem",height:"26rem",border:"0.0625rem solid #00000029",borderRadius:"1rem",padding:"1.5rem 1rem",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"3fr repeat(2, 1fr)"},o={width:"90vw",padding:"0",margin:"1rem auto",overflow:"hidden",display:"grid",gridTemplateColumns:"repeat(3, minmax(20rem, 0.8fr))",gridColumnGap:"0.5rem",rowGap:"1rem"};function u(e){let{qty:r,userId:n,title:d,description:o,id:u,price:h,image:a,thumbnail:x}=e,{addToCart:j}=(0,s.useContext)(t.I);return(0,i.jsxs)("div",{style:c,children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:x,alt:d})}),(0,i.jsx)("h3",{children:d}),(0,i.jsx)("p",{style:{gridArea:"2 / 1 / 3 / 3"},children:o}),(0,i.jsxs)("div",{style:{gridArea:"3 / 1 / 4 / 3",textAlign:"end"},children:[(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:["Price: ",h.toFixed(2),"€"]})}),(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:["In stock: ",r]})}),(0,i.jsx)(l(),{href:"/product/[id]",as:"product/".concat(u),children:(0,i.jsx)("button",{children:"Product details"})}),(0,i.jsx)("button",{onClick:()=>{console.log("addToCart",u),j(u)},children:"Add To Cart"})]})]},u)}function h(e){let{products:r}=e,{loading:n}=(0,s.useContext)(t.I);return(0,i.jsxs)("div",{style:o,children:[n&&(0,i.jsx)("p",{children:"Loading Products..."}),null==r?void 0:r.map(e=>{let{qty:r,userId:n,title:t,description:s,id:d,price:l,image:c,thumbnail:o}=e;return(0,i.jsx)(u,{qty:r,userId:n,title:t,description:s,id:d,price:l,image:c,thumbnail:o},d)})]})}function a(e){let{qty:r,userId:n,title:d,description:l,id:o,price:u,image:h,thumbnail:a}=e,{removeFromCart:x,removeTheseFromCart:j}=(0,s.useContext)(t.I);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:c,children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:a,alt:d})}),(0,i.jsx)("h3",{children:d}),(0,i.jsx)("p",{style:{gridArea:"2 / 1 / 3 / 3"},children:l}),(0,i.jsxs)("div",{style:{gridArea:"3 / 1 / 4 / 3",textAlign:"end"},children:[(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:["Price: ",u.toFixed(2),"€"]})}),(0,i.jsx)("p",{children:(0,i.jsxs)("b",{children:["Ordering: ",r]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{onClick:()=>{console.log("removeFromCart",o),x(o)},children:"Remove One"}),(0,i.jsx)("button",{onClick:()=>{console.log("removeTheseFromCart",o),j(o)},children:"Remove All"})]})]})]},o)})}function x(){let{cart:e,products:r}=(0,s.useContext)(t.I);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{style:o,children:null==e?void 0:e.map(e=>{let{id:n,quantity:t}=e,s=null==r?void 0:r.find(e=>e.id===n);return s?(0,i.jsx)(a,{qty:t,userId:s.userId,title:s.title,description:s.description,id:n,price:s.price,image:s.image,thumbnail:s.thumbnail},n):null})})})}},6892:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var i=n(5893),t=n(9882),s=n(337),d=n(1664),l=n.n(d),c=n(7294);function o(){let{counterInCart:e,total:r,pay:n,done:d}=(0,c.useContext)(t.I);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Cart"}),(0,i.jsxs)("h3",{children:["Total: ",r.toFixed(2),"€"]}),(0,i.jsxs)("button",{disabled:!e,onClick:()=>{console.log("Proceeding with payment"),n(),d()},children:[!e&&(0,i.jsx)("span",{children:"Cart is empty"}),!!e&&(0,i.jsx)(l(),{href:"/success",children:"Proceed With Purchase"})]}),(0,i.jsx)(s.AQ,{})]})}}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=1742)}),_N_E=e.O()}]);