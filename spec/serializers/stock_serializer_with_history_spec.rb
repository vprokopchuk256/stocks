require 'rails_helper'

describe StockSerializerWithHistory do
  let(:stock) { Stock.create!(symbol: 'AAA', company_name: 'AAA Company') }
  let(:hrec) do
    {
      date: Date.today,
      open: 12,
      high: 21,
      low: 11,
      close: 18
    }
  end

  subject { described_class.new(stock).as_json }

  before do
    allow(GetStockHistory)
      .to receive(:new)
      .with(stock.symbol)
      .and_return(instance_double(GetStockHistory, execute: [hrec]))
  end

  it do
    is_expected.to eq(
      symbol: stock.symbol,
      company_name: stock.company_name,
      history: [hrec]
    )
  end
end
