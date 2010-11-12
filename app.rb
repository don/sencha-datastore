require 'rubygems'
require 'sinatra'

# do nothing for now, we're just serving static content
# TODO automatically build the manifest file

get '/' do
  redirect '/index.html'
end

