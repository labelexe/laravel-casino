FROM php:7.4.3-fpm

COPY . /var/www/html
WORKDIR /var/www/html

RUN apt-get update && apt-get install -y --no-install-recommends \
  zip \
  unzip \
  libicu-dev \
  libpq-dev


RUN docker-php-ext-install intl pdo pdo_pgsql

#Для разработчиков
RUN pecl install xdebug; \
        { \
            echo "[xdebug]"; \
            echo "zend_extension=$(find /usr/local/lib/php/extensions/no-debug-non-zts-20190902 -name xdebug.so)"; \
            echo "xdebug.mode=debug"; \
            echo "xdebug.start_with_request=yes"; \
            echo "xdebug.client_host=host.docker.internal"; \
            echo "xdebug.client_port=9013"; \
        } >> /usr/local/etc/php/conf.d/docker-php-xdebug.ini;
RUN docker-php-ext-enable xdebug
RUN pecl install redis

RUN cd /usr/local/etc/php/conf.d/ && \
  echo 'memory_limit = -1' >> /usr/local/etc/php/conf.d/docker-php-memlimit.ini

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install

RUN php artisan key:generate
RUN php artisan jwt:secret
RUN php artisan cache:clear
RUN php artisan config:clear
RUN php artisan storage:link

# generating docs
RUN php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
RUN php artisan "l5-swagger:generate"
#RUN php artisan serve

RUN sed -i 's/9000/9001/' /usr/local/etc/php-fpm.d/zz-docker.conf
# Permissions
#RUN chown -R root:www-data /var/www/html
#RUN chmod u+rwx,g+rx,o+rx /var/www/html
#RUN find /var/www/html -type d -exec chmod u+rwx,g+rx,o+rx {} +
#RUN find /var/www/html -type f -exec chmod u+rw,g+rw,o+r {} +
