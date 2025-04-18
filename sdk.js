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
	cacheComponents: ["sn-embedx-case-form","sn-embedx-case-list","sn-embedx-task-calendar","sn-embedx-profile-card"] 
});
function getTokenCallBack() {
	var idToken = access_token;
	return Promise.resolve(idToken);
}
await login();
 const elRef1 =  document.getElementById("cmp1");
	const elRef2 =  document.getElementById("cmp2");
	const elRef3 =  document.getElementById("cmp3");
	  setProperties(elRef1, {"string1": "Rohit Kumar Dogra", "string2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EtqOpuewOP5rSURN8E4W8rUPhuGoPK2LKw&s", "string3": "Software Developer, India"});
	 setProperties(elRef2, {"string1": "Reusable Component 2", "string2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljLYzn_kIHrdcxscu0UtQHr1fFBRA5zkP-_uSQOReobb_94IIvRpiFec&s","string3":"Web Embeddable, SNOW"});
	  	  setProperties(elRef3, {"string1": "Reusable Component 3", "string2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfv3tlXTmSWblrAdjvrW1PMW2dD55aKl9pA&s","string3":"Embed UIB Component,India"});

// await logout();


