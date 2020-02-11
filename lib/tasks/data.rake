require 'csv'

namespace :data do
  task load: :environment do
    puts 'Loading the data...'

    data = CSV
      .foreach('config/companylist.csv', headers: true)
      .collect{ |r| { symbol: r['Symbol'], company_name: r['Name'] } }

    Stock.upsert_all(data, unique_by: :symbol)

    puts "Done. Records loaded: #{Stock.count}"
  end
end
