# jenkins-radiator-vue

> A Jenkins build radiator using VueJs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# NOTE! update config/prodEnv.JENKINS_HOST or supply as environment argument
npm run dev
- or -
JENKINS_HOST=http://jenkins.server.corn npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Vhosting Proxy to Jenkins
#### Add something like the following Apache reverse-proxy vhost config entry to your Apache server (or similar for NGINX):

Simple rewrite rule:

```
<VirtualHost *:80>
	...
	DocumentRoot "/PATH/TO/jenkins-radiator-vue/dist"
	ServerName jenkins-radiator
	DirectoryIndex index.html
	...
	<Directory />    
		RewriteEngine On
		RewriteRule /(view|api/job)/(.*) http://###YOUR.JENKINS.SERVER###/$1/$2 [P]
		...
	</Directory>
</VirtualHost>
```

or location directives

```
<Location /view/>
  ProxyPass http://###YOUR.JENKINS.SERVER###/view/
  ProxyPassReverse http://###YOUR.JENKINS.SERVER###/view/
</Location>

<Location /api/>
  ProxyPass http://###YOUR.JENKINS.SERVER###/api/
  ProxyPassReverse http://###YOUR.JENKINS.SERVER###/api/
</Location>
```

and NGINX location
```
    server {
       server_name  jenkins-radiator;
       root   /PATH/TO/jenkins-radiator-vue/dist;
        
       location / {
           index  index.html index.htm;
       }

       location ~ \/(view|api) {
           proxy_pass http://###JENKINS;
       }

    }
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
