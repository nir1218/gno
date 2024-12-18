var n=class r{DOM;baseUrl;static SELECTORS={container:"#header-searchbar",inputSearch:"[data-role='header-input-search']",breadcrumb:"[data-role='header-breadcrumb-search']"};constructor(){this.DOM={el:document.querySelector(r.SELECTORS.container),inputSearch:null,breadcrumb:null},this.baseUrl=window.location.origin,this.DOM.el?this.init():console.warn("SearchBar: Main container not found.")}init(){let{el:e}=this.DOM;this.DOM.inputSearch=e?.querySelector(r.SELECTORS.inputSearch)??null,this.DOM.breadcrumb=e?.querySelector(r.SELECTORS.breadcrumb)??null,this.DOM.inputSearch||console.warn("SearchBar: Input element for search not found."),this.bindEvents()}bindEvents(){this.DOM.el?.addEventListener("submit",e=>{e.preventDefault(),this.searchUrl()})}searchUrl(){let e=this.DOM.inputSearch?.value.trim();if(e){let t=e;/^https?:\/\//i.test(t)||(t=`${this.baseUrl}${t.startsWith("/")?"":"/"}${t}`);try{window.location.href=new URL(t).href}catch{console.error("SearchBar: Invalid URL. Please enter a valid URL starting with http:// or https://.")}}else console.error("SearchBar: Please enter a URL to search.")}},i=()=>new n;export{i as default};