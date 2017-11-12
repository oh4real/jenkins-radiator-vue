# jenkins-radiator-vue

> A Jenkins build radiator using VueJs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# NOTE! update config/prodEnv.JENKINS_HOST or supply as environment argument
npm run dev

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

## For Vhosting
#### Ure the following Apache reverse proxy vhost config (or similar for NGINX) to your web server:
```
<VirtualHost *:80>
	...
	DocumentRoot "/SERVER/PATH/TO/jenkins-radiator-vue/dist"
	ServerName jenkins-radiator
	...
	<Directory />    
		RewriteEngine On
		RewriteRule /(view|api/job)/(.*) http://###YOUR.JENKINS.SERVER###/$1/$2 [P]
		...
	</Directory>
</VirtualHost>
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
