require 'rack/rewrite'

use Rack::Rewrite do
  rewrite '/', '/index.html'
  # Uncomment the next line if you want cache-busting URLs and you are NOT using Rack::StaticCache
  # rewrite %r{^(.+)\-(\d+)\.(js|css|png|jpg|gif|pdf)$}, '$1.$3'
end

run Rack::Directory.new('build')
