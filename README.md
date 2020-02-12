# Prerequisites

- Ruby >= 2.5 ( [Installation instructions](https://www.ruby-lang.org/en/documentation/installation/))
- Bundler >= 1.16.1 ([Installation instructions](https://bundler.io/))
- Yarn >= 1.9 ([Installation instructions](https://classic.yarnpkg.com/en/docs/install/#mac-stable))

# Configuration / Installation

## BE

1. Clone the project
2. Go to the project directory
3. Install Rails dependencies: `bundle install`
4. Prepare database: `bundle exec rake db:create db:migrate data:load`
5. Add IEX publishable token to the config file: `config/initializers/iex.rb`
6. Start API server: `bundle exec rails s`
7. Check API server. Go to `http://localhost:3000/stocks`.

## FE

1. Go to the directory `client` inside the project directory
2. Install dependencies: `yarn install`
3. Go to the project directory. Start FE server: `yarn run start`
4. Check FE server. Go to `http://localhost:3001/`
