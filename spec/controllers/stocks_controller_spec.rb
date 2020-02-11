require 'rails_helper'

RSpec.describe StocksController, type: :controller do
  let!(:stock) { Stock.create!(symbol: 'AAA', company_name: 'AAA Company') }

  describe 'GET /stocks' do
    let(:params) { {} }

    subject { get(:index, params: params) }

    its(:code) { is_expected.to eq('200') }
    its(:body) { is_expected.to eq([StockSerializer.new(stock)].to_json) }

    context 'when valid search tocken specified' do
      let!(:specific_stock) { Stock.create!(symbol: 'BBB', company_name: 'BBB Company') }

      let(:q) { 'some_token' }
      let(:params) { { q: q } }

      before do
        allow(Stock)
          .to receive(:search)
          .with(q: q)
          .and_return(Stock.where(id: specific_stock))
      end

      its(:code) { is_expected.to eq('200') }
      its(:body) { is_expected.to eq([StockSerializer.new(specific_stock)].to_json) }
    end

    context 'when limit param specified' do
      let(:params) { { limit: 1 } }

      its(:code) { is_expected.to eq('200') }
      its(:body) { is_expected.to eq([StockSerializer.new(stock)].to_json) }

      context 'and there is another stock' do
        before { Stock.create!(symbol: 'BBB', company_name: 'BBB Company') }

        its(:body) { is_expected.to eq([StockSerializer.new(stock)].to_json) }
      end
    end
  end

  describe 'GET /stocks/:symbol' do
    let(:params) { { symbol: stock.symbol } }

    subject { get(:show, params: params) }

    its(:code) { is_expected.to eq('200') }
    its(:body) { is_expected.to eq(StockSerializerWithHistory.new(stock).to_json) }

    context 'when stock with the specified symbol does not exist' do
      let(:params) { { symbol: SecureRandom.alphanumeric } }

      its(:code) { is_expected.to eq('404') }
    end

    context 'when stock symbol specified in different case' do
      let(:params) { { symbol: 'aaa' } }

      its(:code) { is_expected.to eq('200') }
      its(:body) { is_expected.to eq(StockSerializerWithHistory.new(stock).to_json) }
    end
  end
end
