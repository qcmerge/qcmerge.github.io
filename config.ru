require 'rack'
require 'rack/contrib/try_static'
require "rack/contrib/static_cache"

use ::Rack::TryStatic,
  :root => "build",     # where middleman files are generated
  :urls => %w[/],       # match all requests
  :try => ['.html', 'index.html', '/index.html'] # try these postfixes sequentially

# Cache static assets
use Rack::StaticCache, :urls => ['/'], :root => 'build'

# 404
run lambda { |env| [404, {'Content-Type' => 'text/html'}, ['whoops! Not Found']] }
