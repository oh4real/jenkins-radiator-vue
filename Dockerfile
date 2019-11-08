FROM nginx:alpine

COPY dist /usr/share/nginx/html

COPY site.conf /etc/nginx/conf.d/default.conf