webpackJsonp([0x7c6d8131fade],{563:function(t,n){t.exports={data:{markdownRemark:{html:'<p>HackerOne supports Single Sign-On (SSO) through Security Assertion Markup Language 2.0 (SAML 2.0) for these providers:</p>\n<ul>\n<li>Google</li>\n<li>Okta</li>\n<li>OneLogin</li>\n<li>Bitium</li>\n<li>Centrify</li>\n<li>MS ADFS</li>\n<li>Azure Active Directory</li>\n<li>Ping Identity</li>\n</ul>\n<p><a href="https://support.hackerone.com/hc/en-us/requests/new">Contact HackerOne</a> if you have another SAML provider.</p>\n<h3>Set Up</h3>\n<p>To configure Single Sign-On via SAML:</p>\n<ol>\n<li>Go to: <strong>Settings > General > Authentication</strong>.</li>\n<li>In the <strong>SAML</strong> section, click <strong>Add SAML settings</strong> to add your provider information.</li>\n<li>Enter information for these fields:</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Field</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Email Domain</td>\n<td>The email domain for users that will be required to use SAML authentication.</td>\n</tr>\n<tr>\n<td>Single Sign On URL</td>\n<td>The URL from your SAML provider to initiate a single sign-on attempt, sometimes called the login URL.</td>\n</tr>\n<tr>\n<td>X509 Certificate</td>\n<td>The certificate from your SAML provider to verify the single sign-on response.</td>\n</tr>\n</tbody>\n</table>\n<ol start="4">\n<li>Click <strong>Run test</strong>. This will launch a new window that\'ll allow a test login.</li>\n<li>Enter your login credentials to the test window. After your login attempt, the test will either succeed or fail and provide warning messages about your test login in the <strong>Status</strong> section.</li>\n<li>If your test fails, you can click the <strong>Run another test</strong> link.</li>\n<li>If your test is successful, request approval of your settings by clicking <strong>Request Verification</strong>.</li>\n<li>HackerOne will review and verify your SAML settings and notify you within 1 business day after the review is complete.</li>\n<li>After HackerOne approves your request, click the <strong>Migrate Users</strong> button when you\'re ready to enable SAML for all of your users.</li>\n</ol>\n<p><em>Note: Your team must be launched and not in sandbox mode to set up SAML.</em></p>\n<h3>Frequently Asked Questions</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Answer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>What is your metadata endpoint?</td>\n<td><a href="https://hackerone.com/users/saml/metadata">https://hackerone.com/users/saml/metadata</a></td>\n</tr>\n<tr>\n<td>Do you support Just In Time (JIT) provisioning?</td>\n<td>Yes, a new account will be created, but that account won\'t have access to any teams by default as a team admin will need to invite the user. If you\'d like users to auto join your team, \n<a href="https://support.hackerone.com/hc/en-us/requests/new">contact HackerOne</a>\n for more information.</td>\n</tr>\n<tr>\n<td>What happens to my existing 2FA and password?</td>\n<td>Your 2FA and password settings will be deleted, and you\'ll only be able to login with SSO when you\'re migrated. The SSO provider is expected to handle 2FA.</td>\n</tr>\n<tr>\n<td>Do you support SAML and password login?</td>\n<td>No, once a user is SAML enabled, they won\'t be able to login with their password.</td>\n</tr>\n<tr>\n<td>Is SAML configurable on a per user basis?</td>\n<td>No, all users belonging to a SAML enabled domain will be required to use SAML authentication.</td>\n</tr>\n<tr>\n<td>Do you support custom session times?</td>\n<td>Yes, HackerOne will respect the SessionNotOnOrAfter attribute if provided during authentication. This will allow you to customize the length of the session up to an upper bound of 2 weeks. If you provide this value, it\'ll be the source of truth and the \n<em>remember me</em>\n will be ignored.</td>\n</tr>\n<tr>\n<td>Do you support Single Logout?</td>\n<td>No, we don\'t support single logout at this time.</td>\n</tr>\n<tr>\n<td>What happens to users on my team that don\'t belong to our claimed domain?</td>\n<td>Turning on SSO will only affect users of the claimed domain. Any users that are using e-mail addresses on other domains will not be affected.</td>\n</tr>\n<tr>\n<td>What is your Entity ID?</td>\n<td>Our entity id is hackerone.com</td>\n</tr>\n<tr>\n<td>What is your ACS URL?</td>\n<td>Our ACS URL is \n<a href="https://hackerone.com/users/saml/auth">https://hackerone.com/users/saml/auth</a></td>\n</tr>\n</tbody>\n</table>\n<h3>Additional Information</h3>\n<p>Here are some screenshots that provide additional details on Service Provider and Attribute mapping:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-5c594.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.58775029446408%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQoz22R6w6DIAyFff+nNFFAQAZeuIj+2KFM3JKdmIbafvRCt23bNE1CCE5ijHvvD1JKqdp2aG5Vt+87SOBEjsMwrOsagt9veVI9wMYYj1tdCGHWM3CttbXWGKOVFlxoPVfhz8uYWRehzLIsOecHxi8UdM6d53ldFwZBJ7DhFmpSL6Vybf6BMTNuBVkDBRaCMYYbYcdxRALqt4I/MFLRGWKAYdECAbKMQELO8U8FZpxb59BwhdGclNJa17aKnO89/cCc3gnzwD9zlovzKV00RVUm/Yf7vmffsDFwtVIIgcS2lFIYoVwTy/fA7fVKqCoE7Ixe+yO4NYeCId56AywsOa/Na7+GAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml1"\n        title=""\n        src="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-e7ffa.png"\n        srcset="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-49813.png 125w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-dc8a5.png 250w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-e7ffa.png 500w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-dda24.png 750w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-c5f18.png 1000w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-22484.png 1500w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-5c594.png 1698w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-9146c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.59241706161137%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQoz3WRyRaCMAxF+f8vhJ3lMFgoMgnF4sJLgxxBuAsakrwMbdD3fZIkWZ7Hcay1nqbXwnqs53RBMAxDlqHNlbqlafpcGASx+FprX2cEBIwxiMvS1HWNTf/Ul7trXVUVpXE652SEo7htW8I0cZ5xHB8eQvM8sxclsFEeRljETdMURUGS1GZOY8ivKIen6zrsbc+TzgwstQGNdMbgV8TY1nMUk4d4W4nOpUc6U5pbkLlOxG8P68mtwOwRG+dvaCeWwWqP3Nn2sN+nPq66EyuloigKw5DxaHKV+s8HAEg9qKQIbZAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml_2"\n        title=""\n        src="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-e7ffa.png"\n        srcset="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-49813.png 125w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-dc8a5.png 250w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-e7ffa.png 500w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-dda24.png 750w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-c5f18.png 1000w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-22484.png 1500w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-9146c.png 1688w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{path:"/programs/single-sign-on-sso-via-saml.html",id:"programs/single-sign-on-sso-via-saml",title:"Single Sign-On (SSO) via SAML",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-single-sign-on-sso-via-saml-html-caab404c372129bf6cc7.js.map