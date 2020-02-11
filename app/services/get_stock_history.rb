class GetStockHistory
  attr_reader :symbol

  def initialize(symbol)
    @symbol = symbol
  end

  def execute
    IEX::Api::Client.new.chart(symbol, '1m').collect do |hrec|
      {
        date: hrec.date,
        value: [hrec.open, hrec.high, hrec.low, hrec.close].sum / 4
      }
    end
  end
end
