source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

gem 'rails', '~> 6.1.4', '>= 6.1.4.1'
gem 'puma', '~> 5.0'
gem 'webpacker', '~> 5.0'
gem 'devise'
gem 'rails-i18n'
gem 'devise-i18n'
gem 'carrierwave'
gem 'rmagick'
gem 'fog-aws'
gem 'mailjet'
gem 'dotenv-rails'

gem 'bootsnap', '>= 1.4.4', require: false

group :production do
  gem 'pg'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'sqlite3', '~> 1.4'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
end
