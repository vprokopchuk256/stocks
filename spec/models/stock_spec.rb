require 'rails_helper'

RSpec.describe Stock, type: :model do
  subject!(:stock) { Stock.create(symbol: 'AAA', company_name: 'AAA Company') }

  it { is_expected.to validate_presence_of(:symbol) }
  it { is_expected.to validate_presence_of(:company_name) }

  describe '.search' do
    let(:q) { 'AAA Company' }

    subject { described_class.search(q: q) }

    it { is_expected.to eq([stock]) }

    context 'when valid partial name specified' do
      let(:q) { 'AAA C' }

      it { is_expected.to eq([stock]) }
    end

    context 'when invalid partial name specified' do
      let(:q) { 'AAA B' }

      it { is_expected.to be_blank }
    end

    context 'when valid partial name with different case specified' do
      let(:q) { 'AaA c' }

      it { is_expected.to eq([stock]) }
    end
  end
end
