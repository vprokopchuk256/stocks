class StockSerializer < ActiveModel::Serializer
  attributes :symbol, :company_name, :history

  def history
    @history ||= GetStockHistory.new(object.symbol).execute
  end
end
