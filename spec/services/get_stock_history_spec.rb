require 'rails_helper'

describe GetStockHistory do
  let(:symbol) { double(:symbol) }

  subject(:service) { described_class.new(symbol) }

  it { is_expected.to have_attributes(symbol: symbol) }

  describe '#execute' do
    let(:hrec) do
      instance_double(
        IEX::Resources::Chart::Default,
        date: Date.today,
        open: 12,
        high: 21,
        low: 11,
        close: 18
      )
    end

    subject { service.execute }

    before do
      allow(IEX::Api::Client)
        .to receive(:new)
        .and_return(client = instance_double(IEX::Api::Client))

      allow(client)
        .to receive(:chart)
        .with(symbol, '1m')
        .and_return([hrec])
    end

    it do
      is_expected.to eq([{
        date: hrec.date,
        open: hrec.open,
        hight: hrec.high,
        low: hrec.low,
        close: hrec.close
      }])
    end
  end
end
