server {    
    
    listen       80;
    server_name  localhost;
    
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location ~ \/(view|api) {
        proxy_pass JENKINS_HOST;
    }

}