function crack(){var blocked_url=document.getElementById('url').textContent;var uri=new URL(blocked_url);var domain=uri.hostname;if(domain=='www.google.co.jp'){blocked_url=uri.searchParams.get('url');document.getElementById('url').textContent=blocked_url}var uri=new URL(blocked_url);var hacked_url="http://munimuni.herokuapp.com/web/_"+window.btoa(uri.protocol+"//"+uri.hostname)+"_"+uri.pathname+uri.search;console.log(hacked_url);location.href=hacked_url}
