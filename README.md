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

You should see something like this: https://www.dropbox.com/s/bh6urm9mgc94b12/Stocks.mov?dl=0

# Interesting places in the code

1. Where the history data is received: https://github.com/vprokopchuk256/stocks/blob/master/app/services/get_stock_history.rb
2. Where the stocks and history serialized for client: https://github.com/vprokopchuk256/stocks/blob/master/app/serializers/stock_serializer_with_history.rb
3. Where the data is dispatched to the client: https://github.com/vprokopchuk256/stocks/blob/master/app/controllers/stocks_controller.rb
4. Main page ( search and details ): https://github.com/vprokopchuk256/stocks/blob/master/client/src/Home.js
5. Details component ( with chart ): https://github.com/vprokopchuk256/stocks/blob/master/client/src/Details.js
