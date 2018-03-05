FROM nginx:alpine


RUN mkdir -p /data/log/nginx \
  && ln -sf /dev/stdout /data/log/nginx/juhui.access.log \
  && ln -sf /dev/stderr /data/log/nginx/juhui.error.log


COPY dist /data/dist
COPY juhui.docker.conf /etc/nginx/conf.d/juhui.conf

CMD nginx -g 'daemon off;'
