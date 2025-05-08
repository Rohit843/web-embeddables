import { init , login , logout, setProperties } from 'https://empmkona1.service-now.com/uxasset/externals/sn_embeddable_core/index.jsdbx';
const clientId = 'c38f4f96b29c463f823c0eb4cdfe6e7e';
const clientSecret = '0kL@:)jN3m';
const username = 'admin';
const password = 'Oneagent@123';
const tokenUrl = 'https://empmkona1.service-now.com/oauth_token.do';

const params = new URLSearchParams();
params.append('grant_type', 'password');
params.append('username', username);
params.append('password', password);
params.append('client_id', clientId);
if (clientSecret) {
    params.append('client_secret', clientSecret);
}

const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
});

const { access_token } = await response.json();

await init({
	theme: '31bf91ae07203010e03948f78ad30095',  
	baseURL: 'https://empmkona1.service-now.com',
	authCallback: getTokenCallBack,
	cacheComponents: ["sn-embedx-card"] 
});
function getTokenCallBack() {
	var idToken = access_token;
	return Promise.resolve(idToken);
}

login().then(()=>{
  const elRef1 =  document.getElementById("cmp1");
  setProperties(elRef1, {"string2": "Rohit Kumar Dogra","json1":[{"label":"Software Developer","clickable":false,"id":"Software Developer"}],"json2":[{"label":"Mobile Phone","value":"+91-8968422868","clickable":true,"id":"mobile-link"},{"label":"Email","value":"rohit.kumardogra@servicenow.com","clickable":true,"id":"email-link"},{"label":"City","value":"Bangalore"},{"label":"State","value":"Karnatka"}]});
  const cards = document.getElementById("cards");
	cards.style.display = "flex";
	 const preloader = document.getElementById("preloader");
	preloader.style.display = "none";
	
});
	
// await logout();

