import { init , login , logout } from 'https://gtmsomdemo.service-now.com/uxasset/externals/sn_embeddable_core/index.jsdbx';

await init({
	theme: 'fad87d2ca304121029a4d1aed31e610f',  /* sys_id of the theme to use for the embeddable components in your website*/
	baseURL: 'https://gtmsomdemo.service-now.com', /* Base URL of the instance to be used for the embeddable components in your website*/
	authCallback: getTokenCallBack, /* Function which returns the auth token for the current user, required for auth setup*/
	module: '7841cdaa93c22210c0fef84ea903d6d0', /* Contract Management Pro Module*/
	// cacheComponents: ["sn-embedx-case-form","sn-embedx-case-list","sn-embedx-case-view","sn-embedx-catalog-item-form","sn-embedx-preview_document","903894c1b742301035a36161de11a992","sn-embedx-kb-article-view"] /* Pre-caches resources for improved performance. Update component list as per your usage */
});
function getTokenCallBack() {
	var idToken; /* Get the id token for the current user */
	return Promise.resolve(idToken);
}
/* Uncomment below functions to handle login and logout once the user logs into your website */
// await login();
// await logout();

