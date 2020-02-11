require 'rails_helper'

RSpec.describe StocksController, type: :controller do
  describe 'GET /stocks' do
    let!(:stock) { Stock.create!(symbol: 'AAA', company_name: 'AAA Company') }
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
          .and_return([specific_stock])
      end

      its(:code) { is_expected.to eq('200') }
      its(:body) { is_expected.to eq([StockSerializer.new(specific_stock)].to_json) }
    end
  end
end
