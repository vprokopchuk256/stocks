class GetStockHistory
  attr_reader :symbol

  def initialize(symbol)
    @symbol = symbol
  end

  def execute
    self.class.iex_client.chart(symbol, '1m').collect do |hrec|
      {
        date: hrec.date,
        open: hrec.open,
        hight: hrec.high,
        low: hrec.low,
        close: hrec.close
      }
    end
  end

  def self.iex_client
    @iex_client ||= IEX::Api::Client.new
  end
end
