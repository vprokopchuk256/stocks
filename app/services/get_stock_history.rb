class GetStockHistory
  attr_reader :symbol

  def initialize(symbol)
    @symbol = symbol
  end

  def execute
    IEX::Api::Client.new.chart(symbol, '1m').collect do |hrec|
      {
        date: hrec.date,
        open: hrec.open,
        hight: hrec.high,
        low: hrec.low,
        close: hrec.close
      }
    end
  end
end
