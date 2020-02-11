class StockSerializerWithHistory < StockSerializer
  attributes :history

  def history
    @history ||= GetStockHistory.new(object.symbol).execute
  end
end
