require 'rails_helper'

describe StockSerializer do
  let(:stock) { Stock.create!(symbol: 'AAA', company_name: 'AAA Company') }

  subject { described_class.new(stock).as_json }

  it do
    is_expected.to eq(
      symbol: stock.symbol,
      company_name: stock.company_name
    )
  end
end
