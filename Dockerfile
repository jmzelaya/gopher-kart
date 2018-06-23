FROM httpd

# Copy source files.
COPY . /usr/local/apache2/htdocs/

# Add option to allow hyphens in URLs.
RUN echo "HttpProtocolOptions unsafe" >> /usr/local/apache2/conf/httpd.conf
